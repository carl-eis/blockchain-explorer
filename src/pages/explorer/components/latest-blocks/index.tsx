import React, { FC } from 'react';
import styled from 'styled-components';

const TableWrapper = styled.div`
  display: block;
  overflow-x: auto;
  width: 100%;
`;

const StyledTable = styled.table`
  flex: 1 1 auto;
  width: 100%;
  border-collapse: collapse;
  color: #353F52;
  table-layout: auto;

  th {
    padding: 12px 12px 12px 0;
    text-align: left;
  }
  
  td {
    padding: 12px 5px 12px 0;
    white-space: nowrap;
  }
  
  tr {
    border-bottom: 1px solid lightgray;
  }
`;

const tableColumns = [
  { key: 'height', label: 'Height' },
  { key: 'hash', label: 'Hash' },
  { key: 'mined', label: 'Mined' },
  { key: 'miner', label: 'Miner' },
  { key: 'size', label: 'Size' },
];

interface IBlockEntry {
  height: number;
  hash: string;
  mined: string;
  miner: string;
  size: number;
}

interface IProps {
  blocks: IBlockEntry[];
  isLoading?: boolean;
}

const LatestBlocks: FC<IProps> = (props) => {
  const {
    blocks,
    isLoading,
  } = props;

  return (
    <TableWrapper>
      <StyledTable>
        <thead>
        <tr>
          {tableColumns.map(({ label }, index) => (
            <th key={index}>{label}</th>
          ))}
        </tr>
        </thead>
        <tbody>
        {blocks?.map((result : any, resultIndex) => {
          return (
            <tr key={resultIndex}>
              {tableColumns.map((col, columnIndex) => (
                <td key={columnIndex}>{result[col?.key]}</td>
              ))}
            </tr>
          );
        })}
        </tbody>
      </StyledTable>
    </TableWrapper>
  );
};

LatestBlocks.defaultProps = {
  blocks: [],
  isLoading: false,
};

export default LatestBlocks;
