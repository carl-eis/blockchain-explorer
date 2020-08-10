import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const PageContainer = styled.div<{ vertical?: boolean }>`
  flex: 0 1 1258px;
  display: flex;
  flex-direction: ${props => props?.vertical ? 'column' : 'row'};
  padding: 20px 15px 0 15px;
  overflow: hidden;
  
  @media (max-width: 876px) {
    flex-direction: column;
    padding: 20px 15px 0 15px;
  }
`;
