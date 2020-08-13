import React from 'react';

import Category from './Category';
import { categories } from '../data';

import './Categories.css';

const Categories = () => {
  return (
    <div className="Categories">
      {categories.map((category) => (
        <Category key={category.name}>{category.text}</Category>
      ))}
    </div>
  );
};

export default Categories;
