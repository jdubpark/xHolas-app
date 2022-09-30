/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  IDepositManager,
  IDepositManagerInterface,
} from "../../../../contracts/handlers/polygon/IDepositManager";
import type { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountOrNFTId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "depositBlockId",
        type: "uint256",
      },
    ],
    name: "NewDepositBlock",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "depositERC20ForUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IDepositManager__factory {
  static readonly abi = _abi;
  static createInterface(): IDepositManagerInterface {
    return new utils.Interface(_abi) as IDepositManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IDepositManager {
    return new Contract(address, _abi, signerOrProvider) as IDepositManager;
  }
}