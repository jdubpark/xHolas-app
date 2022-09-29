import React, { useState } from 'react'
import { IoIosAddCircleOutline } from 'react-icons/io' 
import { BsTrash } from 'react-icons/bs' 

import Container from '../../components/Container'
import Block from '../../components/Block'
import List from '../../components/List'
import NewList from '../../components/NewList' 
// function Block()

interface BlockInput {
  id: string
  strategy: string
  chain: string
  destinationChain?: string
  inputToken: string
  inputAmount: number
  outputToken: string  
}

export type Blocks = BlockInput[]


export default function HomePageMain() {

  const [defaultBlock, setDefaultBlock] = useState<BlockInput>({ 
    id: 'item-0', 
    strategy: 'Swap',
    chain: 'Ethereum', 
    inputToken: 'HTK', 
    inputAmount: 0, 
    outputToken: 'CET'
  })

  const [blocks, setBlocks] = useState<Blocks>([
    defaultBlock
  ])

  const removeBlock = (index: number) => {
    console.log('remove block'); 
    setBlocks((blocks) =>
      blocks.filter(function(item, itemIdx) {
        return itemIdx != index; 
      }))
  }

  const addBlock = () => {
    console.log("pushing new block");
    setBlocks([...blocks, {
      ...defaultBlock,
      id: `item=${blocks.length}`,
    }]); 
  }

  return (
    <Container>
      <section>
        <div className="">
          <div className="py-6 px-10">
            <h2 className="text-[#7b3fe4] text-xl font-semibold">Build your transactions</h2>
          </div>
          <div className="flex flex-col space-y-2 py-4">
            {/* <List blocks={blocks} removeBlock={removeBlock}></List> */}
            <NewList blocks={blocks} setBlocks={setBlocks} removeBlock={removeBlock}></NewList>
            {/* {blocks.length ? blocks.map((block, idx) => (
                // <BlockRow key={`${block.name}_${idx}`} block={block} index={idx}/>
                <Block key={idx} defaultName={block.defaultName} defaultChain={block.defaultChain} index={idx} removeBlock={removeBlock}></Block>
              )
            ) : <></>} */}
          </div>
        </div>
        <div className="py-10  flex justify-center">
          <button onClick={addBlock}>
            <IoIosAddCircleOutline className="scale-125"/>
          </button>
        </div>
      </section>
    </Container>
  )
}
