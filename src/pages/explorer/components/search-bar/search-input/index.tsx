import React, { FC } from 'react';
import styled from 'styled-components';
import { IconMagnifyingGlass } from '../../../../../app/constants';

const InputWrapper = styled.div`
  display: flex;
  flex: 1 0 auto;
  height: 40px;
  overflow: hidden;
  position: relative;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const StyledInput = styled.input`  
  border: 1px solid gray;
  border-radius: 5px;
  background: #EFF0F4;
  display: flex;
  flex: 1 0 auto;
  overflow: hidden;
  padding-left: 25px;
`;

interface IProps {
  onChange: (...args) => void;
  value: string;
  placeholder?: string;
}

const SearchInput: FC<IProps> = (props) => {
  const {
    onChange,
    placeholder,
    value,
  } = props;

  return (
    <InputWrapper>
      <IconWrapper>
        <IconMagnifyingGlass/>
      </IconWrapper>
      <StyledInput
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </InputWrapper>
  );
};

SearchInput.defaultProps = {
  onChange: () => {},
  placeholder: "Search for things like address, transaction, block",
  value: '',
};

export default SearchInput;

