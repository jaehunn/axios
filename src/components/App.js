import React from 'react';
import axios from 'axios';
import NewsList from './NewsList';

function App() {
  const [data, setData] = React.useState(null);
  const handleClick = async () => {
    try {
      const { data } = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=kr&apiKey=021be107ec8e4910b929d7a25db26080',
      );

      setData(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="App">
      <NewsList />
    </div>
  );
}

export default App;
