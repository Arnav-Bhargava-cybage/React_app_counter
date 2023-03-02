import React from "react";
import { atom, useAtom } from "jotai";
import './App.css';
import TagList from "./components/TagList";
import { faClock } from "@fortawesome/free-solid-svg-icons";


const tagsAtom = atom([
  { title: "All", count: 12735 },
  { title: "Asset Down", icon: faClock, count: 1 },
  { title: "Asset Failures", icon: faClock, count: 47 },
]);

const selectedTagIndexAtom = atom(-1);

const App = () => {
  const [tags, setTags] = useAtom(tagsAtom);
  const [selectedTagIndex, setSelectedTagIndex] = useAtom(selectedTagIndexAtom);

  const onSelectTag = (index) => {
    setSelectedTagIndex(index);
  };

  return <TagList tags={tags} selectedTagIndex={selectedTagIndex} onSelectTag={onSelectTag} />;
};

export default App;