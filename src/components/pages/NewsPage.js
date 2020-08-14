import React from 'react';
import Categories from '../elements/Categories';
import NewsList from '../elements/NewsList';

const NewsPage = ({ match: { params } }) => {
  const category = params.category || 'all';

  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;
