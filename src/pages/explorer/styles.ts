import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 65px;
`;

export const PageContainer = styled.div`
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

export const SearchbarWrapper = styled.div`
  margin-bottom: 16px;
`;

export const SidebarWrapper = styled.div`
  flex: 0 1 300px;
  
  @media (max-width: 876px) {
    flex: 1 1 auto;
  }
`;

export const ExplorerWrapper = styled.div`
  flex: 1 1 auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;
