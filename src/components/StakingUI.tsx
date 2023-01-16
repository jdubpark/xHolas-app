import React, { useEffect, useState } from 'react'
import LidoABI from '../contracts/Lido/Lido.json'
import ERC20ABI from '../contracts/ERC20/ERC20.json'
import VaultABI from '../contracts/Vault.json'
import { useContractWrite, useContract, useSigner } from 'wagmi'
import { BigNumber, utils, providers, ethers } from 'ethers'
import { useSendTransaction, usePrepareSendTransaction } from 'wagmi'
import { stakingConfig, ionConfig} from '../config' 

interface StakingUIParams {
    chain: string, 
    apr: number,
    staked: number
}

export default function StakingUI({ chain, apr, staked }: StakingUIParams) {

    const [amount, setAmount] = useState<string>("0.0001"); 
    const [address, setAddress] = useState<string>("0x1643E812aE58766192Cf7D2Cf9567dF2C37e9B7F"); 

    async function sendTx() {
        const provider = new providers.Web3Provider(window.ethereum, "any");
        provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const caller_pubkey = await signer.getAddress(); 

        const lidoAddr = stakingConfig[chain]["Lido"]; 
        const lidoContract = new ethers.Contract(lidoAddr, LidoABI, signer); 

        const tx = {
            to: address, 
            value: utils.parseUnits(amount, 18)
        }
        const deposit = await signer.sendTransaction(tx)
        const txHash = deposit.hash; 
        const receipt = deposit.wait(); 
        console.log("txHash: ", txHash); 
        console.log("receipt: ", receipt); 
    }


    async function depositStETH() {
        const provider = new providers.Web3Provider(window.ethereum, "any"); 
        const signer = provider.getSigner(); 
        const stETHVaultAddr = ionConfig[chain]["stETHVault"]; 
        console.log('addr: ', stETHVaultAddr); 
        const stETHVaultContract = new ethers.Contract(stETHVaultAddr, VaultABI.abi, signer); 
        console.log('contract: ', stETHVaultContract); 
        const address = await signer.getAddress(); 
        console.log('my address: ', address);

        const depositTx = await stETHVaultContract.deposit(1, address); 
        const depositTxSigned = await signer.signTransaction(depositTx);
        const depositTxSubmitted = await provider.sendTransaction(depositTxSigned); 
        const receipt = await depositTxSubmitted.wait(); 
    }

    return (
        <div className="">
            <div className="flex flex-col">
            StakingUI Component
            <h1 className="flex justify-center">
                {stakingConfig[chain].name}
            </h1>
            <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                    <div className="flex flex-row justify-around">
                        <div className="flex flex-col justify-center text-center">
                            {apr}%
                            <h2>
                                APR
                            </h2>
                        </div>
                        <div className="flex flex-col justify-center text-center">
                            ${staked}
                            <h2>
                                Staked
                            </h2>
                        </div>
                    </div>
                    <button className="py-2 my-4 flex justify-center border"
                        // disabled={!sendTransaction}
                        onClick={(e) => { 
                            console.log("stake button"); 
                            console.log("amount: ", amount); 
                            depositStETH(); 
                        }}
                        >
                            Deposit stETH
                    </button>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-row justify-around">
                        <div className="flex flex-col justify-center text-center">
                            {apr}%
                            <h2>
                                APR
                            </h2>
                        </div>
                        <div className="flex flex-col justify-center text-center">
                            ${staked}
                            <h2>
                                Total Staked
                            </h2>
                        </div>
                    </div>
                    <button className="py-2 my-4 flex justify-center border"
                        // disabled={!sendTransaction}
                        onClick={(e) => { 
                            console.log("stake button"); 
                            console.log("amount: ", amount); 
                            console.log("address: ", address); 
                            sendTx(); 
                        }}
                        >
                            Deposit rETH
                    </button>
                </div>
            </div>
            
            {/* {error && (
                <div>An error occured preparing the transaction: {error.message}</div>
            )}
            {isLoading && <div> Check Wallet</div>}
            {isSuccess && <div> Transaction: {JSON.stringify(data)}</div>} */}

        </div>

        </div>
    )
}