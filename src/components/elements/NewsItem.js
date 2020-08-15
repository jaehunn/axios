import React from 'react';

import './NewsItem.css';
import alterImg from '../../images/alterImg.jpg';

const NewsItem = ({
  article: { title, description: desc, url, urlToImage: imgUrl },
}) => {
  const thumbnail = (
    <div className="thumbnail">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={imgUrl || alterImg} alt="thumbnail" />
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
