import React, { useCallback, useState } from 'react'
import { IoIosAddCircleOutline } from 'react-icons/io' 
import { BsTrash } from 'react-icons/bs' 
import { useContractWrite, useContract, useSigner } from 'wagmi'

import Container from '../../components/Container'
import StakingUI from '../../components/StakingUI' 

import NewList from '../../components/NewList' 
import { ethers } from "ethers"

import { XHolas, XHolas__factory } from '../../../types'
import XHolasABI from '../../contracts/xHolas.json' 

// assert {type: 'json'}

// import detectEthereumProvider from '@metamask/detect-provider';
// function Block()

interface BlockInput {
  id: string
  strategy: string
  chain: string
  targetChain?: string
  inputToken: string
  inputAmount: number
  outputToken: string  
}

export type Blocks = BlockInput[]


export default function HomePageMain() {
  const { data: signer, isError, isLoading } = useSigner()

  const [xHolasContractAddress, setXHolasContractAddress] = useState('')

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

  const contract = useContract({
    addressOrName: '0xaAEdbA647049E2Bf6E0b65B1f004609d90aeb22e', 
    contractInterface: XHolasABI, 
    signerOrProvider: signer
  })

  const encodeParams = (shortABI: any, functionSig: any, params: any) => {
    // const shortABI = [
    //   'function swapExactTokensForETH(uint256 amountIn, uint256 amountOutMin, address[] calldata path)'
    // ]
    console.log('shortABI: ', shortABI); 
    console.log('functionSig: ', functionSig); 
    console.log('params: ', params); 

    const iface = new ethers.utils.Interface(shortABI)
    console.log('iface: ', iface); 
    const data = iface.encodeFunctionData(
      'swapExactTokensForTokens',
      [
        ethers.utils.parseEther('0.0001'),
        '0',
        [
          '0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6', // WETH input token, output token 
          '0xf4b2cbc3ba04c478f0dc824f4806ac39982dce73', // USDT
        ],
      ],
    )
    console.log('data: ', data); 

    return data; 
  }

  return (
    <Container>
      <section>
        <div className="">
          <div className="py-6 px-10">
            <h2 className="text-midnight text-xl font-semibold">Staking Pools</h2>
          </div>
          <div className="px-10 flex flex-col space-y-2 py-4 ">
            <StakingUI chain={"mainnet"} apr={5.4} staked={1000000}></StakingUI>
            <StakingUI chain={"goerli"} apr={3.6} staked={900000}></StakingUI>
          </div>
        </div>
      </section>
    </Container>
  )
}
