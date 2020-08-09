import { API_BASE_URL } from '../index';

export interface IBtcDetailedBlockInfo {
  hash: string;
  height: number;
  mainchain: boolean;
  previous: string;
  version: number;
  bits: number;
  nonce: number;
  size: number;
  tx: string[];
  merkle: string;
  subsidy: number;
  fees: number;
  outputs: number;
  work: number;
  weight:number;
}

const getDetailedBlockInfo = async (blockHeights: number[]): Promise<IBtcDetailedBlockInfo[]> => {
  const url = `https://api.blockchain.info/haskoin-store/btc/block/heights?heights=${blockHeights}&notx=true&cors=true`;
  const response = await fetch(url);
  return await response.json();
};

export default getDetailedBlockInfo;
