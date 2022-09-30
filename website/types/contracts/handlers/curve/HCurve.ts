/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";

export interface HCurveInterface extends utils.Interface {
  functions: {
    "MSG_SENDER_KEY()": FunctionFragment;
    "NATIVE_TOKEN_ADDRESS()": FunctionFragment;
    "PERCENTAGE_BASE()": FunctionFragment;
    "POSTPROCESS_SIG()": FunctionFragment;
    "addLiquidity(address,address,address[],uint256[],uint256)": FunctionFragment;
    "addLiquidityFactoryZap(address,address,address[],uint256[],uint256)": FunctionFragment;
    "addLiquidityUnderlying(address,address,address[],uint256[],uint256)": FunctionFragment;
    "cache(bytes32)": FunctionFragment;
    "exchange(address,address,address,int128,int128,uint256,uint256)": FunctionFragment;
    "exchangeUint256(address,address,address,uint256,uint256,uint256,uint256)": FunctionFragment;
    "exchangeUint256Ether(address,address,address,uint256,uint256,uint256,uint256)": FunctionFragment;
    "exchangeUnderlying(address,address,address,int128,int128,uint256,uint256)": FunctionFragment;
    "exchangeUnderlyingUint256(address,address,address,uint256,uint256,uint256,uint256)": FunctionFragment;
    "getContractName()": FunctionFragment;
    "postProcess()": FunctionFragment;
    "removeLiquidityOneCoin(address,address,address,uint256,int128,uint256)": FunctionFragment;
    "removeLiquidityOneCoinFactoryZap(address,address,address,uint256,int128,uint256)": FunctionFragment;
    "removeLiquidityOneCoinUint256(address,address,address,uint256,uint256,uint256)": FunctionFragment;
    "removeLiquidityOneCoinUnderlying(address,address,address,uint256,int128,uint256)": FunctionFragment;
    "removeLiquidityOneCoinUnderlyingUint256(address,address,address,uint256,uint256,uint256)": FunctionFragment;
    "stack(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "MSG_SENDER_KEY"
      | "NATIVE_TOKEN_ADDRESS"
      | "PERCENTAGE_BASE"
      | "POSTPROCESS_SIG"
      | "addLiquidity"
      | "addLiquidityFactoryZap"
      | "addLiquidityUnderlying"
      | "cache"
      | "exchange"
      | "exchangeUint256"
      | "exchangeUint256Ether"
      | "exchangeUnderlying"
      | "exchangeUnderlyingUint256"
      | "getContractName"
      | "postProcess"
      | "removeLiquidityOneCoin"
      | "removeLiquidityOneCoinFactoryZap"
      | "removeLiquidityOneCoinUint256"
      | "removeLiquidityOneCoinUnderlying"
      | "removeLiquidityOneCoinUnderlyingUint256"
      | "stack"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "MSG_SENDER_KEY",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "NATIVE_TOKEN_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "PERCENTAGE_BASE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "POSTPROCESS_SIG",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addLiquidity",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "addLiquidityFactoryZap",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "addLiquidityUnderlying",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "cache",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "exchange",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "exchangeUint256",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "exchangeUint256Ether",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "exchangeUnderlying",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "exchangeUnderlyingUint256",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getContractName",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "postProcess",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "removeLiquidityOneCoin",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "removeLiquidityOneCoinFactoryZap",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "removeLiquidityOneCoinUint256",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "removeLiquidityOneCoinUnderlying",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "removeLiquidityOneCoinUnderlyingUint256",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "stack",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "MSG_SENDER_KEY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "NATIVE_TOKEN_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "PERCENTAGE_BASE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "POSTPROCESS_SIG",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addLiquidityFactoryZap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addLiquidityUnderlying",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "cache", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "exchange", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "exchangeUint256",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exchangeUint256Ether",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exchangeUnderlying",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exchangeUnderlyingUint256",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getContractName",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "postProcess",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidityOneCoin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidityOneCoinFactoryZap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidityOneCoinUint256",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidityOneCoinUnderlying",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidityOneCoinUnderlyingUint256",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stack", data: BytesLike): Result;

  events: {};
}

export interface HCurve extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: HCurveInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    MSG_SENDER_KEY(overrides?: CallOverrides): Promise<[string]>;

    NATIVE_TOKEN_ADDRESS(overrides?: CallOverrides): Promise<[string]>;

    PERCENTAGE_BASE(overrides?: CallOverrides): Promise<[BigNumber]>;

    POSTPROCESS_SIG(overrides?: CallOverrides): Promise<[string]>;

    addLiquidity(
      handler: PromiseOrValue<string>,
      pool: PromiseOrValue<string>,
      tokens: PromiseOrValue<string>[],
      amounts: PromiseOrValue<BigNumberish>[],
      minPoolAmount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addLiquidityFactoryZap(
      handler: PromiseOrValue<string>,
      pool: PromiseOrValue<string>,
      tokens: PromiseOrValue<string>[],
      amounts: PromiseOrValue<BigNumberish>[],
      minPoolAmount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addLiquidityUnderlying(
      handler: PromiseOrValue<string>,
      pool: PromiseOrValue<string>,
      tokens: PromiseOrValue<string>[],
      amounts: PromiseOrValue<BigNumberish>[],
      minPoolAmount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    cache(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    exchange(
      handler: PromiseOrValue<string>,
      tokenI: PromiseOrValue<string>,
      tokenJ: PromiseOrValue<string>,
      i: PromiseOrValue<BigNumberish>,
      j: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      minAmount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    exchangeUint256(
      handler: PromiseOrValue<string>,
      tokenI: PromiseOrValue<string>,
      tokenJ: PromiseOrValue<string>,
      i: PromiseOrValue<BigNumberish>,
      j: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      minAmount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    exchangeUint256Ether(
      handler: PromiseOrValue<string>,
      tokenI: PromiseOrValue<string>,
      tokenJ: PromiseOrValue<string>,
      i: PromiseOrValue<BigNumberish>,
      j: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      minAmount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    exchangeUnderlying(
      handler: PromiseOrValue<string>,
      tokenI: PromiseOrValue<string>,
      tokenJ: PromiseOrValue<string>,
      i: PromiseOrValue<BigNumberish>,
      j: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      minAmount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    exchangeUnderlyingUint256(
      handler: PromiseOrValue<string>,
      tokenI: PromiseOrValue<string>,
      tokenJ: PromiseOrValue<string>,
      i: PromiseOrValue<BigNumberish>,
      j: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      minAmount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getContractName(overrides?: CallOverrides): Promise<[string]>;

    postProcess(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    removeLiquidityOneCoin(
      handler: PromiseOrValue<string>,
      pool: PromiseOrValue<string>,
      tokenI: PromiseOrValue<string>,
      poolAmount: PromiseOrValue<BigNumberish>,
      i: PromiseOrValue<BigNumberish>,
      minAmount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    removeLiquidityOneCoinFactoryZap(
      handler: PromiseOrValue<string>,
      pool: PromiseOrValue<string>,
      tokenI: PromiseOrValue<string>,
      poolAmount: PromiseOrValue<BigNumberish>,
      i: PromiseOrValue<BigNumberish>,
      minAmount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    removeLiquidityOneCoinUint256(
      handler: PromiseOrValue<string>,
      pool: PromiseOrValue<string>,
      tokenI: PromiseOrValue<string>,
      poolAmount: PromiseOrValue<BigNumberish>,
      i: PromiseOrValue<BigNumberish>,
      minAmount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    removeLiquidityOneCoinUnderlying(
      handler: PromiseOrValue<string>,
      pool: PromiseOrValue<string>,
      tokenI: PromiseOrValue<string>,
      poolAmount: PromiseOrValue<BigNumberish>,
      i: PromiseOrValue<BigNumberish>,
      minAmount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    removeLiquidityOneCoinUnderlyingUint256(
      handler: PromiseOrValue<string>,
      pool: PromiseOrValue<string>,
      tokenI: PromiseOrValue<string>,
      poolAmount: PromiseOrValue<BigNumberish>,
      i: PromiseOrValue<BigNumberish>,
      minAmount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    stack(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  MSG_SENDER_KEY(overrides?: CallOverrides): Promise<string>;

  NATIVE_TOKEN_ADDRESS(overrides?: CallOverrides): Promise<string>;

  PERCENTAGE_BASE(overrides?: CallOverrides): Promise<BigNumber>;

  POSTPROCESS_SIG(overrides?: CallOverrides): Promise<string>;

  addLiquidity(
    handler: PromiseOrValue<string>,
    pool: PromiseOrValue<string>,
    tokens: PromiseOrValue<string>[],
    amounts: PromiseOrValue<BigNumberish>[],
    minPoolAmount: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addLiquidityFactoryZap(
    handler: PromiseOrValue<string>,
    pool: PromiseOrValue<string>,
    tokens: PromiseOrValue<string>[],
    amounts: PromiseOrValue<BigNumberish>[],
    minPoolAmount: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addLiquidityUnderlying(
    handler: PromiseOrValue<string>,
    pool: PromiseOrValue<string>,
    tokens: PromiseOrValue<string>[],
    amounts: PromiseOrValue<BigNumberish>[],
    minPoolAmount: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  cache(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  exchange(
    handler: PromiseOrValue<string>,
    tokenI: PromiseOrValue<string>,
    tokenJ: PromiseOrValue<string>,
    i: PromiseOrValue<BigNumberish>,
    j: PromiseOrValue<BigNumberish>,
    amount: PromiseOrValue<BigNumberish>,
    minAmount: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  exchangeUint256(
    handler: PromiseOrValue<string>,
    tokenI: PromiseOrValue<string>,
    tokenJ: PromiseOrValue<string>,
    i: PromiseOrValue<BigNumberish>,
    j: PromiseOrValue<BigNumberish>,
    amount: PromiseOrValue<BigNumberish>,
    minAmount: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  exchangeUint256Ether(
    handler: PromiseOrValue<string>,
    tokenI: PromiseOrValue<string>,
    tokenJ: PromiseOrValue<string>,
    i: PromiseOrValue<BigNumberish>,
    j: PromiseOrValue<BigNumberish>,
    amount: PromiseOrValue<BigNumberish>,
    minAmount: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  exchangeUnderlying(
    handler: PromiseOrValue<string>,
    tokenI: PromiseOrValue<string>,
    tokenJ: PromiseOrValue<string>,
    i: PromiseOrValue<BigNumberish>,
    j: PromiseOrValue<BigNumberish>,
    amount: PromiseOrValue<BigNumberish>,
    minAmount: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  exchangeUnderlyingUint256(
    handler: PromiseOrValue<string>,
    tokenI: PromiseOrValue<string>,
    tokenJ: PromiseOrValue<string>,
    i: PromiseOrValue<BigNumberish>,
    j: PromiseOrValue<BigNumberish>,
    amount: PromiseOrValue<BigNumberish>,
    minAmount: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getContractName(overrides?: CallOverrides): Promise<string>;

  postProcess(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  removeLiquidityOneCoin(
    handler: PromiseOrValue<string>,
    pool: PromiseOrValue<string>,
    tokenI: PromiseOrValue<string>,
    poolAmount: PromiseOrValue<BigNumberish>,
    i: PromiseOrValue<BigNumberish>,
    minAmount: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  removeLiquidityOneCoinFactoryZap(
    handler: PromiseOrValue<string>,
    pool: PromiseOrValue<string>,
    tokenI: PromiseOrValue<string>,
    poolAmount: PromiseOrValue<BigNumberish>,
    i: PromiseOrValue<BigNumberish>,
    minAmount: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  removeLiquidityOneCoinUint256(
    handler: PromiseOrValue<string>,
    pool: PromiseOrValue<string>,
    tokenI: PromiseOrValue<string>,
    poolAmount: PromiseOrValue<BigNumberish>,
    i: PromiseOrValue<BigNumberish>,
    minAmount: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  removeLiquidityOneCoinUnderlying(
    handler: PromiseOrValue<string>,
    pool: PromiseOrValue<string>,
    tokenI: PromiseOrValue<string>,
    poolAmount: PromiseOrValue<BigNumberish>,
    i: PromiseOrValue<BigNumberish>,
    minAmount: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  removeLiquidityOneCoinUnderlyingUint256(
    handler: PromiseOrValue<string>,
    pool: PromiseOrValue<string>,
    tokenI: PromiseOrValue<string>,
    poolAmount: PromiseOrValue<BigNumberish>,
    i: PromiseOrValue<BigNumberish>,
    minAmount: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  stack(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    MSG_SENDER_KEY(overrides?: CallOverrides): Promise<string>;

    NATIVE_TOKEN_ADDRESS(overrides?: CallOverrides): Promise<string>;

    PERCENTAGE_BASE(overrides?: CallOverrides): Promise<BigNumber>;

    POSTPROCESS_SIG(overrides?: CallOverrides): Promise<string>;

    addLiquidity(
      handler: PromiseOrValue<string>,
      pool: PromiseOrValue<string>,
      tokens: PromiseOrValue<string>[],
      amounts: PromiseOrValue<BigNumberish>[],
      minPoolAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    addLiquidityFactoryZap(
      handler: PromiseOrValue<string>,
      pool: PromiseOrValue<string>,
      tokens: PromiseOrValue<string>[],
      amounts: PromiseOrValue<BigNumberish>[],
      minPoolAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    addLiquidityUnderlying(
      handler: PromiseOrValue<string>,
      pool: PromiseOrValue<string>,
      tokens: PromiseOrValue<string>[],
      amounts: PromiseOrValue<BigNumberish>[],
      minPoolAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    cache(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    exchange(
      handler: PromiseOrValue<string>,
      tokenI: PromiseOrValue<string>,
      tokenJ: PromiseOrValue<string>,
      i: PromiseOrValue<BigNumberish>,
      j: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      minAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exchangeUint256(
      handler: PromiseOrValue<string>,
      tokenI: PromiseOrValue<string>,
      tokenJ: PromiseOrValue<string>,
      i: PromiseOrValue<BigNumberish>,
      j: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      minAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exchangeUint256Ether(
      handler: PromiseOrValue<string>,
      tokenI: PromiseOrValue<string>,
      tokenJ: PromiseOrValue<string>,
      i: PromiseOrValue<BigNumberish>,
      j: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      minAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exchangeUnderlying(
      handler: PromiseOrValue<string>,
      tokenI: PromiseOrValue<string>,
      tokenJ: PromiseOrValue<string>,
      i: PromiseOrValue<BigNumberish>,
      j: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      minAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exchangeUnderlyingUint256(
      handler: PromiseOrValue<string>,
      tokenI: PromiseOrValue<string>,
      tokenJ: PromiseOrValue<string>,
      i: PromiseOrValue<BigNumberish>,
      j: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      minAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getContractName(overrides?: CallOverrides): Promise<string>;

    postProcess(overrides?: CallOverrides): Promise<void>;

    removeLiquidityOneCoin(
      handler: PromiseOrValue<string>,
      pool: PromiseOrValue<string>,
      tokenI: PromiseOrValue<string>,
      poolAmount: PromiseOrValue<BigNumberish>,
      i: PromiseOrValue<BigNumberish>,
      minAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeLiquidityOneCoinFactoryZap(
      handler: PromiseOrValue<string>,
      pool: PromiseOrValue<string>,
      tokenI: PromiseOrValue<string>,
      poolAmount: PromiseOrValue<BigNumberish>,
      i: PromiseOrValue<BigNumberish>,
      minAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeLiquidityOneCoinUint256(
      handler: PromiseOrValue<string>,
      pool: PromiseOrValue<string>,
      tokenI: PromiseOrValue<string>,
      poolAmount: PromiseOrValue<BigNumberish>,
      i: PromiseOrValue<BigNumberish>,
      minAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeLiquidityOneCoinUnderlying(
      handler: PromiseOrValue<string>,
      pool: PromiseOrValue<string>,
      tokenI: PromiseOrValue<string>,
      poolAmount: PromiseOrValue<BigNumberish>,
      i: PromiseOrValue<BigNumberish>,
      minAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeLiquidityOneCoinUnderlyingUint256(
      handler: PromiseOrValue<string>,
      pool: PromiseOrValue<string>,
      tokenI: PromiseOrValue<string>,
      poolAmount: PromiseOrValue<BigNumberish>,
      i: PromiseOrValue<BigNumberish>,
      minAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    stack(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    MSG_SENDER_KEY(overrides?: CallOverrides): Promise<BigNumber>;

    NATIVE_TOKEN_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;

    PERCENTAGE_BASE(overrides?: CallOverrides): Promise<BigNumber>;

    POSTPROCESS_SIG(overrides?: CallOverrides): Promise<BigNumber>;

    addLiquidity(
      handler: PromiseOrValue<string>,
      pool: PromiseOrValue<string>,
      tokens: PromiseOrValue<string>[],
      amounts: PromiseOrValue<BigNumberish>[],
      minPoolAmount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addLiquidityFactoryZap(
      handler: PromiseOrValue<string>,
      pool: PromiseOrValue<string>,
      tokens: PromiseOrValue<string>[],
      amounts: PromiseOrValue<BigNumberish>[],
      minPoolAmount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addLiquidityUnderlying(
      handler: PromiseOrValue<string>,
      pool: PromiseOrValue<string>,
      tokens: PromiseOrValue<string>[],
      amounts: PromiseOrValue<BigNumberish>[],
      minPoolAmount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    cache(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exchange(
      handler: PromiseOrValue<string>,
      tokenI: PromiseOrValue<string>,
      tokenJ: PromiseOrValue<string>,
      i: PromiseOrValue<BigNumberish>,
      j: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      minAmount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    exchangeUint256(
      handler: PromiseOrValue<string>,
      tokenI: PromiseOrValue<string>,
      tokenJ: PromiseOrValue<string>,
      i: PromiseOrValue<BigNumberish>,
      j: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      minAmount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    exchangeUint256Ether(
      handler: PromiseOrValue<string>,
      tokenI: PromiseOrValue<string>,
      tokenJ: PromiseOrValue<string>,
      i: PromiseOrValue<BigNumberish>,
      j: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      minAmount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    exchangeUnderlying(
      handler: PromiseOrValue<string>,
      tokenI: PromiseOrValue<string>,
      tokenJ: PromiseOrValue<string>,
      i: PromiseOrValue<BigNumberish>,
      j: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      minAmount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    exchangeUnderlyingUint256(
      handler: PromiseOrValue<string>,
      tokenI: PromiseOrValue<string>,
      tokenJ: PromiseOrValue<string>,
      i: PromiseOrValue<BigNumberish>,
      j: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      minAmount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getContractName(overrides?: CallOverrides): Promise<BigNumber>;

    postProcess(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    removeLiquidityOneCoin(
      handler: PromiseOrValue<string>,
      pool: PromiseOrValue<string>,
      tokenI: PromiseOrValue<string>,
      poolAmount: PromiseOrValue<BigNumberish>,
      i: PromiseOrValue<BigNumberish>,
      minAmount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    removeLiquidityOneCoinFactoryZap(
      handler: PromiseOrValue<string>,
      pool: PromiseOrValue<string>,
      tokenI: PromiseOrValue<string>,
      poolAmount: PromiseOrValue<BigNumberish>,
      i: PromiseOrValue<BigNumberish>,
      minAmount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    removeLiquidityOneCoinUint256(
      handler: PromiseOrValue<string>,
      pool: PromiseOrValue<string>,
      tokenI: PromiseOrValue<string>,
      poolAmount: PromiseOrValue<BigNumberish>,
      i: PromiseOrValue<BigNumberish>,
      minAmount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    removeLiquidityOneCoinUnderlying(
      handler: PromiseOrValue<string>,
      pool: PromiseOrValue<string>,
      tokenI: PromiseOrValue<string>,
      poolAmount: PromiseOrValue<BigNumberish>,
      i: PromiseOrValue<BigNumberish>,
      minAmount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    removeLiquidityOneCoinUnderlyingUint256(
      handler: PromiseOrValue<string>,
      pool: PromiseOrValue<string>,
      tokenI: PromiseOrValue<string>,
      poolAmount: PromiseOrValue<BigNumberish>,
      i: PromiseOrValue<BigNumberish>,
      minAmount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    stack(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    MSG_SENDER_KEY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    NATIVE_TOKEN_ADDRESS(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    PERCENTAGE_BASE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    POSTPROCESS_SIG(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addLiquidity(
      handler: PromiseOrValue<string>,
      pool: PromiseOrValue<string>,
      tokens: PromiseOrValue<string>[],
      amounts: PromiseOrValue<BigNumberish>[],
      minPoolAmount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addLiquidityFactoryZap(
      handler: PromiseOrValue<string>,
      pool: PromiseOrValue<string>,
      tokens: PromiseOrValue<string>[],
      amounts: PromiseOrValue<BigNumberish>[],
      minPoolAmount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addLiquidityUnderlying(
      handler: PromiseOrValue<string>,
      pool: PromiseOrValue<string>,
      tokens: PromiseOrValue<string>[],
      amounts: PromiseOrValue<BigNumberish>[],
      minPoolAmount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    cache(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    exchange(
      handler: PromiseOrValue<string>,
      tokenI: PromiseOrValue<string>,
      tokenJ: PromiseOrValue<string>,
      i: PromiseOrValue<BigNumberish>,
      j: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      minAmount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    exchangeUint256(
      handler: PromiseOrValue<string>,
      tokenI: PromiseOrValue<string>,
      tokenJ: PromiseOrValue<string>,
      i: PromiseOrValue<BigNumberish>,
      j: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      minAmount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    exchangeUint256Ether(
      handler: PromiseOrValue<string>,
      tokenI: PromiseOrValue<string>,
      tokenJ: PromiseOrValue<string>,
      i: PromiseOrValue<BigNumberish>,
      j: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      minAmount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    exchangeUnderlying(
      handler: PromiseOrValue<string>,
      tokenI: PromiseOrValue<string>,
      tokenJ: PromiseOrValue<string>,
      i: PromiseOrValue<BigNumberish>,
      j: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      minAmount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    exchangeUnderlyingUint256(
      handler: PromiseOrValue<string>,
      tokenI: PromiseOrValue<string>,
      tokenJ: PromiseOrValue<string>,
      i: PromiseOrValue<BigNumberish>,
      j: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      minAmount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getContractName(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    postProcess(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    removeLiquidityOneCoin(
      handler: PromiseOrValue<string>,
      pool: PromiseOrValue<string>,
      tokenI: PromiseOrValue<string>,
      poolAmount: PromiseOrValue<BigNumberish>,
      i: PromiseOrValue<BigNumberish>,
      minAmount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    removeLiquidityOneCoinFactoryZap(
      handler: PromiseOrValue<string>,
      pool: PromiseOrValue<string>,
      tokenI: PromiseOrValue<string>,
      poolAmount: PromiseOrValue<BigNumberish>,
      i: PromiseOrValue<BigNumberish>,
      minAmount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    removeLiquidityOneCoinUint256(
      handler: PromiseOrValue<string>,
      pool: PromiseOrValue<string>,
      tokenI: PromiseOrValue<string>,
      poolAmount: PromiseOrValue<BigNumberish>,
      i: PromiseOrValue<BigNumberish>,
      minAmount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    removeLiquidityOneCoinUnderlying(
      handler: PromiseOrValue<string>,
      pool: PromiseOrValue<string>,
      tokenI: PromiseOrValue<string>,
      poolAmount: PromiseOrValue<BigNumberish>,
      i: PromiseOrValue<BigNumberish>,
      minAmount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    removeLiquidityOneCoinUnderlyingUint256(
      handler: PromiseOrValue<string>,
      pool: PromiseOrValue<string>,
      tokenI: PromiseOrValue<string>,
      poolAmount: PromiseOrValue<BigNumberish>,
      i: PromiseOrValue<BigNumberish>,
      minAmount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    stack(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}