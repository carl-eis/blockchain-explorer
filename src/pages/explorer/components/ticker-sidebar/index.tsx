import React, { FC } from 'react';
import styled from 'styled-components';

import TickerItem from './ticker-item';

import { IGetTickersResponse } from '../../../../api/get-ticker-values';

import {
  IconBitcoin,
  IconBitcoinCash,
  IconEthereum,
} from '../../../../app/constants';


const TickersWrapper = styled.div`
  flex: 0 1 auto;
  display: flex;
  flex-direction: column;
  
  @media(max-width: 876px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;


const getIconComponent = (symbol: string) => {
  switch (symbol) {
    case 'BTC':
      return IconBitcoin;
    case 'ETH':
      return IconEthereum;
    case 'BCH':
      return IconBitcoinCash;
    default: return () => <></>;
  }
}


interface IProps {
  isLoading?: boolean;
  trackedCurrencies: Array<{ name: string; symbol: string }>;
  tickers: {
    [cryptoSymbol: string]: IGetTickersResponse;
  };
}

const TickerSidebar: FC<IProps> = (props) => {
  const {
    trackedCurrencies,
    tickers,
    isLoading,
  } = props;

  const getCurrencyValue = (tickerSymbol: string, fiatSymbol: string = 'USD') => {
    return tickers?.[tickerSymbol]?.[fiatSymbol]?.last;
  }

  return (
    <TickersWrapper>
      {trackedCurrencies.map(currency => (
        <TickerItem
          key={currency?.symbol}
          IconComponent={getIconComponent(currency?.symbol)}
          label={currency?.name}
          value={getCurrencyValue(currency?.symbol)}
          isLoading={isLoading}
        />
      ))}
    </TickersWrapper>
  );
};

TickerSidebar.defaultProps = {
  isLoading: false,
  tickers: {},
  trackedCurrencies: [],
};

export default TickerSidebar;
