import React, { FC } from 'react';
import styled from 'styled-components';

const TransactionOuter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

interface IProps {
  hash: string;

}

const Transaction: FC<IProps> = (props) => {
  const {  } = props;
  return (
    <TransactionOuter>

    </TransactionOuter>
  );
};

Transaction.defaultProps = {};

export default Transaction;
