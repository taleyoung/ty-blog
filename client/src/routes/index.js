// @ts-nocheck
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import routes from "./config";

const Routes = () => {
  let routeArr = [];
  const renderRoute = routes => {
    console.log("routeArr", routeArr);
    routes.forEach(item => {
      const Component = item.component
        ? item.component
        : renderRoute(item.subs);
      const RouteItem = <Route path={item.path} component={Component}></Route>;
      routeArr.push(RouteItem);
    });
    return routeArr;
  };
  return <Switch>{renderRoute(routes)}</Switch>;
};

export default Routes;
