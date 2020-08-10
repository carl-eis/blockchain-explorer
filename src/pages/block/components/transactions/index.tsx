import React, { FC } from 'react';
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
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: flex;
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
  justify-self: flex-end;
  flex: 0 0 auto;
  margin-left: 10px;
  svg {
    height: 100%;
    fill: ${props => props.output ? 'rgb(51, 159, 123)' : 'rgb(61, 137, 245)'};
  }
`;

const processAddress = (addr: string) => {
  if (!addr || addr === 'null') {
    return 'OP_RETURN';
  }
  return addr;
}


interface IProps {
  transactions: IRawTransaction[];
}

const Transactions: FC<IProps> = (props) => {
  const { transactions } = props;
  const transactionSlice = transactions.slice(0, 50);

  return (
    <Wrapper>
      <SectionHeading>Transactions</SectionHeading>
      {transactionSlice.map((transaction) => {
        const {
          time,
          inputs,
          out,
        } = transaction;

        return (
          <>
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
                    ) : transaction.inputs.map(input => (
                      <LineItem>
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
                      <ShortTextLine>{Moment(time * 1000).format('YYYY-MM-DD HH:MM')}</ShortTextLine>
                    </LineItem>
                  </InfoCell>
                </InnerRow>

                <InnerRow>
                  <ArrowCell>
                    <IconArrow />
                  </ArrowCell>
                  <InfoCell>
                    {out.map(outTx => (
                      <LineItem>
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
                  </InfoCell>
                </InnerRow>
              </OuterColumn>
            </Outer>
            <Separator/>
          </>
        )
      })}
    </Wrapper>
  );
};

Transactions.defaultProps = {
  transactions: [],
};

export default Transactions;