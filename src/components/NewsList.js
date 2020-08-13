import React from 'react';

import NewsItem from './NewsItem';
import './NewsList.css';
import axios from 'axios';

const sampleData = {
  title: 'Title',
  desc: 'Description',
  url: 'https://google.com',
  imgUrl: 'https://via.placeholder.com/160',
};

const NewsList = () => {
  const [articles, setArticles] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  React.useEffect(() => {
    const loadData = async () => {
      setLoading(true);

      try {
        const { data } = await axios.get(
          'https://newsapi.org/v2/top-headlines?country=kr&apiKey=021be107ec8e4910b929d7a25db26080',
        );

        setArticles(data);
      } catch (e) {
        console.log(e);
      }

      setLoading(false);
    };

    loadData();
  }, []);

  if (loading) return <div className="NewsList">Loading...</div>;
  if (!articles) return null;

  return (
    <div className="NewsList">
      <NewsItem article={sampleData} />
      <NewsItem article={sampleData} />
      <NewsItem article={sampleData} />
    </div>
  );
};

export default NewsList;
