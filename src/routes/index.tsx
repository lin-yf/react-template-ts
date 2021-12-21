import React from 'react';
import { Provider } from 'react-redux';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import { configuredStore } from '../store';

const AppRoot = () => {
  const element = useRoutes(routes);
  const store = configuredStore();
  return (
    <Provider store={store}>
      <>{element}</>
    </Provider>
  );
};

export default AppRoot;
