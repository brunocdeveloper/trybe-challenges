import styled from 'styled-components';

const Buttons = styled.button`
  width: 130px;
  border-radius: 8px;
  height: 40px;
  background-color: ${props => props.bgcolor ? props.bgcolor : "white"};
  color: white;
  font-weight: bold;
  font-size: 24px;
`

export default Buttons;