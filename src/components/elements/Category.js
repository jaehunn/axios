import React from 'react';

import './Category.css';
import { NavLink } from 'react-router-dom';

const Category = ({ name, active, children }) => {
  return (
    /* TODO: NavLink className, active issue*/
    <li className="Category">
      <NavLink
        activeClassName={active}
        exact={name === 'all'}
        to={name === 'all' ? '/' : `/${name}`}
      >
        {children}
      </NavLink>
    </li>
  );
};

export default Category;
