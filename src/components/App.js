import React from 'react';

import NewsList from './NewsList';
import Categories from './Categories';

function App() {
  const [category, setCategory] = React.useState('all');
  const handleClick = React.useCallback((category) => {
    setCategory(category);
  }, []);

  return (
    <div className="App">
      <Categories category={category} handleClick={handleClick} />
      <NewsList category={category} />
    </div>
  );
}

export default App;
