import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Button, Title, Count, IconWrapper} from './styledComponents';

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
