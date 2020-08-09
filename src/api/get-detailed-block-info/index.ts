export interface IBtcDetailedBlockInfo {
  bits: number;
  fees: number; // fee reward
  hash: string;
  height: number;
  mainchain: boolean;
  merkle: string;
  nonce: number;
  outputs: number; // transaction volume
  previous: string;
  size: number;
  subsidy: number; // block reward
  tx: string[];
  time: number; // timestamp
  version: number;
  weight:number;
  work: number;
}

const getDetailedBlockInfo = async (blockHeights: number[]): Promise<IBtcDetailedBlockInfo[]> => {
  const url = `https://api.blockchain.info/haskoin-store/btc/block/heights?heights=${blockHeights}&notx=true&cors=true`;
  const response = await fetch(url);
  return await response.json();
};

export default getDetailedBlockInfo;
