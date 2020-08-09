import React, { FC } from 'react';
import styled, { css } from 'styled-components';


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
    color: #6d6d6d;
  }
  
  tr {
    border-bottom: 1px solid lightgray;
  }
`;

const TableCell = styled.td<{ isClickable?: boolean }>`
  padding: 12px 50px 12px 0;
  white-space: nowrap;
  font-weight: 500;
  
  ${props => props.isClickable ? css`
    color: cornflowerblue;
    cursor: pointer;
    
    &:hover{ 
      text-decoration: underline;
    }
  ` : ''}
`;

const LoadingPlaceholder = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
`;


type ITableColumns = Array<{
  key: string;
  label: string;
  formatter?: (value: any) => any;
  onClick?: (event: any, value: any) => void;
}>

interface IProps {
  isLoading?: boolean;
  columns: ITableColumns;
  rowData: any[];
}

const InfoTable: FC<IProps> = (props) => {
  const {
    columns,
    rowData,
    isLoading,
  } = props;

  const handleCellClick = (value, callback) => (event) => {
    if (!callback) {
      return;
    }
    callback(event, value);
  }

  if (isLoading) {
    return <LoadingPlaceholder>Loading...</LoadingPlaceholder>
  }

  return (
    <TableWrapper>
      <StyledTable>
        <thead>
        <tr>
          {columns.map(({ label }, index) => (
            <th key={index}>{label}</th>
          ))}
        </tr>
        </thead>
        <tbody>
        {rowData?.map((result : any, resultIndex) => {
          return (
            <tr key={resultIndex}>
              {columns.map((col, columnIndex) => {
                const cellValue = result[col?.key];
                return (
                  <TableCell
                    isClickable={!!col?.onClick}
                    key={columnIndex}
                    onClick={handleCellClick(cellValue, col?.onClick)}
                  >
                    {col?.formatter ? col.formatter(cellValue) : cellValue}
                  </TableCell>
                )
              })}
            </tr>
          );
        })}
        </tbody>
      </StyledTable>
    </TableWrapper>
  );
};

InfoTable.defaultProps = {
  isLoading: false,
  columns: [],
  rowData: [],
};

export default InfoTable;
