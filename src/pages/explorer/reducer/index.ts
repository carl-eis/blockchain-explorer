import {
  BLOCKS_FETCH_ERROR,
  BLOCKS_FETCH_START,
  BLOCKS_FETCH_SUCCESS,
  TICKERS_FETCH_ERROR,
  TICKERS_FETCH_START,
  TICKERS_FETCH_SUCCESS,
} from '../actions';

import { ITickersIndex } from '../helpers/fetch-tracked-tickers';

interface IReducerAction {
  type: string;
  data: any;
}

export interface IExplorerPageReducerState {
  isLoadingTickers: boolean;
  hasErrorTickers: boolean;

  tickers: ITickersIndex;

  isLoadingBlocks: boolean;
  hasErrorBlocks: boolean;
}

export const initialState: IExplorerPageReducerState = {
  hasErrorBlocks: false,
  hasErrorTickers: false,
  isLoadingBlocks: false,
  isLoadingTickers: false,
  tickers: {},
};

const explorerPageReducer = (state = initialState, action: IReducerAction): IExplorerPageReducerState => {
  const { type, data } = action;
  switch (type) {
    case TICKERS_FETCH_START: {
      return {
        ...state,
        hasErrorTickers: false,
        isLoadingTickers: true,
      }
    }
    case TICKERS_FETCH_SUCCESS: {
      return {
        ...state,
        isLoadingTickers: false,
        tickers: data,
      }
    }
    case TICKERS_FETCH_ERROR: {

      return {
        ...state,
        hasErrorTickers: true,
        isLoadingTickers: false,
      }
    }
    default:
      return state;
  }
};

export default explorerPageReducer;
