import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from './styledComponents/Button';
import Title from './styledComponents/Title';
import Count from './styledComponents/Count';
import IconWrapper from "./styledComponents/IconWrapper";

const Tag = ({ title, icon, count, selected, onClick }) => {
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

export default Tag;
