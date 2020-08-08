import React, { FC } from 'react';
import styled from 'styled-components';
import SearchInput from './search-input';
import Button from './button';

const SearchBarWrapper = styled.div`
  flex: 1 1 100%;
  display: flex;
  flex-direction: row;
  padding: 5px;
  
  @media(max-width: 876px) {
    flex-direction: column;
  }
`;

const SearchInputWrapper = styled.div`
  flex: 1 0 auto;
  display: flex;
  margin-right: 16px;
  
  @media(max-width: 876px) {
    margin: 0 0 16px 0;
  }
`;


interface IProps {
  [x: string]: any;
}

const SearchBar: FC<IProps> = (props) => {
  return (
    <SearchBarWrapper>
      <SearchInputWrapper>
        <SearchInput/>
      </SearchInputWrapper>
      <Button
        onClick={() => {}}
      >
        Search
      </Button>
    </SearchBarWrapper>
  );
};

SearchBar.defaultProps = {};

export default SearchBar;
