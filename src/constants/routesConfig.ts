import { RouteComponentProps } from 'react-router-dom';
import CounterPage from '../containers/CounterPage';
import HomePage from '../containers/HomePage';
// import StyleDemoPage from '../containers/StyleDemoPage';
// import PageEditor from '../containers/PageEditor';

export interface RouteProps extends RouteComponentProps {
  component?: any;
  path: string;
  exact?: boolean;
}

// 默认layout路由
export const defaultRoute: Array<any> = [
  {
    path: '/',
    exact: true,
    component: HomePage,
  },
];

// 无授权路由
export const siteRoute: Array<any> = [
  {
    path: '/counter',
    name: 'counter',
    exact: true,
    component: CounterPage,
  },
  {
    path: '/style',
    name: 'style',
    exact: true,
  },
  {
    path: '/editor',
    name: 'editor',
    exact: true,
  },
];
