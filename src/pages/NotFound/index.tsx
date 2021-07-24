import React from 'react';
import { createRoute } from '../../routes/utils';

function NotFound() {
  return <div>not found</div>;
}

const routesConfig = (app: any) => ({
  path: '/test',
  title: '',
  component: NotFound,
  exact: true,
});

export default (app: any) => createRoute(app, routesConfig);
