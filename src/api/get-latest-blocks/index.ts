import { API_BASE_URL } from '../index';

export interface IBtcBlockInfo {
  height: number;
  hash: string;
  main_chain: boolean;
  time: number;
}

export interface IBtcBlockInfoResponse {
  blocks: IBtcBlockInfo[];
}

/**
 * Get blocks for a specific day
 * @param selectedDate
 */
const getLatestBlocks = async (selectedDate: Date = new Date()): Promise<IBtcBlockInfoResponse> => {
  const url = `${API_BASE_URL}/blocks/${selectedDate?.getTime()}?format=json&cors=true`;
  const response = await fetch(url);
  return await response.json();
};

export default getLatestBlocks;
