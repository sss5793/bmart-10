import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { Home, Category, Search, Menu, Cart, Login, Register } from "./pages";
import * as ROUTES from "./constants/routes";

type routeParams = {
  history?: any;
  location?: any;
  path?: any;
};

type route = {
  path: string;
  component: (props: routeParams) => JSX.Element;
};

const NotFound = () => <div>Not found</div>;

const Routes: Array<route> = [
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
];

const RouteIf = ({ component: Component, ...rest }: route) => {
  // console.log(rest);
  return (
    <Route
      exact
      path={rest.path}
      render={() => {
        const token = localStorage.getItem("token");
        // console.log(token);
        if (token) {
          return <Component />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTES.LOGIN.path} component={Login} />
        <Route
          exact
          path={`${ROUTES.CATEGORY.path}/:mainCategory/:subCategory`}
          component={Category}
        />
        <Route
          exact
          path={`${ROUTES.CATEGORY.path}/:mainCategory`}
          component={Category}
        />
        <Route exact path={ROUTES.REGISTER.path} component={Register} />
        {Routes.map((item: route) => (
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
