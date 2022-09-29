import clsx from 'clsx'
import { ethers, Signer } from 'ethers'
import React, { ReactNode, useEffect, useState } from 'react'
import { BsTrash } from 'react-icons/bs'
import { GiTwinShell } from 'react-icons/gi'
import LmaoABI from '../contracts/Lmao.sol/Lmao.json';
import { useContract, useSigner } from 'wagmi';
import { config, networkConfig } from '../config';
import { FormControl, InputLabel, MenuItem, TextField } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Blocks } from '../pages/Home/Main'

interface BlockParams {
    blocks: Blocks
    setBlocks: React.Dispatch<React.SetStateAction<Blocks>>
    index: number
    id: string
    removeBlock: (index: number) => void
}

export default function Block({ blocks, setBlocks, id, index, removeBlock }: BlockParams) {

    // drop down options 
    const [chain, setChain] = useState<string>("");
    const [strategy, setStrategy] = useState<string>("");

    // for swaps 
    const [inputToken, setInputToken] = useState<string>("");
    const [inputAmount, setInputAmount] = useState<number>(0);
    const [outputToken, setOutputToken] = useState<string>("");
    const [outputAmount, setOutputAmount] = useState<number>(0);

    const [contractAddress, setContractAddress] = useState<string>(ethers.constants.AddressZero);

    const { data: signer, isError, isLoading } = useSigner();

    const goerliLmaoContract = useContract({
        addressOrName: contractAddress,
        contractInterface: LmaoABI.abi,
        signerOrProvider: signer
    })


    // configure contract addresses 
    // useEffect(() => {
    //     if (!chain || !strategy) return;
    //     const { contractAddress } = config[chain][strategy];
    //     setContractAddress(contractAddress);
    // }, [chain, strategy])

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

    // update the blocks array using id 
    const handleStrategyChange = (event: SelectChangeEvent) => {
        console.log('event.target.value: ', event.target.value);
        console.log('handle blocks: ', blocks); 
        setBlocks([...blocks].map((block) => {
            if (block.id == id) {
                return {
                    ...block,
                    strategy: event.target.value 
                }
            } else return block; 
        }))
        
    }

    const handleChainChange = (event: SelectChangeEvent) => {
        setChain(event.target.value);
    }

    const handleInputTokenChange = (event: SelectChangeEvent) => {
        setInputToken(event.target.value);
    }

    const handleInputAmountChange = (event: SelectChangeEvent) => {
        setInputAmount(parseInt(event.target.value));
    }

    const handleOutputTokenChange = (event: SelectChangeEvent) => {
        setOutputToken(event.target.value);
    }

    const handleOutputAmountChange = (event: SelectChangeEvent) => {
        setOutputAmount(parseInt(event.target.value));
    }


    return (
        <div className="bg-[#1a1b1f] shadow-xl rounded-xl py-4 px-10 flex flex-row justify-between">
            <div className="flex flex-row space-x-4 justify-center">
                <div>
                    {/* <span>Strategy</span>
                    <span>{name}</span> */}
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="input-label-strategy">Strategy</InputLabel>
                        <Select
                            labelId="select-strategy-label"
                            id="select-id"
                            value={strategy}
                            label="Strategy"
                            onChange={handleStrategyChange}
                        >
                            <MenuItem value={"Swap"}>Swap</MenuItem>
                            <MenuItem value={"Borrow"}>Borrow</MenuItem>
                            <MenuItem value={"Lend"}>Lend</MenuItem>
                            <MenuItem value={"Bridge"}>Bridge</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="input-label-chain">Chain</InputLabel>
                        <Select
                            labelId="select-chain-label"
                            id="select-id"
                            value={chain}
                            label="Chain"
                            onChange={handleChainChange}
                        >
                            <MenuItem value={"Fuji"}>Fuji</MenuItem>
                            <MenuItem value={"Goerli"}>Goerli</MenuItem>
                            <MenuItem value={"Ethereum"}>Ethereum</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                {
                    (strategy == "Bridge") && (
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                                <InputLabel id="input-label-chain">Destination Chain</InputLabel>
                                <Select
                                    labelId="select-chain-label"
                                    id="select-id"
                                    value={chain}
                                    label="Chain"
                                    onChange={handleChainChange}
                                >
                                    <MenuItem value={"Fuji"}>Fuji</MenuItem>
                                    <MenuItem value={"Goerli"}>Goerli</MenuItem>
                                    <MenuItem value={"Ethereum"}>Ethereum</MenuItem>
                                </Select>
                            </FormControl>
                    ) 
                }
                    {
                    (strategy == "Swap" || strategy == "Bridge") && (
                        <div className="flex flex-row justify-center">

                            <FormControl sx={{ m: 1, minWidth: 120 }}>
                                <InputLabel id="input-label-strategy">Input Token</InputLabel>
                                <Select
                                    labelId="select-strategy-label"
                                    id="select-id"
                                    value={strategy}
                                    label="Strategy"
                                    onChange={handleInputTokenChange}
                                >
                                    <MenuItem value={"Swap"}>HTK</MenuItem>
                                    <MenuItem value={"Borrow"}>CET</MenuItem>
                                </Select>
                            </FormControl>

                            <FormControl sx={{ m: 1, minWidth: 120 }}>
                                <InputLabel id="input-label-strategy">Output Token</InputLabel>
                                <Select
                                    labelId="select-strategy-label"
                                    id="select-id"
                                    value={outputToken}
                                    label="Strategy"
                                    onChange={handleOutputTokenChange}
                                >
                                    <MenuItem value={"HTK"}>HTK</MenuItem>
                                    <MenuItem value={"CET"}>CET</MenuItem>
                                </Select>
                            </FormControl>

                            <FormControl sx={{ m: 1, minWidth: 120 }}>
                                <TextField
                                    id="outlined-number"
                                    type="number"
                                    variant="outlined"
                                    required
                                    value={inputAmount}
                                    onChange={(event) => handleInputAmountChange}
                                >
                                </TextField>
                            </FormControl>

                        </div>
                    )
                }
            </div>
            <div className="flex flex-row">
                <div className="flex items-right px-10">
                    <button>
                        <GiTwinShell className="scale-150"></GiTwinShell>
                    </button>
                </div>

                <div className="flex items-center z-10">
                    <button onClick={() => removeBlock(index)} >
                        <BsTrash />
                    </button>
                </div>

            </div>

        </div>
    )
}
