import React, { useState } from 'react'

import Container from '../../components/Container'

// function Block()

interface Block {
  name: string
  chain: string
  testnet?: boolean
}

type Blocks = Block[]

function BlockRow({ block }: { block: Block }) {
  return (
    <div className="py-4 px-10">
      <div>
        <span>Name:</span>
        <span>{block.name}</span>
      </div>
      <div>
        <span>Chain:</span>
        <span>{block.chain}</span>
      </div>
    </div>
  )
}

export default function HomePageMain() {
  const [blocks, setBlocks] = useState<Blocks>([
    {
      name: 'one',
      chain: 'Ethereum',
      testnet: true,
    },
    {
      name: 'two',
      chain: 'Polygon',
      testnet: true,
    },
  ])

  return (
    <Container>
      <section>
        <div className="bg-[#1a1b1f] shadow-xl rounded-xl">
          <div className="py-6 px-10">
            <h2 className="text-[#7b3fe4] text-xl font-semibold">Build your transactions</h2>
          </div>
          <div className="flex flex-col space-y-2 py-4">
            {blocks.length ? blocks.map((block, idx) => (<BlockRow key={`${block.name}_${idx}`} block={block} />)) : <></>}
          </div>
        </div>
      </section>
    </Container>
  )
}
