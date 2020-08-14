import React from 'react';
import axios from 'axios';

import NewsItem from './NewsItem';

import { usePromise } from '../../utils';

import './NewsList.css';

const NewsList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;

    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=021be107ec8e4910b929d7a25db26080`,
    );
  }, [category]);

  if (loading) return <div className="NewsList">Loading...</div>;
  if (!response) return null;
  if (error) return <div className="NewsList">Error!</div>;

  const {
    data: { articles },
  } = response;

  return (
    <div className="NewsList">
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
