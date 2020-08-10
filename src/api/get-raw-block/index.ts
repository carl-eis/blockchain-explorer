import { API_BASE_URL } from '../index';

interface IOut {
  type: number;
  spent: boolean;
  value: number;
  spending_outpoints: any[];
  n: number;
  addr: string;
  tx_index: number;
  script: string;
}

interface IInputs {
  sequence: number;
  witness: string;
  script: string;
  index: number;
}

interface IRawTransaction {
  hash: string;
  ver: number;
  vin_sz: number;
  vout_sz: number;
  size: number;
  weight: number;
  fee: number;
  relayed_by: string;
  lock_time: number;
  tx_index: number;
  double_spend: boolean;
  result: number;
  balance: number;
  time: number;
  block_index: number;
  block_height: number;
  inputs: IInputs[];
  out: IOut[];
}


interface IRawBlockResponse {
  bits: number;
  block_index: number
  fee: number;
  hash: string;
  height: number;
  main_chain: boolean;
  mrkl_root: string;
  n_tx: number;
  next_block: any[];
  nonce: number;
  prev_block: string;
  size: number;
  time: number;
  tx: IRawTransaction[];
  ver: number;
  weight: number;
}

/**
 * Get blocks for a specific day
 * @param blockHash
 */
const getRawBlock = async (blockHash): Promise<IRawBlockResponse> => {
  const url = `${API_BASE_URL}/rawblock/${blockHash}?format=json&cors=true`;
  const response = await fetch(url);
  return await response.json();
};

export default getRawBlock;
