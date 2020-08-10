import styled from 'styled-components';

export const PageHeader = styled.div`
  flex: 1 1 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 24px;
`;

export const IconContainer = styled.div`
  margin: 0 10px -5px 0; // Negative margin compensates for icon offset
  height: auto;
  flex: 0 0 auto;
`;

export const HeaderTextContainer = styled.div`
  flex: 1 1 auto;
`;

export const CurrencySymbol = styled.span`
  color: lightgray;
  
   a {
    color: inherit;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
   }
`;

export const Separator = styled.hr`
  border: none;
  border-bottom: 1px solid lightgray;
  color: white;
  width: 100%;
  margin: 8px 0 4px 0;
`;

export const SubHeaderText = styled.div`
  font-size: 14px;
  color: darkslateblue;
`;

export const PageContent = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  margin-top: 25px;
`;
