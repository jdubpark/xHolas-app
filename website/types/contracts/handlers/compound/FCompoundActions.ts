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
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";

export interface FCompoundActionsInterface extends utils.Interface {
  functions: {
    "CETH_ADDR()": FunctionFragment;
    "COMPTROLLER_ADDR()": FunctionFragment;
    "ETH_ADDR()": FunctionFragment;
    "borrow(address,uint256)": FunctionFragment;
    "deposit(address,uint256)": FunctionFragment;
    "enterMarket(address)": FunctionFragment;
    "enterMarkets(address[])": FunctionFragment;
    "exitMarket(address)": FunctionFragment;
    "repayBorrow(address,uint256)": FunctionFragment;
    "withdraw(address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "CETH_ADDR"
      | "COMPTROLLER_ADDR"
      | "ETH_ADDR"
      | "borrow"
      | "deposit"
      | "enterMarket"
      | "enterMarkets"
      | "exitMarket"
      | "repayBorrow"
      | "withdraw"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "CETH_ADDR", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "COMPTROLLER_ADDR",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "ETH_ADDR", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "borrow",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "enterMarket",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "enterMarkets",
    values: [PromiseOrValue<string>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "exitMarket",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "repayBorrow",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "CETH_ADDR", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "COMPTROLLER_ADDR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ETH_ADDR", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "borrow", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "enterMarket",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "enterMarkets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "exitMarket", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "repayBorrow",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {};
}

export interface FCompoundActions extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: FCompoundActionsInterface;

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
    CETH_ADDR(overrides?: CallOverrides): Promise<[string]>;

    COMPTROLLER_ADDR(overrides?: CallOverrides): Promise<[string]>;

    ETH_ADDR(overrides?: CallOverrides): Promise<[string]>;

    borrow(
      _cTokenAddr: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    deposit(
      _tokenAddr: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    enterMarket(
      _cTokenAddr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    enterMarkets(
      _cTokenAddrs: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    exitMarket(
      _cTokenAddr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    repayBorrow(
      _cTokenAddr: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      _tokenAddr: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  CETH_ADDR(overrides?: CallOverrides): Promise<string>;

  COMPTROLLER_ADDR(overrides?: CallOverrides): Promise<string>;

  ETH_ADDR(overrides?: CallOverrides): Promise<string>;

  borrow(
    _cTokenAddr: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  deposit(
    _tokenAddr: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  enterMarket(
    _cTokenAddr: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  enterMarkets(
    _cTokenAddrs: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  exitMarket(
    _cTokenAddr: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  repayBorrow(
    _cTokenAddr: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    _tokenAddr: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    CETH_ADDR(overrides?: CallOverrides): Promise<string>;

    COMPTROLLER_ADDR(overrides?: CallOverrides): Promise<string>;

    ETH_ADDR(overrides?: CallOverrides): Promise<string>;

    borrow(
      _cTokenAddr: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    deposit(
      _tokenAddr: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    enterMarket(
      _cTokenAddr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    enterMarkets(
      _cTokenAddrs: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<void>;

    exitMarket(
      _cTokenAddr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    repayBorrow(
      _cTokenAddr: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(
      _tokenAddr: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    CETH_ADDR(overrides?: CallOverrides): Promise<BigNumber>;

    COMPTROLLER_ADDR(overrides?: CallOverrides): Promise<BigNumber>;

    ETH_ADDR(overrides?: CallOverrides): Promise<BigNumber>;

    borrow(
      _cTokenAddr: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    deposit(
      _tokenAddr: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    enterMarket(
      _cTokenAddr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    enterMarkets(
      _cTokenAddrs: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    exitMarket(
      _cTokenAddr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    repayBorrow(
      _cTokenAddr: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdraw(
      _tokenAddr: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    CETH_ADDR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    COMPTROLLER_ADDR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ETH_ADDR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    borrow(
      _cTokenAddr: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    deposit(
      _tokenAddr: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    enterMarket(
      _cTokenAddr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    enterMarkets(
      _cTokenAddrs: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    exitMarket(
      _cTokenAddr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    repayBorrow(
      _cTokenAddr: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      _tokenAddr: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}