import styled, { createGlobalStyle } from 'styled-components';

const floralWhite = '#FFF8F0';
const height = '400';

const ContainerWithButtons = styled.div`
  background-color: ${floralWhite};
  display: flex;
  width: 80%;
  margin: 20% auto;
  height: ${height}px;



  &:hover {
    color: #868B8E;
  }

  @media screen and (max-width: 770px ) {
    background: #40826D;
  }
`;

const GlobalStyle = createGlobalStyle`
  * {
    background-color: #E7D2CC;
  }
`

export  {
  ContainerWithButtons,
  GlobalStyle
}
  
