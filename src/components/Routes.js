import React from 'react';
import { Route } from 'react-router-dom';
import { routes } from '../data/routes';
import NewsPage from './pages/NewsPage';

const Routes = () => {
  return <Route exact path={routes.home} component={NewsPage} />;
};

export default Routes;
