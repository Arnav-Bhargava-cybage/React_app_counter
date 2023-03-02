import React from "react";
import Tag from "./Tag";
import { faClock } from "@fortawesome/free-solid-svg-icons";


const TagList = ({ tags, selectedTagIndex, onSelectTag }) => {
    return (
      <div className="container">
        {tags.map((tag, index) => (
          <Tag
            key={index}
            title={tag.title}
            icon={tag.icon || faClock}
            count={tag.count}
            selected={selectedTagIndex === index}
            onClick={() => onSelectTag(index)}
          />
        ))}
      </div>
    );
  };

  export default TagList;