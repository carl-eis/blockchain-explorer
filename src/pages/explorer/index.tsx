import React, { FC } from 'react';
import styled from 'styled-components';

import TickerSidebar from './components/ticker-sidebar';
import LatestBlocks from './components/latest-blocks';
import SearchBar from './components/search-bar';
import SectionHeading from '../../components/typography/section-heading';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 65px;
`;

const PageContainer = styled.div`
  flex: 0 1 1258px;
  display: flex;
  flex-direction: row;
  padding: 20px 15px 0 15px;
  max-width: 100%;
  
  @media (max-width: 876px) {
    flex-direction: column;
    padding: 20px 15px 0 15px;
  }
`;

const SearchbarWrapper = styled.div`
  margin-bottom: 16px;
`;

const SidebarWrapper = styled.div`
  flex: 0 1 300px;
  
  @media (max-width: 876px) {
    flex: 1 1 auto;
  }
`;

const ExplorerWrapper = styled.div`
  flex: 1 1 auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;


interface IProps {
  [x: string]: any;
}

const HomePage: FC<IProps> = (props) => {
  return (
    <PageWrapper>
      <PageContainer>
        <SidebarWrapper>
          <SectionHeading>
            Block Explorer
          </SectionHeading>
          <TickerSidebar/>
        </SidebarWrapper>

        <ExplorerWrapper>
          <SearchbarWrapper>
            <SearchBar/>
          </SearchbarWrapper>

          <SectionHeading>
            Latest Blocks
          </SectionHeading>

          <LatestBlocks/>
        </ExplorerWrapper>
      </PageContainer>
    </PageWrapper>
  );
};

HomePage.defaultProps = {};

export default HomePage;
