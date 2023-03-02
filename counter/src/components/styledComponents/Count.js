import styled from 'styled-components';

const Count = styled.div`
  background-color: ${props => (props.selected ? '#0000CC' : '#E7E7E7')};
  color: ${props => (props.selected ? '#FFFFFF' : '#5A5A5A')};
  font-size: 16px;
  font-weight: bold;
  border-radius: 20px;
  padding: 5px 10px;
  margin-left: 10px;
`;

export default Count;
