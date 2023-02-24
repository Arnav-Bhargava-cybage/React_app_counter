import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => (props.active ? '#BCE0FD' : '#E7E7E7')};
  color: ${props => (props.active ? '#36454F' : '#5A5A5A')};
  height:40px;
  width:200px;
  border: 1px solid grey;
  border-radius: 20px;
  padding: 5px 12px;
  margin-right: 10px;
  cursor: pointer;
`;

export default Button;
