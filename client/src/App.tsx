import React, { SFC } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Routes from "./routes/index.js";
import Overview from "./pages/app/overview";
import Home from "./pages/app/home";
import Article from "./pages/app/article";
import TimeLine from "./pages/app/timeLine";
import About from "./pages/app/about";
import PageLayout from "./layout";

const App: SFC = () => {
  const Routes = (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/app/home" push />} />
      <Route path="/app/home" component={Home}></Route>
      <Route path="/app/overview" component={Overview}></Route>
      <Route path="/app/article" component={Article}></Route>
      <Route path="/app/timeline" component={TimeLine}></Route>
      <Route path="/app/about" component={About}></Route>
    </Switch>
  );
  return <PageLayout children={Routes}></PageLayout>;
};

export default App;
