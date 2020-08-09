import {
  BLOCKS_FETCH_ERROR,
  BLOCKS_FETCH_START,
  BLOCKS_FETCH_SUCCESS,
  TICKERS_FETCH_ERROR,
  TICKERS_FETCH_START,
  TICKERS_FETCH_SUCCESS,
} from '../actions';

import { ITickersIndex } from '../helpers/fetch-tracked-tickers';
import { IBtcLatestBlock } from '../../../api/get-latest-blocks';

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
  blocks: IBtcLatestBlock[];
}

export const initialState: IExplorerPageReducerState = {
  hasErrorBlocks: false,
  hasErrorTickers: false,
  isLoadingBlocks: false,
  isLoadingTickers: false,
  tickers: {},
  blocks: [],
};

const explorerPageReducer = (state = initialState, action: IReducerAction): IExplorerPageReducerState => {
  const { type, data } = action;

  console.log(action);

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
    case BLOCKS_FETCH_START: {
      return {
        ...state,
        hasErrorBlocks: false,
        isLoadingBlocks: true,
      }
    }
    case BLOCKS_FETCH_SUCCESS: {
      return {
        ...state,
        isLoadingBlocks: false,
        blocks: data,
      }
    }
    case BLOCKS_FETCH_ERROR: {
      return {
        ...state,
        hasErrorBlocks: true,
      }
    }
    default:
      return state;
  }
};

export default explorerPageReducer;
