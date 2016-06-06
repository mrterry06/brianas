import { App } from './app/app';
import Counter from './counter/counter';
import { Home } from './home/home';


export const routes = {
  path: '/',
  component: App,
  childRoutes: [
    {
      indexRoute: {
        component: Home
      }
    },
    {
      path: '/counter',
      component: Counter
    }
  ]
};
