import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from './Button';
import Title from './Title';
import Count from './Count';
import Container from './Container';

const Component = ({ title, icon, count, active, onClick }) => {
  return (
    <Container>
    <Button active={active} onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
      <Title>{title}</Title>
      <Count active={active}>{count}</Count>
    </Button>
    </Container>
  );
};

export default Component;
