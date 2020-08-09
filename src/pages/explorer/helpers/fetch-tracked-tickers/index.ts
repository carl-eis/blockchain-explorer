import getTickerValues, { IGetTickersResponse } from '../../../../api/get-ticker-values';

export interface ITickersIndex {
  [currencySymbol: string]: IGetTickersResponse;
}

/**
 * Simultaneously fetch the ticker values for multiple cryptocurrencies.
 * @param currencies
 */
const fetchTrackedTickers = async (currencies: string[]) => {
  const responses = await Promise.all(currencies.map(symbol => getTickerValues(symbol)));
  return currencies.reduce((acc, symbol, index) => {
    return {
      ...acc,
      [symbol]: responses[index],
    };
  }, {});
}

export default fetchTrackedTickers;
