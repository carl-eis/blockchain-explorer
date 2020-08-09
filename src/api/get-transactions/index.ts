import { API_BASE_URL } from '../index';

interface IBlock {
  height: number;
  position: number;
}

interface IOutput {
  address?: string;
  pkscript: string;
  value: number;
  spent: boolean;
  spender?: ISpender;
}

interface ISpender {
  txid: string;
  input: number;
}

interface IInput {
  coinbase: boolean;
  txid: string;
  output: number;
  sigscript: string;
  sequence: number;
  pkscript?: any;
  value?: any;
  address?: any;
  witness: string[];
}

interface IBtcTransaction {
  txid: string;
  size: number;
  version: number;
  locktime: number;
  fee: number;
  inputs: IInput[];
  outputs: IOutput[];
  block: IBlock;
  deleted: boolean;
  time: number;
  rbf: boolean;
  weight: number;
}

const getTransactions = async (transactionIds: string[]): Promise<IBtcTransaction[]> => {
  const url = `https://api.blockchain.info/haskoin-store/btc/transactions?txids=${transactionIds}&cors=true`;
  const response = await fetch(url);
  return await response.json();
};

export default getTransactions;
