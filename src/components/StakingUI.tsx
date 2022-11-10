import React, { useEffect, useState } from 'react'
import LidoABI from '../contracts/Lido/Lido.json'
import { useContractWrite, useContract, useSigner } from 'wagmi'
import { BigNumber, utils, providers, ethers } from 'ethers'
import { useSendTransaction, usePrepareSendTransaction } from 'wagmi'
import { stakingConfig } from '../config' 

interface StakingUIParams {
    chain: string, 
    apr: number,
    staked: number
}

export default function StakingUI({ chain, apr, staked }: StakingUIParams) {

    const [amount, setAmount] = useState<string>("0.0001"); 
    const [address, setAddress] = useState<string>("0x1643E812aE58766192Cf7D2Cf9567dF2C37e9B7F"); 

    // useEffect(()=> {
    //     // set address based on chain config 
    //     const address: string = stakingConfig[chain]["Lido"]; 
    //     console.log("useEffect address: ", address); 
    //     setAddress(address); 
    // }, [address])

    console.log("amount: ", utils.parseUnits(amount, 18))
    
    // const { config, error } = usePrepareSendTransaction({
    //     request: { to: address, value: utils.parseEther(amount)}
    // })

    // console.log("config: ", config); 
    // console.log("error: ", error); 

    // const { data, isLoading, isSuccess, sendTransaction } = useSendTransaction(config)

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

    return (
        <div className="">
            <div className="flex flex-col">
            StakingUI Component
            <h1 className="flex justify-center">
                {stakingConfig[chain].name}
            </h1>
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
                        console.log("address: ", address); 
                        sendTx(); 
                    }}
                    >
                        Stake
                </button>
                {/* {error && (
                    <div>An error occured preparing the transaction: {error.message}</div>
                )}
                {isLoading && <div> Check Wallet</div>}
                {isSuccess && <div> Transaction: {JSON.stringify(data)}</div>} */}

        </div>

        </div>
    )
}