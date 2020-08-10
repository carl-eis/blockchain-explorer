export const TICKERS_FETCH_START = 'explorer/TICKERS_FETCH_START';
export const TICKERS_FETCH_SUCCESS = 'explorer/TICKERS_FETCH_SUCCESS';
export const TICKERS_FETCH_ERROR = 'explorer/TICKERS_FETCH_ERROR';

export const BLOCKS_FETCH_START = 'explorer/BLOCKS_FETCH_START';
export const BLOCKS_FETCH_SUCCESS = 'explorer/BLOCKS_FETCH_SUCCESS';
export const BLOCKS_FETCH_ERROR = 'explorer/BLOCKS_FETCH_ERROR';

export const SEARCH_VALUE_CHANGE = 'explorer/SEARCH_VALUE_CHANGE';

export const tickersFetchStart = (data?: any) => ({
  type: TICKERS_FETCH_START, data,
});

export const tickersFetchSuccess = (data?: any) => ({
  type: TICKERS_FETCH_SUCCESS, data,
});

export const tickersFetchError = (data?: any) => ({
  type: TICKERS_FETCH_ERROR, data,
});

export const blocksFetchStart = (data?: any) => ({
  type: BLOCKS_FETCH_START, data,
});

export const blocksFetchSuccess = (data?: any) => ({
  type: BLOCKS_FETCH_SUCCESS, data,
});

export const blocksFetchError = (data?: any) => ({
  type: BLOCKS_FETCH_ERROR, data,
});

export const searchValueChange = (data?: any) => ({
  type: SEARCH_VALUE_CHANGE, data,
});
