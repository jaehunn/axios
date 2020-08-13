import React from 'react';
import NewsItem from './NewsItem';
import './NewsList.css';

const sampleData = {
  title: 'Title',
  desc: 'Description',
  url: 'https://google.com',
  imgUrl: 'https://via.placeholder.com/160',
};

const NewsList = () => {
  return (
    <div className="NewsList">
      <NewsItem article={sampleData} />
      <NewsItem article={sampleData} />
      <NewsItem article={sampleData} />
    </div>
  );
};

export default NewsList;
