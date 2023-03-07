import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => (props.selected ? '#c1dff7' : '#F8F8F8')};
  color: ${props => (props.selected ? '#36454F' : '#5A5A5A')};
  height:40px;
  width:200px;
  border: 0.5px solid #E7E7E7;
  box-shadow: ${props => (props.selected ? 'none' : '0px 8px 10px #D4D4D4')};
  border-radius: 20px;
  padding: 5px 12px;
  margin: 32px;
  cursor: pointer;
`;


