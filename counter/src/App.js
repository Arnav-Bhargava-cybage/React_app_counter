import React, { useState } from 'react';
import Component from './components/Component';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    {
      title: 'All',
      count: 12735,
    },
    {
      title: 'Asset Down',
      icon: faClock,
      count: 1,
    },
    {
      title: 'Asset Failures',
      icon: faClock,
      count: 47,
    },
  ];

  const handleClick = index => {
    setActiveIndex(index);
  };

  return (
    <div>
      {data.map((item, index) => (
        <Component
          key={index}
          title={item.title}
          icon={item.icon}
          count={item.count}
          active={index === activeIndex}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default App;
