import React from 'react';

import NewsItem from './NewsItem';
import './NewsList.css';
import axios from 'axios';

const NewsList = ({ category }) => {
  const [articles, setArticles] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  React.useEffect(() => {
    const loadData = async () => {
      setLoading(true);

      try {
        const query = category === 'all' ? '' : `&category=${category}`;

        const {
          data: { articles },
        } = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=021be107ec8e4910b929d7a25db26080`,
        );

        setArticles(articles);
      } catch (e) {
        console.log(e);
      }

      setLoading(false);
    };

    loadData();
  }, [category]);

  if (loading) return <div className="NewsList">Loading...</div>;
  if (!articles) return null;

  return (
    <div className="NewsList">
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
