import React from "react";
import { atom, useAtom } from "jotai";
import './App.css';
import ComponentList from "./components/ComponentList";
import { faClock } from "@fortawesome/free-solid-svg-icons";


const componentsAtom = atom([
  { title: "All", count: 12735 },
  { title: "Asset Down", icon: faClock, count: 1 },
  { title: "Asset Failures", icon: faClock, count: 47 },
]);

const selectedComponentIndexAtom = atom(-1);

const App = () => {
  const [components, setComponents] = useAtom(componentsAtom);
  const [selectedComponentIndex, setSelectedComponentIndex] = useAtom(selectedComponentIndexAtom);

  const onSelectComponent = (index) => {
    setSelectedComponentIndex(index);
  };

  return <ComponentList components={components} selectedComponentIndex={selectedComponentIndex} onSelectComponent={onSelectComponent} />;
};

export default App;