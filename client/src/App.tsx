import React, { SFC } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import AppLayout from "./components/Layout/App";
import AdminLayout from "./components/Layout/Admin";

import Overview from "./pages/app/overview";
import Home from "./pages/app/home";
import Article from "./pages/app/article";
import TimeLine from "./pages/app/timeLine";
import About from "./pages/app/about";

import AdminOverview from "./pages/admin/overview";

const AppRoutes = (
  <Switch>
    <Route exact path="/" render={() => <Redirect to="/app/home" push />} />
    <Route path="/app/home" component={Home}></Route>
    <Route path="/app/overview" component={Overview}></Route>
    <Route path="/app/article/:id" component={Article}></Route>
    <Route path="/app/timeline" component={TimeLine}></Route>
    <Route path="/app/about" component={About}></Route>
  </Switch>
);

const AdminRoutes = (
  <Switch>
    <Route path="/admin/overview" component={AdminOverview}></Route>
  </Switch>
);

const App: SFC = () => (
  <Switch>
    <Route path="/app" component={AppLayout}>
      <AppLayout children={AppRoutes}></AppLayout>
    </Route>
    <Route path="/admin" component={AdminLayout}>
      <AdminLayout children={AdminRoutes}></AdminLayout>
    </Route>
  </Switch>
);

export default App;
