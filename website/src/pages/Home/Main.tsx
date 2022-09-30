import React, { useState } from 'react'
import { IoIosAddCircleOutline } from 'react-icons/io' 
import { BsTrash } from 'react-icons/bs' 

import Container from '../../components/Container'
import Block from '../../components/Block'
import List from '../../components/List'
import NewList from '../../components/NewList' 
import xHolas from '../../assets/xHolas.svg'
import { config } from '../../config'
import { ethers } from "ethers"
import { Dataset } from '@mui/icons-material'
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

  const [nonce, setNonce] = useState<number>(1); 

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

  const removeBlock = (id: string) => {
    console.log('remove block'); 
    setBlocks((blocks) =>
      blocks.filter(function(block, itemIdx) {
        return block.id != id; 
      }))
  }

  const addBlock = () => {
    console.log("pushing new block");
    setBlocks([...blocks, {
      ...defaultBlock,
      id: `item=${nonce}`,
    }]); 
    setNonce((prevNonce) => prevNonce + 1); 
  }

  const encodeParams = (shortABI: any, functionSig: any, params: any) => {
    // const shortABI = [
    //   'function swapExactTokensForETH(uint256 amountIn, uint256 amountOutMin, address[] calldata path)'
    // ]
    const data = []; 
    const iface = new ethers.utils.Interface(shortABI)
    const data1 = iface.encodeFunctionData(
      'swapExactTokensForETH',
      [
        ethers.utils.parseEther('0.0001'),
        '0',
        [
          '0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6', // WETH input token, output token 
          '0xf4b2cbc3ba04c478f0dc824f4806ac39982dce73', // USDT
        ],
      ],
    )

    const datas = [
      data1,
    ]
    return datas; 
  }

  const executeBlocks = () => {
    // get all strategy + chain -> handler(contract) address
    const tos = []; 
    const chainIds = []; 
    const configs = [
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000000000000000000000000000',
    ]
    const datas = []; 

    blocks.forEach((block) => {
      const addr = config[block.strategy][block.chain].contractAddress;
      const wormholeId = config[block.strategy][block.chain].wormholeId;
      
      const shortABI = config[block.strategy][block.chain].shortABI; 
      const functionSig = config[block.strategy][block.chain].functionSig; 

      let params = []; 
      if (block.strategy == "Swap") {
        params.push(block.inputToken); 
        params.push(block.inputAmount); 
      }
      let data = encodeParams(shortABI, functionSig, params);
      
      datas.push(data);  
      tos.push(addr); 
      chainIds.push(wormholeId); 
    })
    
    // call executeTransactionsEntryPoint
    // const contract = XHolas__factory.connect(networkConfig.goerli.xProxyAddress as string, signer.goerli)
    // const tx = await contract.batchExec(tos, configs, datas, {
    //   value: ethers.utils.parseEther('0.0001'),
    //   ...stupidConfig.goerli,
    // })

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
        <div className="py-10  flex flex-col space-y-2 items-center justify-center">
          <div className="hover:scale-110 duration-200 origin-center">
            <button onClick={addBlock} className="mb-10 origin-center scale-110 duration-200 ">
              <IoIosAddCircleOutline className="scale-150 origin-center duration-200 "/>
            </button>
          </div>
          

          <button onClick={executeBlocks}>
            <div className="inline-block align-middle hover:scale-125 duration-200 ">
                <img src={xHolas} alt="xHolasLogo" className="h-full w-full max-h-12" />
              </div>
          </button>
        </div>
      </section>
    </Container>
  )
}
