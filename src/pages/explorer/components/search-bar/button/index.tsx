import React, { FC } from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button<{ fullWidth?: boolean }>`
  border: none;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  background: #7FAEF4;
  font-weight: 500;
  font-size: 14px;
  padding: 20px;
  height: 40px;
  
  ${props => props?.fullWidth ? css`
    width: 100%;
  ` : ''}
`;

interface IProps {
  onClick: (...args: any) => void;
  fullWidth?: boolean;
}

const Button: FC<IProps> = (props) => {
  const {
    children,
    onClick,
    fullWidth,
  } = props;

  return (
    <StyledButton
      fullWidth={fullWidth}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  onClick: () => {},
  fullWidth: false,
};
export default Button;
