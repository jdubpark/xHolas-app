/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { PromiseOrValue } from "../../../../../common";
import type {
  DSGuardFactory,
  DSGuardFactoryInterface,
} from "../../../../../contracts/handlers/maker/dapphub/DSGuardFactory";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "guards",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isGuard",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "permitFurucombo",
        type: "bool",
      },
      {
        internalType: "address",
        name: "furucombo",
        type: "address",
      },
      {
        internalType: "address",
        name: "dsProxy",
        type: "address",
      },
    ],
    name: "newGuard",
    outputs: [
      {
        internalType: "contract DSGuard",
        name: "guard",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610c29806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063489c1202146100465780636b4621511461007e578063828749cc146100bf575b600080fd5b610069610054366004610252565b60006020819052908152604090205460ff1681565b60405190151581526020015b60405180910390f35b6100a761008c366004610252565b6001602052600090815260409020546001600160a01b031681565b6040516001600160a01b039091168152602001610075565b6100a76100cd366004610274565b60006040516100db90610229565b604051809103906000f0801580156100f7573d6000803e3d6000fd5b5090508315610171576040516332fba9a360e21b81526001600160a01b0384811660048301528381166024830152631cff79cd60e01b604483015282169063cbeea68c90606401600060405180830381600087803b15801561015857600080fd5b505af115801561016c573d6000803e3d6000fd5b505050505b6040516313af403560e01b81523360048201526001600160a01b038216906313af403590602401600060405180830381600087803b1580156101b257600080fd5b505af11580156101c6573d6000803e3d6000fd5b5050506001600160a01b038216600081815260208181526040808320805460ff19166001908117909155338452909152902080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169091179055509392505050565b61095e806102bf83390190565b80356001600160a01b038116811461024d57600080fd5b919050565b60006020828403121561026457600080fd5b61026d82610236565b9392505050565b60008060006060848603121561028957600080fd5b8335801515811461029957600080fd5b92506102a760208501610236565b91506102b560408501610236565b9050925092509256fe608060405234801561001057600080fd5b50600180546001600160a01b031916339081179091556040517fce241d7ca1f669fee44b6fc00b8eba2df3bb514eed0f6f668f8f89096e81ed9490600090a26109008061005e6000396000f3fe608060405234801561001057600080fd5b50600436106100be5760003560e01c8063a8542f6611610076578063bf7e214f1161005b578063bf7e214f1461017b578063cbeea68c1461018e578063f0217ce5146101a157600080fd5b8063a8542f6614610141578063b70096131461015857600080fd5b806379d88d87116100a757806379d88d87146100eb5780637a9e5e4b146100fe5780638da5cb5b1461011157600080fd5b806313af4035146100c35780632bc3217d146100d8575b600080fd5b6100d66100d13660046107e8565b6101b4565b005b6100d66100e636600461080c565b610269565b6100d66100f936600461084d565b61029d565b6100d661010c3660046107e8565b61034f565b600154610124906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b61014a60001981565b604051908152602001610138565b61016b610166366004610879565b6103fd565b6040519015158152602001610138565b600054610124906001600160a01b031681565b6100d661019c36600461080c565b610612565b6100d66101af36600461084d565b61063d565b6101ca336000356001600160e01b0319166106f2565b6102125760405162461bcd60e51b8152602060048201526014602482015273191ccb585d5d1a0b5d5b985d5d1a1bdc9a5e995960621b60448201526064015b60405180910390fd5b6001805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0383169081179091556040517fce241d7ca1f669fee44b6fc00b8eba2df3bb514eed0f6f668f8f89096e81ed9490600090a250565b6102988360601b6bffffffffffffffffffffffff19168360601b6bffffffffffffffffffffffff19168361029d565b505050565b6102b3336000356001600160e01b0319166106f2565b6102f65760405162461bcd60e51b8152602060048201526014602482015273191ccb585d5d1a0b5d5b985d5d1a1bdc9a5e995960621b6044820152606401610209565b60008381526002602090815260408083208584528252808320848452909152808220805460ff19169055518291849186917f95ba64c95d85e67ac83a0476c4a62ac2cf8ab2d0407545b8c9d79c3eefa6282991a4505050565b610365336000356001600160e01b0319166106f2565b6103a85760405162461bcd60e51b8152602060048201526014602482015273191ccb585d5d1a0b5d5b985d5d1a1bdc9a5e995960621b6044820152606401610209565b6000805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b038316908117825560405190917f1abebea81bfa2637f28358c371278fb15ede7ea8dd28d2e03b112ff6d936ada491a250565b6bffffffffffffffffffffffff19606084811b821660008181526002602090815260408083209488901b9095168083529381528482206001600160e01b03198716835290529283205490919060ff168061047a575060008281526002602090815260408083208484528252808320600019845290915290205460ff165b806104b257506000828152600260209081526040808320600019845282528083206001600160e01b03198816845290915290205460ff165b806104dd575060008281526002602090815260408083206000198452825280832090915290205460ff165b8061052a575060008181527f38b5b2ceac7637132d27514ffcf440b705287635075af7b8bd5adcaa6a4cc5bb602090815260408083206001600160e01b03198816845290915290205460ff165b8061056f575060008181527f38b5b2ceac7637132d27514ffcf440b705287635075af7b8bd5adcaa6a4cc5bb60209081526040808320600019845290915290205460ff165b806105b257506001600160e01b0319841660009081527f47fa60fbc027ac3984ea309688a33182f4193c478b40ba8d294eb2cd3ddc4d97602052604090205460ff165b8061060857506000196000527f47fa60fbc027ac3984ea309688a33182f4193c478b40ba8d294eb2cd3ddc4d976020527ff423d1317b37667cd26005728bffa7c8b0499e133951fcf8e814d4fc5f4c98f65460ff165b9695505050505050565b6102988360601b6bffffffffffffffffffffffff19168360601b6bffffffffffffffffffffffff1916835b610653336000356001600160e01b0319166106f2565b6106965760405162461bcd60e51b8152602060048201526014602482015273191ccb585d5d1a0b5d5b985d5d1a1bdc9a5e995960621b6044820152606401610209565b60008381526002602090815260408083208584528252808320848452909152808220805460ff19166001179055518291849186917f6f50375045128971c5469d343039ba7b8e30a5b190453737b28bda6f7a30677191a4505050565b60006001600160a01b03831630141561070d575060016107ca565b6001546001600160a01b038481169116141561072b575060016107ca565b6000546001600160a01b0316610743575060006107ca565b60005460405163b700961360e01b81526001600160a01b0385811660048301523060248301526001600160e01b0319851660448301529091169063b700961390606401602060405180830381865afa1580156107a3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107c791906108d1565b90505b92915050565b6001600160a01b03811681146107e557600080fd5b50565b6000602082840312156107fa57600080fd5b8135610805816107d0565b9392505050565b60008060006060848603121561082157600080fd5b833561082c816107d0565b9250602084013561083c816107d0565b929592945050506040919091013590565b60008060006060848603121561086257600080fd5b505081359360208301359350604090920135919050565b60008060006060848603121561088e57600080fd5b8335610899816107d0565b925060208401356108a9816107d0565b915060408401356001600160e01b0319811681146108c657600080fd5b809150509250925092565b6000602082840312156108e357600080fd5b8151801515811461080557600080fdfea164736f6c634300080a000aa164736f6c634300080a000a";

type DSGuardFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DSGuardFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DSGuardFactory__factory extends ContractFactory {
  constructor(...args: DSGuardFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DSGuardFactory> {
    return super.deploy(overrides || {}) as Promise<DSGuardFactory>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DSGuardFactory {
    return super.attach(address) as DSGuardFactory;
  }
  override connect(signer: Signer): DSGuardFactory__factory {
    return super.connect(signer) as DSGuardFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DSGuardFactoryInterface {
    return new utils.Interface(_abi) as DSGuardFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DSGuardFactory {
    return new Contract(address, _abi, signerOrProvider) as DSGuardFactory;
  }
}