import React from 'react';

import Category from './Category';
import { categoryDatas } from '../../data';

import './Categories.css';

const Categories = ({ category }) => {
  return (
    <ul className="Categories">
      {categoryDatas.map((categoryData) => (
        <Category
          key={categoryData.name}
          name={categoryData.name}
          active={category === categoryData.name}
        >
          {categoryData.text}
        </Category>
      ))}
    </ul>
  );
};

export default Categories;
