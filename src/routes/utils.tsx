/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Switch, Route } from 'react-router';

export const createRoute = (app: any, routesConfig: any) => {
  const {
    component: Comp,
    path,
    indexRoute,
    title,
    exact,
    ...otherProps
  } = routesConfig(app);

  if (path && path !== '/') {
    // 为子路由增加parentPath
    if (otherProps.childRoutes && otherProps.childRoutes.length) {
      // otherProps.childRoutes.forEach((item) => {
      // });
    }
  }
  const routeProps = {
    key: path,
    // eslint-disable-next-line react/display-name
    render: (props: any) => {
      return <Comp routerData={otherProps} {...props} />;
    },
  };

  return <Route path={path} exact={!!exact} {...routeProps} />;
};

export const createRoutes = (app: any, routesConfig: any) => {
  const routes = routesConfig(app)
    .map((config: any) => createRoute(app, () => config))
    .reduce((p: any, n: any) => {
      if (n.length) {
        return [...p, ...n];
      }
      return p.concat(n);
    }, []);
  return <Switch>{routes}</Switch>;
};

export default createRoutes;
