import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from 'react-router-dom';

import { Home, Category, Search } from './pages';

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
