import Buttons from "./styled-components/buttons/styles";
import { ContainerWithButtons, GlobalStyle } from "./styled-components/container/styles";

function App() {
  return (
    <ContainerWithButtons>
      <GlobalStyle/>
      <Buttons bgcolor="#9DD9D2">Botão 1</Buttons>
      <Buttons bgcolor="#FF8811">Botão 2</Buttons>
      <Buttons bgcolor="#F4D06F">Botão 3</Buttons>
      <Buttons bgcolor="#392F5A">Botão 4</Buttons>
    </ContainerWithButtons>
  );
}

export default App;
