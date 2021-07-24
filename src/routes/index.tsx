import NotFound from '@/pages/NotFound';
import AuthLayout from './layouts/AuthLayout';
import BasicLayout from './layouts/BasicLayout/index';
import HomePage from '../pages/HomePage';
import { createRoutes } from './utils';

const routesConfig = (app: any) => [
  {
    path: '/sign',
    title: '登录',
    indexRoute: '/sign/login',
    component: BasicLayout,
    childRoutes: [],
  },
  {
    path: '/',
    title: '系统中心',
    component: AuthLayout,
    indexRoute: '/dashboard',
    children: [HomePage(app), NotFound(app)],
  },
];

export default (app: any) => createRoutes(app, routesConfig);
