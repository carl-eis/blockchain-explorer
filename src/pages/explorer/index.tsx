import React, { FC, useEffect, useReducer } from 'react';

import TickerSidebar from './components/ticker-sidebar';
import LatestBlocks from './components/latest-blocks';
import SearchBar from './components/search-bar';
import SectionHeading from '../../components/typography/section-heading';
import fetchTrackedTickers from './helpers/fetch-tracked-tickers';
import fetchBlockInfo from './helpers/fetch-block-info';


import explorerPageReducer, { initialState } from './reducer';

import {
  tickersFetchStart,
  tickersFetchError,
  tickersFetchSuccess,
  blocksFetchSuccess,
  blocksFetchStart,
  blocksFetchError,
} from './actions';

import {
  ExplorerWrapper,
  PageContainer,
  PageWrapper,
  SearchbarWrapper,
  SidebarWrapper,
} from './styles';

const trackedCurrencies = [
  { name: 'Bitcoin', symbol: 'BTC' },
  { name: 'Ethereum', symbol: 'ETH' },
  { name: 'Bitcoin Cash', symbol: 'BCH' },
];


interface IProps {
  [x: string]: any;
}

const HomePage: FC<IProps> = (props) => {
  const [state, dispatch] = useReducer(explorerPageReducer, initialState);

  const {
    tickers,
    isLoadingTickers,
    isLoadingBlocks,
    blocks,
  } = state;


  useEffect(() => {
    dispatch(tickersFetchStart());
    fetchTrackedTickers(trackedCurrencies.map(item => item?.symbol))
      .then(response => dispatch(tickersFetchSuccess(response)))
      .catch(ex => dispatch(tickersFetchError()));

    dispatch(blocksFetchStart());
    fetchBlockInfo()
      .then(response => dispatch(blocksFetchSuccess(response)))
      .catch(ex => dispatch(blocksFetchError()));
  }, [dispatch]);


  return (
    <PageWrapper>
      <PageContainer>
        <SidebarWrapper>
          <SectionHeading>
            Block Explorer
          </SectionHeading>
          <TickerSidebar
            tickers={tickers}
            trackedCurrencies={trackedCurrencies}
            isLoading={isLoadingTickers}
          />
        </SidebarWrapper>

        <ExplorerWrapper>
          <SearchbarWrapper>
            <SearchBar/>
          </SearchbarWrapper>

          <SectionHeading>
            Latest Blocks
          </SectionHeading>

          <LatestBlocks
            blocks={blocks}
            isLoading={isLoadingBlocks}
          />
        </ExplorerWrapper>
      </PageContainer>
    </PageWrapper>
  );
};

HomePage.defaultProps = {};

export default HomePage;
