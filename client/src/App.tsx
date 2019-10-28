import React, { SFC, Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from "@components/Loading";

const AppLayout = lazy(() => import("./components/Layout/App"));
const AdminLayout = lazy(() => import("./components/Layout/Admin"));

const Overview = lazy(() => import("./pages/app/overview"));
const Home = lazy(() => import("./pages/app/home"));
const Article = lazy(() => import("./pages/app/article"));
const TimeLine = lazy(() => import("./pages/app/timeLine"));
const About = lazy(() => import("./pages/app/about"));

const AdminOverview = lazy(() => import("./pages/admin/overview"));
const AdminArticle = lazy(() => import("./pages/admin/article"));

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
    <Route path="/admin/article/:id" component={AdminArticle}></Route>
  </Switch>
);

const App: SFC = () => (
  <Suspense fallback={<Loading></Loading>}>
    <Switch>
      <Route path="/app" component={AppLayout}>
        <AppLayout children={AppRoutes}></AppLayout>
      </Route>
      <Route path="/admin" component={AdminLayout}>
        <AdminLayout children={AdminRoutes}></AdminLayout>
      </Route>
    </Switch>
  </Suspense>
);

export default App;
