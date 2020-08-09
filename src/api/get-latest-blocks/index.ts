import { API_BASE_URL } from '../index';

export interface IBtcLatestBlock {
  height: number;
  hash: string;
  main_chain: boolean;
  time: number;
}

export interface IBtcLatestBlocksResponse {
  blocks: IBtcLatestBlock[];
}

/**
 * Get blocks for a specific day
 * @param selectedDate
 */
const getLatestBlocks = async (selectedDate: Date = new Date()): Promise<IBtcLatestBlocksResponse> => {
  const url = `${API_BASE_URL}/blocks/${selectedDate?.getTime()}?format=json&cors=true`;
  const response = await fetch(url);
  return await response.json();
};

export default getLatestBlocks;
