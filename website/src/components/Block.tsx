import clsx from 'clsx'
import React, { ReactNode } from 'react'
import { BsTrash } from 'react-icons/bs' 

interface BlockParams {
    name: string 
    chain: string 
    testnet?: boolean
    index: number
    removeBlock: (index: number) => void
}

export default function Block({ name, chain, testnet, index, removeBlock } : BlockParams) {
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

            <div className="flex items-center">
                <button onClick={() => removeBlock(index)}>
                    <BsTrash />
                </button>
            </div>
        </div>
    )
}
