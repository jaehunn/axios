import React from 'react';
import axios from 'axios';

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
      <div>
        <button onClick={handleClick}>Load</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} />}
    </div>
  );
}

export default App;
