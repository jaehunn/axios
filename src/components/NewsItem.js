import React from 'react';

import './NewsItem.css';

const NewsItem = ({
  article: { title, description: desc, url, urlToImage: imgUrl },
}) => {
  const thumbnail = (
    <div className="thumbnail">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={imgUrl} alt="thumbnail" />
      </a>
    </div>
  );

  const contents = (
    <div className="contents">
      <h2>
        <a href={url} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </h2>
      <p>{desc}</p>
    </div>
  );

  return (
    <div className="NewsItem">
      {thumbnail}
      {contents}
    </div>
  );
};

export default NewsItem;
