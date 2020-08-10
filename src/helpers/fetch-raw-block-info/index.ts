import getRawBlock from '../../api/get-raw-block';
import getDetailedBlockInfo from '../../api/get-detailed-block-info';
import getPoolAddressName from '../get-pool-address-name';

export interface IProcessedRawBlockResult {
  hash: string;
  confirmations?: number;
  timestamp: number;
  height: number;
  miner: string;
  numTransactions: number;
  difficulty?: any;
  merkleRoot: string;
  version: number;
  bits: number;
  weight: number;
  size: number;
  nonce: number;
  volume: number;
  blockReward: number;
  blockFee: number;
}

const fetchRawBlockInfo = async (blockHash: string): Promise<IProcessedRawBlockResult> => {
  const rawBlock = await getRawBlock(blockHash);
  const blockSummary = await getDetailedBlockInfo([rawBlock.height]);

  const [{
    outputs,  // Transaction Volume
    fees,     // Fee Reward
    subsidy,  // Block Reward
    version,  // Needs to be converted to hex
    nonce,
  }] = blockSummary;

  const {
    hash,
    // Confirmations ?
    time,
    height,
    n_tx,
    // Difficulty ?
    mrkl_root,
    bits,
    weight,
    size,
    // nonce, // this nonce is not the same as the once in the summary
    tx,
  } = rawBlock;

  const [{
    out: [{
      addr,
    }]
  }] = tx;

  return {
    hash,
    // confirmations: null,
    timestamp: time,
    height,
    miner: getPoolAddressName(addr),
    numTransactions: n_tx,
    // difficulty: null,
    merkleRoot: mrkl_root,
    version: version,
    bits,
    weight,
    size,
    nonce,
    volume: outputs,
    blockReward: subsidy,
    blockFee: fees,
  };
}

export default fetchRawBlockInfo;
