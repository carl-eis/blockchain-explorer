import React, { FC, useEffect, useState } from 'react';

import TickerSidebar from './components/ticker-sidebar';
import LatestBlocks from './components/latest-blocks';
import SearchBar from './components/search-bar';
import SectionHeading from '../../components/typography/section-heading';
import fetchTrackedTickers from './helpers/fetched-tracked-tickers';

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
  const [tickerValues, setTickerValues] = useState({});
  const [hasErrorTickers, setHasErrorTickers] = useState(false);
  const [isLoadingTickers, setIsLoadingTickers] = useState(false);

  useEffect(() => {
    const run = async () => {
      setHasErrorTickers(false);
      setIsLoadingTickers(true);

      const fetchedTickers = await fetchTrackedTickers(trackedCurrencies.map(item => item?.symbol));

      setTickerValues(fetchedTickers);
      setIsLoadingTickers(false);
    };

    try {
      run();
    } catch (ex) {
      console.error(ex);
      setHasErrorTickers(true);
    }
  }, []);


  return (
    <PageWrapper>
      <PageContainer>
        <SidebarWrapper>
          <SectionHeading>
            Block Explorer
          </SectionHeading>
          <TickerSidebar
            tickers={tickerValues}
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

          <LatestBlocks/>
        </ExplorerWrapper>
      </PageContainer>
    </PageWrapper>
  );
};

HomePage.defaultProps = {};

export default HomePage;
