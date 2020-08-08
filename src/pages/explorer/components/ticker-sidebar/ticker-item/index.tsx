import React, { FC, useMemo } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px 10px;
  margin: 10px 0;
  cursor: pointer;
  user-select: none;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ValuesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  margin-left: 5px;
`;

const TickerName = styled.div`
  flex: 1 1 auto;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TickerValue = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 14px;
  color: #858585;
  font-weight: 500;
`;


interface IProps {
  label: string;
  value: number;
  IconComponent: () => JSX.Element;
  currencySymbol?: string;
  isLoading?: boolean;
}

const TickerItem: FC<IProps> = (props) => {
  const {
    IconComponent,
    label,
    value,
    currencySymbol,
    isLoading,
  } = props;

  const formattedValue = useMemo(() => {
    const rounded = value.toFixed(2);
    return rounded.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }, [value]);

  return (
    <Wrapper>
      <IconWrapper>
        <IconComponent />
      </IconWrapper>
      <ValuesWrapper>
        <TickerName>{label}</TickerName>
        <TickerValue>{isLoading ? '...' : `${currencySymbol} ${formattedValue}`}</TickerValue>
      </ValuesWrapper>
    </Wrapper>
  );
};

TickerItem.defaultProps = {
  label: 'Bitcoin',
  value: 0,
  IconComponent: () => <></>,
  currencySymbol: '$',
  isLoading: false,
};

export default TickerItem;
