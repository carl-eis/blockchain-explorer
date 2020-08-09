import { API_BASE_URL } from '../index';

export interface ICurrencyTickerPayload {
  last: number;
  buy: number;
  sell: number;
  symbol: string;
  '15m': number;
}

export interface IGetTickersResponse {
  [currencySymbol: string]: ICurrencyTickerPayload;
}

const getTickerValues = async (baseCurrencySymbol?: string): Promise<IGetTickersResponse> => {
  const url = `${API_BASE_URL}/ticker${baseCurrencySymbol ? `?base=${baseCurrencySymbol}` : ''}`;
  const response = await fetch(url);
  return await response.json();
};

export default getTickerValues;

// https://blockchain.info/blocks/1596970178541?format=json
