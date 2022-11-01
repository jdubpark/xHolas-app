import React, { useEffect, useState } from 'react'
import LidoABI from '../contracts/Lido/Lido.json'
import { useContractWrite, useContract, useSigner } from 'wagmi'
import { BigNumber, ethers } from 'ethers'
import { useSendTransaction, usePrepareSendTransaction } from 'wagmi'
import { stakingConfig } from '../config' 

interface StakingUIParams {
    chain: string, 
    apr: number,
    staked: number
}

export default function StakingUI({ chain, apr, staked }: StakingUIParams) {

    const [amount, setAmount] = useState<number>(10); 
    const [address, setAddress] = useState<string>(); 

    useEffect(()=> {
        // set address based on chain config 
        const address: string = stakingConfig[chain]["Lido"]; 
        console.log(address); 
        setAddress(address); 
    }, [])
    
    const { config } = usePrepareSendTransaction({
        request: { to: address, value: BigNumber.from(amount)}
    })

    const { data, isLoading, isSuccess, sendTransaction } = useSendTransaction(config)

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
                    onClick={() => { 
                        console.log("stake button"); 
                        console.log("amount: ", amount); 
                        console.log("address: ", address); 
                        sendTransaction?.()}
                    }
                    >
                        Stake
                </button>
                {isLoading && <div> Check Wallet</div>}
                {isSuccess && <div> Transaction: {JSON.stringify(data)}</div>}

        </div>

        </div>
    )
}