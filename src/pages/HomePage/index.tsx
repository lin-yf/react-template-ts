import React from 'react';
import { createRoute } from '../../routes/utils';
import Home from '../../components/Home/index';

const routesConfig = (app: any) => ({
  path: '/home',
  title: '',
  component: Home,
  exact: true,
});

export default (app: any) => createRoute(app, routesConfig);
