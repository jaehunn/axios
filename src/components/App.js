import React from 'react';

import { Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

function App() {
  return (
    <div className="App">
      <Route path="/:category?" component={NewsPage} /> {/* category or not */}
    </div>
  );
}

export default App;
