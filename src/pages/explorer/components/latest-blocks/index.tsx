import React, { FC, useCallback, useMemo, memo } from 'react';
import { useHistory } from 'react-router-dom';
import Moment from 'moment';

import InfoTable from '../../../../components/info-table';
import getPoolAddressName from '../../helpers/get-pool-address-name';

const createTableColumns = (handleHashClick: (value: any) => void) => {
  return [
    {
      key: 'height',
      label: 'Height',
      formatter: null,
    },
    {
      key: 'hash',
      label: 'Hash',
      formatter: (value: string) => {
        const nextStr = [
          value.charAt(0),
          '...',
        ];

        let shouldOmit = true;

        for (let i = 0; i < value.length; i++) {
          const nextChar = value.charAt(i);
          if (nextChar === '0' && shouldOmit) {

          } else {
            shouldOmit = false;
            nextStr.push(nextChar);
          }
        }

        return nextStr.join('');
      },
      onClick: (event: any, value: any) => {
        handleHashClick(value);
      }
    },
    {
      key: 'mined',
      label: 'Mined',
      formatter: (value: number) => Moment(value * 1000).fromNow(),
    },
    {
      key: 'miner',
      label: 'Miner',
      formatter: (value: string) => getPoolAddressName(value),
    },
    {
      key: 'size',
      label: 'Size',
      formatter: (value: number) => {
        return `${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} bytes`;
      },
    },
  ] as any[];
}

interface IProps {
  isLoading?: boolean;
  blocks: any[];
}

const LatestBlocks: FC<IProps> = (props) => {
  const {
    isLoading,
    blocks,
  } = props;

  const history = useHistory();

  const handleHashClick = useCallback((value) => {
    history.push(`/block?hash=${value}`);
  }, [history]);

  const columns = useMemo(() => {
    return createTableColumns(handleHashClick);
  }, [handleHashClick])

  return (
    <InfoTable
      isLoading={isLoading}
      columns={columns}
      rowData={blocks}
    />
  );
};

LatestBlocks.defaultProps = {
  isLoading: false,
};

export default memo(LatestBlocks);
