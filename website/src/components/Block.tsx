import clsx from 'clsx'
import React, { ReactNode, useState } from 'react'
import { BsTrash } from 'react-icons/bs'
import { GiTwinShell } from 'react-icons/gi'

interface BlockParams {
    defaultName: string
    defaultChain: string
    testnet?: boolean
    index: number
    removeBlock: (index: number) => void
}

export default function Block({ defaultName, defaultChain, testnet, index, removeBlock }: BlockParams) {

    const [chain, setChain] = useState<string>(defaultChain); 
    const [name, setName] = useState<string>(defaultName); 


    // execute single block tx 
    const execute = () => {
            
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
                    <button onClick={execute}>
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
