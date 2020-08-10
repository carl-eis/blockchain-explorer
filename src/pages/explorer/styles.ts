import styled from 'styled-components';



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
