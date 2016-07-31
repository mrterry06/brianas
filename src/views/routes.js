import App from './app';
import CounterPage from './pages/counter';
import HomePage from './pages/home';


export const routes = {
  path: '/',
  component: App,
  childRoutes: [
    {
      indexRoute: {
        component: HomePage
      }
    },
    {
      path: '/counter',
      component: CounterPage
    }
  ]
};
