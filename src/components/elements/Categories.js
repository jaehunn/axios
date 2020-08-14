import React from 'react';

import Category from './Category';
import { categoryDatas } from '../data';

import './Categories.css';

const Categories = ({ category, handleClick }) => {
  return (
    <div className="Categories">
      {categoryDatas.map((categoryData) => (
        <Category
          key={categoryData.name}
          name={categoryData.name}
          active={category === categoryData.name}
          handleClick={handleClick}
        >
          {categoryData.text}
        </Category>
      ))}
    </div>
  );
};

export default Categories;
