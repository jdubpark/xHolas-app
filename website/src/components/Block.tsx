import clsx from 'clsx'
import { ethers, Signer } from 'ethers'
import React, { ReactNode, useEffect, useState } from 'react'
import { BsTrash } from 'react-icons/bs'
import { GiTwinShell } from 'react-icons/gi'
import LmaoABI from '../contracts/Lmao.sol/Lmao.json'; 
import { useContract, useSigner } from 'wagmi'; 
import { config, networkConfig } from '../config'; 

interface BlockParams {
    defaultName: string
    defaultChain: string
    testnet?: boolean
    index: number
    removeBlock: (index: number) => void
}

export default function Block({ defaultName, defaultChain, testnet, index, removeBlock }: BlockParams) {

    // drop down options 
    const [chain, setChain] = useState<string>(defaultChain); 
    const [strategy, setStrategy] = useState<string>(""); 
    
    const [contractAddress, setContractAddress] = useState<string>(ethers.constants.AddressZero); 

    const [name, setName] = useState<string>(defaultName); // custom name for strategy 

    const { data: signer, isError, isLoading } = useSigner(); 

    const goerliLmaoContract = useContract({
        addressOrName: contractAddress,
        contractInterface: LmaoABI.abi, 
        signerOrProvider: signer
    })
    

    // configure contract addresses 
    useEffect(() => {
        if (!chain || !strategy) return;
        const { contractAddress } = config[chain][strategy]; 
        setContractAddress(contractAddress);
    }, [chain, strategy])

    // execute single b lock tx 
    const execute = () => {
        console.log('in execute'); 
        // const targetChainId = networkConfig['mumbai'].wormholeChainId;  
        // const targetContractAddress = networkConfig['mumbai'].lmaoContractAddress; 

        const goerliLmaoAddress = '0x561F1Ac3685Be6F77B6c6270F20d1cc703F083De'

        // const tx = goerliLmaoContract.executeBridgeOrigin(
        //     targetChainId, 
        //     targetContractAddress, 
        // )   
        // console.log('tx: ', tx); 

    }

    return (
        <div className="bg-[#1a1b1f] shadow-xl rounded-xl py-4 px-10 flex flex-row justify-between">
            <div>
                <div>
                    <span>Name:</span>
                    <span>{name}</span>
                </div>
                <div>
                    <span>Chain:</span>
                    <span>{chain}</span>
                </div>
            </div>
            <div className="flex flex-row">
                <div className="flex items-right px-10">
                    <button>
                        <GiTwinShell className="scale-150"></GiTwinShell>
                    </button>
                </div>

                <div className="flex items-center">
                    <button onClick={() => removeBlock(index)}>
                        <BsTrash />
                    </button>
                </div>

            </div>

        </div>
    )
}
