import React, { FC } from 'react';
import styled from 'styled-components';
import SearchInput from './search-input';
import Button from './button';

const SearchBarWrapper = styled.form`
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
  onChange: (...args) => void;
  onSubmit: (...args) => void;
  searchText: string;
}

const SearchBar: FC<IProps> = (props) => {
  const {
    onChange,
    onSubmit,
    searchText,
  } = props;

  const handleFormSubmit = (event) => {
    event?.preventDefault();
    onSubmit();
  }

  const handleSearchButtonClick = (event) => {
    event?.preventDefault();
    onSubmit();
  }

  return (
    <SearchBarWrapper
      onSubmit={handleFormSubmit}
    >
      <SearchInputWrapper>
        <SearchInput
          onChange={onChange}
          value={searchText}
        />
      </SearchInputWrapper>
      <Button
        onClick={handleSearchButtonClick}
      >
        Search
      </Button>
    </SearchBarWrapper>
  );
};

SearchBar.defaultProps = {
  searchText: '',
  onChange: () => {},
  onSubmit: () => {},
};

export default SearchBar;
