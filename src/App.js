import React, { useState, useCallback } from 'react';
import NewsList from './NewsList';
import Cartegories from './Categories';

function App() {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback((category) => setCategory(category), []);

  return (
    <>
      <Cartegories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  );
}

export default App;
