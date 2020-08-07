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

const fakeResults = [
  {
    height: 123123123,
    hash: 'testssedkfjgskjdfngjkdfngetsetset',
    mined: 'testsetsetset',
    miner: 'testsetsetset',
    size: 123123123,
  },
  {
    height: 123123123,
    hash: 'testssedkfjgskjdfngjkdfngetsetset',
    mined: 'testsetsetset',
    miner: 'testsetsetset',
    size: 123123123,
  },
  {
    height: 123123123,
    hash: 'testssedkfjgskjdfngjkdfngetsetset',
    mined: 'testsetsetset',
    miner: 'testsetsetset',
    size: 123123123,
  },
]

interface IProps {
  results?: IBlockEntry[];
}

const LatestBlocks: FC<IProps> = (props) => {
  const {
    results,
  } = props;

  return (
    <TableWrapper>
      <StyledTable>
        <thead>
        <tr>
          {tableColumns.map(({ label }) => (
            <th>{label}</th>
          ))}
        </tr>
        </thead>
        <tbody>
        {results?.map((result : any) => {
          return (
            <tr>
              {tableColumns.map(col => (
                <td>{result[col?.key]}</td>
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
  results: fakeResults,
};

export default LatestBlocks;
