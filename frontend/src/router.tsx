import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from 'react-router-dom';

import { Home, Category, Search, Menu, Cart, Login, Register } from './pages';

const Routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/category',
    component: Category,
  },
  {
    path: '/search',
    component: Search,
  },
  {
    path: '/menu',
    component: Menu,
  },
  {
    path: '/cart',
    component: Cart,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/register',
    component: Register,
  },
];

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        {Routes.map((item) => (
          <Route
            exact
            key={item.path}
            path={item.path}
            component={item.component}
          />
        ))}
        <Route path="*">Not found</Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
