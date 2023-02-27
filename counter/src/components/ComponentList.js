import React from "react";
import Component from "./Component";
import { faClock } from "@fortawesome/free-solid-svg-icons";


const ComponentList = ({ components, selectedComponentIndex, onSelectComponent }) => {
    return (
      <div className="container">
        {components.map((component, index) => (
          <Component
            key={index}
            title={component.title}
            icon={component.icon || faClock}
            count={component.count}
            selected={selectedComponentIndex === index}
            onClick={() => onSelectComponent(index)}
          />
        ))}
      </div>
    );
  };

  export default ComponentList;