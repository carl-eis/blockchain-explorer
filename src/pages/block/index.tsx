import React, { FC, useEffect, useMemo, useState } from 'react';
import Moment from 'moment';

import { Link, useLocation } from 'react-router-dom';

import {
  CurrencySymbol,
  HeaderTextContainer,
  IconContainer,
  PageContent,
  PageHeader,
  Separator,
  SubHeaderText
} from './styles';

import { PageContainer, PageWrapper } from '../../components/styles';
import { IconBitcoin } from '../../app/constants';
import InfoTable from '../../components/info-table';

import fetchRawBlockInfo, { IProcessedRawBlockResult } from '../../helpers/fetch-raw-block-info';
import formatLongNumber from '../../helpers/format-long-number';
import Transactions from './components/transactions';
import formatBtc from '../../helpers/format-btc';

const parseQueryParams = (search: string): any => {
  return search.substr(1).split('&').reduce((acc, currentPair) => {
    const [key, value] = currentPair.split('=');
    return { ...acc, [key]: value };
  }, {});
}


interface IProps {
  [x: string]: any;
}

const BlockPage: FC<IProps> = () => {
  const { search } = useLocation();
  const { hash } = parseQueryParams(search);

  const [isSearching, setIsSearching] = useState(false);
  const [hasErrorSearch, setHasErrorSearch] = useState(false);
  const [blockResult, setBlockResult] = useState<IProcessedRawBlockResult | null>(null);

  const currencyName = 'Bitcoin';
  const transactions = blockResult?.transactions || [];

  useEffect(() => {
    setIsSearching(true);
    setHasErrorSearch(false);

    fetchRawBlockInfo(hash)
    .then((rawResult) => {
      setBlockResult(rawResult);
      setIsSearching(false);
    })
    .catch(() => {
      setIsSearching(false);
      setHasErrorSearch(true)
    });
  }, [
    hash,
  ]);

  const rowData = useMemo(() => {
    if (!blockResult) {
      return null;
    }

    const {
      hash: blockResultHash,
      confirmations,
      timestamp,
      height,
      miner,
      numTransactions,
      version,
      bits,
      blockFee,
      blockReward,
      difficulty,
      merkleRoot,
      nonce,
      size,
      volume,
      weight,
    } = blockResult;

    return [
      {
        name: 'Hash',
        value: blockResultHash,
      },
      {
        name: 'Confirmations',
        value: confirmations || '-',
      },
      {
        name: 'Timestamp',
        value: Moment(timestamp * 1000).format('YYYY-MM-DD HH:mm'),
      },
      {
        name: 'Height',
        value: height,
      },
      {
        name: 'Miner',
        value: miner,
      },
      {
        name: 'Number of Transactions',
        value: formatLongNumber(numTransactions),
      },
      {
        name: 'Difficulty',
        value: formatLongNumber(difficulty),
      },
      {
        name: 'Merkle root',
        value: merkleRoot,
      },
      {
        name: 'Version',
        value: `0x${version.toString(16)}`
      },
      {
        name: 'Bits',
        value: formatLongNumber(bits),
      },
      {
        name: 'Weight',
        value: `${formatLongNumber(weight)} WU`,
      },
      {
        name: 'Size',
        value: `${formatLongNumber(size)} bytes`,
      },
      {
        name: 'Nonce',
        value: formatLongNumber(nonce),
      },
      {
        name: 'Transaction Volume',
        value: `${formatBtc(volume)} BTC`,
      },
      {
        name: 'Block Reward',
        value: `${formatBtc(blockReward)} BTC`,
      },
      {
        name: 'Fee Reward',
        value: `${formatBtc(blockFee)} BTC`,
      },
    ];
  }, [blockResult])

  return (
    <PageWrapper>
      <PageContainer vertical>
        <PageHeader>
          <IconContainer>
            <IconBitcoin/>
          </IconContainer>
          <HeaderTextContainer>
            <CurrencySymbol>
              <Link to={'/explorer'}>
                BTC
              </Link>
            </CurrencySymbol> / Block
          </HeaderTextContainer>
        </PageHeader>
        <Separator/>

        {hasErrorSearch && (
          <div>Unable to find block info for hash "{hash}"</div>
        )}

        {!hasErrorSearch && <>
            <SubHeaderText>
                Block at depth {blockResult?.height} in the {currencyName} blockchain
            </SubHeaderText>

            <PageContent>
                <InfoTable
                    isLoading={isSearching}
                    rowData={rowData || []}
                    columns={[
                      {
                        key: 'name',
                        label: 'Item Name',
                        styles: {
                          color: '#677185',
                        }
                      },
                      {
                        key: 'value',
                        label: 'Item value',
                      },
                    ]}
                    showColumnHeaders={false}
                />
            </PageContent>

          {!!blockResult && !isSearching && (
            <Transactions
              transactions={transactions}
            />
          )}
        </>}
      </PageContainer>
    </PageWrapper>
  );
};

BlockPage.defaultProps = {};

export default BlockPage;
