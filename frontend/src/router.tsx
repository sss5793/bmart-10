import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home, Category, Search, Menu, Cart, Login, Register } from './pages';
import * as ROUTES from './constants/routes';

const Routes = [
  {
    path: ROUTES.HOME.path,
    component: Home,
  },
  {
    path: ROUTES.CATEGORY.path,
    component: Category,
  },
  {
    path: ROUTES.SEARCH.path,
    component: Search,
  },
  {
    path: ROUTES.MENU.path,
    component: Menu,
  },
  {
    path: ROUTES.CART.path,
    component: Cart,
  },
  {
    path: ROUTES.LOGIN.path,
    component: Login,
  },
  {
    path: ROUTES.REGISTER.path,
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
