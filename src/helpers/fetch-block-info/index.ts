import getLatestBlocks, { IBtcLatestBlocksResponse } from '../../api/get-latest-blocks';
import getDetailedBlockInfo, { IBtcDetailedBlockInfo } from '../../api/get-detailed-block-info';
import getTransactions from '../../api/get-transactions';

const fetchBlockInfo = async () => {
  const latestBlocks: any = await getLatestBlocks();
  const allHeights = latestBlocks.map(block => block?.height);

  const detailedBlocks: IBtcDetailedBlockInfo[] = await getDetailedBlockInfo(allHeights);

  const allTransactionIds: string[] = detailedBlocks.map(block => block?.tx?.[0]);

  const transactions = await getTransactions(allTransactionIds);

  return detailedBlocks.map((detailedBlock) => {
    const { size, hash, tx: [firstTx] } = detailedBlock;
    const matchingLatestBlock = latestBlocks?.find(item => item?.hash === hash);
    const matchingTransaction = transactions.find(tx => tx?.txid === firstTx);

    return {
      size,
      mined: matchingLatestBlock?.time,
      height: matchingLatestBlock?.height,
      hash,
      miner: matchingTransaction?.outputs?.[0]?.address,
    }
  }).reverse();
}

export default fetchBlockInfo;

