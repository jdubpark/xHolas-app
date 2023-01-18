import React, { useEffect, useState } from 'react'
import LidoABI from '../contracts/Lido/Lido.json'
import ERC20ABI from '../contracts/ERC20/ERC20.json'
import VaultABI from '../contracts/Vault.json'
import ERC20MockABI from '../contracts/ERC20Mock.json'
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

    // later modify to an object holding all network/provider vault balance
    const [vaultValue, setVaultValue] = useState<number>(0); 

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

    async function getVaultBalance() {
        const provider = new providers.Web3Provider(window.ethereum, "any"); 
        const signer = provider.getSigner(); 
        const stETHVaultAddr = ionConfig[chain]["stETHVault"]; 
        console.log('addr: ', stETHVaultAddr); 
        const stETHVaultContract = new ethers.Contract(stETHVaultAddr, VaultABI.abi, signer); 
        const totalVaultValue = await stETHVaultContract.totalVaultValue()
        console.log('totalVaultValue: ', totalVaultValue); 
        setVaultValue(parseInt(totalVaultValue._hex)); 
    }

    async function mintERC20Mock() {
        const provider = new providers.Web3Provider(window.ethereum, "any"); 
        const signer = provider.getSigner(); 
        const address = await signer.getAddress(); 
        const ERC20MockAddr = ionConfig[chain]["ERC20Mock"]; 
        const ERC20MockContract = new ethers.Contract(ERC20MockAddr, ERC20MockABI.abi, signer); 
        var exp = BigNumber.from("10").pow(18); 
        const amount = BigNumber.from("50").mul(exp); 
        const minted = await ERC20MockContract.mint(address, amount);
        console.log("minted: ", minted); 
    }


    async function depositStETH() {
        const provider = new providers.Web3Provider(window.ethereum, "any"); 
        const signer = provider.getSigner(); 

        // stETHVault 
        const stETHVaultAddr = ionConfig[chain]["stETHVault"]; 
        console.log('addr: ', stETHVaultAddr); 
        const stETHVaultContract = new ethers.Contract(stETHVaultAddr, VaultABI.abi, signer); 
        console.log('contract: ', stETHVaultContract); 
        const address = await signer.getAddress(); 
        console.log('my address: ', address);

        // ERC20Mock
        const ERC20MockAddr = ionConfig["goerli"]["ERC20Mock"]; 
        console.log('addr: ', ERC20MockAddr); 
        const ERC20MockContract = new ethers.Contract(ERC20MockAddr, ERC20MockABI.abi, signer); 
        // Check for allowance

        // var exp = BigNumber.from("10").pow(18); 
        // const allowance = BigNumber.from("100").mul(exp);  
        // const approved = await ERC20MockContract.approve(stETHVaultAddr, allowance)
        // console.log("approved: ", approved); 

        // approve MockERC20 
        var exp = BigNumber.from("10").pow(18); 
        const amount = BigNumber.from("5").mul(exp);  
        const depositTx = await stETHVaultContract.deposit(amount, address); 
        console.log("depositTx: ", depositTx); 
        // const depositTxSigned = await signer.signTransaction(depositTx);
        // const depositTxSubmitted = await provider.sendTransaction(depositTxSigned); 
        // const receipt = await depositTxSubmitted.wait(); 
        // console.log("receipt: ", receipt); 
        
    }

    async function redeemStETH() {
        const provider = new providers.Web3Provider(window.ethereum, "any"); 
        const signer = provider.getSigner(); 
    }

    return (
        <div className="text-midnight">
            <button className="border my-4"
            onClick={() => mintERC20Mock()}>
                Mint 50 ERC20Mock for Testing
            </button>
            <div className="flex flex-row">
                <button className="border my-4"
                onClick={() => getVaultBalance()}>
                    Query Vault Balance: {vaultValue}
                </button>
                
            </div>
            <div className="flex flex-col">
            StakingUI Component
            <h1 className="flex justify-center py-10">
                {stakingConfig[chain].name}
            </h1>
            <div className="grid grid-cols-2 gap-20 border py-8 px-20">
                <div className="grid grid-rows-2 gap-8">
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
                    <button className="py-2 border"
                        // disabled={!sendTransaction}
                        onClick={(e) => { 
                            console.log("stake button"); 
                            console.log("amount: ", amount); 
                            depositStETH(); 
                        }}
                        >
                            Deposit stETH
                    </button>
                    <button className="py-2 border"
                        // disabled={!sendTransaction}
                        onClick={(e) => { 
                            console.log("redeem button"); 
                            console.log("amount: ", amount); 
                            redeemStETH(); 
                        }}
                        >
                            Redeem stETH
                    </button>
                </div>
                <div className="grid grid-rows-2 gap-8">
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
                    <button className="py-2 border"
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
                    <button className="py-2 border"
                        // disabled={!sendTransaction}
                        onClick={(e) => { 
                  
                        }}
                        >
                            Redeem rETH
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