import Home from '@/components/Home/index';
import { createRoute } from '@/routes/utils';

const routesConfig = (app: any) => ({
  path: '/home',
  title: '',
  component: Home,
  exact: true,
});

export default (app: any) => createRoute(app, routesConfig);
