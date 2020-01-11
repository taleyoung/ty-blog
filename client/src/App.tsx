import React, { SFC, Suspense, lazy } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
// import { TransitionGroup, CSSTransition } from "react-transition-group";
import Loading from "@components/Loading";
import "./style.less";

const AppLayout = lazy(() =>
  import(/* webpackChunkName: 'AppLayout'*/ "./components/Layout/App")
);
const AdminLayout = lazy(() =>
  import(/* webpackChunkName: 'AdminLayout'*/ "./components/Layout/Admin")
);

const Overview = lazy(() =>
  import(/* webpackChunkName: 'Overview'*/ "./pages/app/overview")
);
const Home = lazy(() =>
  import(/* webpackChunkName: 'Home'*/ "./pages/app/home")
);
const Article = lazy(() =>
  import(/* webpackChunkName: 'Article'*/ "./pages/app/article")
);
const TimeLine = lazy(() =>
  import(/* webpackChunkName: 'TimeLine'*/ "./pages/app/timeLine")
);
const About = lazy(() =>
  import(/* webpackChunkName: 'About'*/ "./pages/app/about")
);
const AdminOverview = lazy(() =>
  import(/* webpackChunkName: 'AdminOverview'*/ "./pages/admin/overview")
);
const AdminArticle = lazy(() =>
  import(/* webpackChunkName: 'AdminArticle'*/ "./pages/admin/article")
);

// const AppRoutes = () =>
//   withRouter(({ location }) => (
//     <TransitionGroup>
//       <CSSTransition timeout={5000} classNames={"fade"} key={location.pathname}>
//         <Switch>
//           <Route
//             exact
//             path="/"
//             render={() => <Redirect to="/app/home" push />}
//           />
//           <Route path="/app/home" component={Home}></Route>
//           <Route path="/app/overview" component={Overview}></Route>
//           <Route path="/app/article/:id" component={Article}></Route>
//           <Route path="/app/timeline" component={TimeLine}></Route>
//           <Route path="/app/about" component={About}></Route>
//         </Switch>
//       </CSSTransition>
//     </TransitionGroup>
//   ));

const AppRoutes = (
  <Switch>
    <Route exact path="/" render={() => <Redirect to="/app/article" push />} />
    <Route path="/app/home" component={Home}></Route>
    <Route exact path="/app/article" component={Overview}></Route>
    <Route path="/app/article/:id" component={Article}></Route>
    <Route path="/app/timeline" component={TimeLine}></Route>
    <Route path="/app/about" component={About}></Route>
  </Switch>
);

const AdminRoutes = (
  <Switch>
    <Route exact path="/admin/article" component={AdminOverview}></Route>
    <Route exact path="/admin/article/:id" component={AdminArticle}></Route>
    <Route exact path="/admin/article/add" component={AdminArticle}></Route>
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
