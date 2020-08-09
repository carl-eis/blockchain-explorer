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

const getChunks = (parentArray: any[], chunkLength: number) => {
  const chunks: any[] = [];
  let current = 0;
  let max = parentArray.length;

  while (current < max) {
    chunks.push(parentArray.slice(current, current += chunkLength));
  }

  return chunks;
}


/**
 * Get all transaction objects for the supplied transaction IDs
 *
 * Note: this endpoint returns a 502 if too many tx ids are supplied.
 * Ids are split into batches of 10 and fetched simultaneously.
 *
 * @param transactionIds
 */
const getTransactions = async (transactionIds: string[]): Promise<IBtcTransaction[]> => {
  const url = `https://api.blockchain.info/haskoin-store/btc/transactions?txids=${transactionIds}&cors=true`;
  const response = await fetch(url);
  return await response.json();
};

const getBatchTransactions = async (transactionIds: string[]) => {
  const batches = getChunks(transactionIds, 10);
  const allTransactions = await Promise.all(batches.map(item => getTransactions(item)));
  return allTransactions.reduce((total, currentBatch) => {
    return [
      ...total,
      ...currentBatch,
    ];
  }, []);
}

export default getBatchTransactions;
