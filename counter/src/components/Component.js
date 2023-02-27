import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from './Button';
import Title from './Title';
import Count from './Count';
import IconWrapper from "./IconWrapper";

const Component = ({ title, icon, count, selected, onClick }) => {
    return(
    <Button selected={selected} onClick={onClick}>
      <IconWrapper>
        <FontAwesomeIcon icon={icon} />
      </IconWrapper>
      <Title>{title}</Title>
      <Count selected={selected}>{count}</Count>
    </Button>
  );
};

export default Component;
