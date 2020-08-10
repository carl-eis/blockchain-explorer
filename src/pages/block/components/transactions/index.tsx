import React, { FC, Fragment } from 'react';
import Moment from 'moment';
import styled from 'styled-components';

import { IRawTransaction } from '../../../../api/get-raw-block';
import SectionHeading from '../../../../components/typography/section-heading';
import formatBtc from '../../../../helpers/format-btc';
import { Separator } from '../../styles';
import { IconArrow, IconGlobe } from '../../../../app/constants';

const Wrapper = styled.div`
  display: flex;
  flex: 0 0 100%;
  flex-direction: column;
  overflow: hidden;
  margin-top: 25px;
  font-size: 14px;
  
  font-weight: 500;
  div {
    box-sizing: border-box;
  }
`;

const Outer = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-direction: row;
  margin-top: 25px;
  
  @media(max-width: 876px) {
    flex-direction: column;
  }
`;

const OuterColumn = styled.div`
  width: 50%;
  
  @media(max-width: 876px) {
    width: 100%;
  }
`;

const InnerRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;

const SpacerCell = styled.div`
  width: 100px;
  color: rgb(103, 113, 133);
`;

const ArrowCell = styled.div`
  width: 100px;
  margin-left: 30px;
  overflow: hidden;
  height: 20px;
  
  svg {
    height: 100%;
    fill: rgb(51, 159, 123);
  }
  
  @media(max-width: 876px) {
    margin-left: 0;
  }
`;

const InfoCell = styled.div`
  width: calc(100% - 100px);
  overflow: hidden;
`;

const LineItem = styled.div`
  display: flex;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex-direction: row;
  flex: 1 0 100%;
  margin-bottom: 5px;
`;

const LongTextLine = styled.div<{ address?: boolean }>`
  flex: 1 1 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${props => props.address ? 'rgb(61, 137, 245)' : 'inherit'};
`;

const ShortTextLine = styled.div<{ output?: boolean }>`
  display: flex;
  align-items: flex-start;
  justify-self: flex-end;
  flex: 0 0 auto;
  margin-left: 10px;
  svg {
    height: 100%;
    fill: ${props => props.output ? 'rgb(51, 159, 123)' : 'rgb(61, 137, 245)'};
    margin-left: 5px;
  }
`;

const TotalsBlockWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
`;

const TotalsBlock = styled.div`
  flex: 0 1 auto;
  display: flex;
  background: #D1F0DB;
  color: #00875a;
  height: 27px;
  padding: 4px;
  border-radius: 4px;
  align-items: center;
`;


interface IProps {
  transactions: IRawTransaction[];
}

const Transactions: FC<IProps> = (props) => {
  const { transactions } = props;
  const transactionSlice = transactions.slice(0, 50);

  return (
    <Wrapper>
      <SectionHeading>Transactions</SectionHeading>
      {transactionSlice.map((transaction, index) => {
        const { time, out } = transaction;

        return (
          <Fragment key={index}>
            <Outer>
              <OuterColumn>
                <InnerRow>
                  <SpacerCell>
                    Hash
                  </SpacerCell>
                  <InfoCell>
                    <LineItem>
                      <LongTextLine>{transaction?.hash}</LongTextLine>
                    </LineItem>
                  </InfoCell>
                </InnerRow>

                <InnerRow>
                  <SpacerCell/>
                  <InfoCell>
                    {!transaction.inputs.some(input => !!input.prev_out) ? (
                      <LineItem>
                        <LongTextLine>
                          COINBASE (Newly Generated Coins)
                        </LongTextLine>
                      </LineItem>
                    ) : transaction.inputs.map((input, index) => (
                      <LineItem key={index}>
                        <LongTextLine address>{input.prev_out?.addr}</LongTextLine>
                        <ShortTextLine>{formatBtc(input.prev_out?.value)} BTC <IconGlobe/></ShortTextLine>
                      </LineItem>
                    ))}
                  </InfoCell>
                </InnerRow>
              </OuterColumn>

              <OuterColumn>
                <InnerRow>
                  <ArrowCell/>
                  <InfoCell>
                    <LineItem>
                      <LongTextLine/>
                      <ShortTextLine>{Moment(time * 1000).format('YYYY-MM-DD HH:mm')}</ShortTextLine>
                    </LineItem>
                  </InfoCell>
                </InnerRow>

                <InnerRow>
                  <ArrowCell>
                    <IconArrow/>
                  </ArrowCell>
                  <InfoCell>
                    {out.map((outTx, index) => (
                      <LineItem key={index}>
                        {(!outTx.addr || outTx.addr === 'null') ? (
                          <LongTextLine>OP_RETURN</LongTextLine>
                        ) : (
                          <LongTextLine address>{outTx.addr}</LongTextLine>
                        )}
                        <ShortTextLine output>
                          {formatBtc(outTx.value || 0)} BTC <IconGlobe/>
                        </ShortTextLine>
                      </LineItem>
                    ))}
                    <LineItem>
                      <TotalsBlockWrapper>
                        <TotalsBlock>{formatBtc(out.reduce((acc, outTx) => acc + outTx.value, 0))} BTC</TotalsBlock>
                      </TotalsBlockWrapper>
                    </LineItem>
                  </InfoCell>
                </InnerRow>
              </OuterColumn>
            </Outer>
            <Separator/>
          </Fragment>
        )
      })}
    </Wrapper>
  );
};

Transactions.defaultProps = {
  transactions: [],
};

export default Transactions;
