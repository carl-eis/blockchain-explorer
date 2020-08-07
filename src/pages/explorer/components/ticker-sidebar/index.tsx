import React, { FC } from 'react';
import styled from 'styled-components';

import TickerItem from './ticker-item';

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

interface IProps {
  [x: string]: any;
}

const TickerSidebar: FC<IProps> = (props) => {
  const {  } = props;
  return (
    <TickersWrapper>
      <TickerItem IconComponent={IconBitcoin} label={'Bitcoin'} value={3900.1232} />
      <TickerItem IconComponent={IconEthereum} label={'Ethereum'} value={3900.1232} />
      <TickerItem IconComponent={IconBitcoinCash} label={'Bitcoin Cash'} value={3900.1232} />
    </TickersWrapper>
  );
};

TickerSidebar.defaultProps = {};

export default TickerSidebar;
