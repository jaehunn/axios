import React from 'react';

import './Category.css';

const Category = ({ name, active, children, handleClick }) => {
  return (
    <div className="Category" onClick={() => handleClick(name)}>
      {children}
    </div>
  );
};

export default Category;
