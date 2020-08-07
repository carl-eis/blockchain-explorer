import React, { FC } from 'react';
import styled from 'styled-components';

import TickerSidebar from './components/ticker-sidebar';
import LatestBlocks from './components/latest-blocks';

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

const SidebarWrapper = styled.div`
  flex: 0 1 300px;
  
  h3 {
    font-weight: 500;
    margin: 0;
    padding: 0;
  }
  
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
          <h3>Block Explorer</h3>
          <TickerSidebar />
        </SidebarWrapper>
        <ExplorerWrapper>
          <div>Search Input</div>
          <div>Latest Blocks</div>
          <LatestBlocks />
        </ExplorerWrapper>
      </PageContainer>
    </PageWrapper>
  );
};

HomePage.defaultProps = {};

export default HomePage;
