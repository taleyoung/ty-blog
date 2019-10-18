import React, { SFC, ReactNode } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Routes from "./routes/index.js";
import { Layout } from "antd";
import Header from "./components/header";
import SideBar from "./components/sideBar";
import Home from "./pages/home";
import Article from "./pages/article";
import About from "./pages/about";

const { Sider, Content, Footer } = Layout;

const App: SFC = () => {
  return (
    <Layout>
      <Header></Header>
      <Layout>
        <Sider>
          <SideBar></SideBar>
        </Sider>
        <Content>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Redirect to="/app/home" push />}
            />
            <Route path="/app/home" component={Home}></Route>
            <Route path="/app/article" component={Article}></Route>
            <Route path="/app/about" component={About}></Route>
          </Switch>
          {/* <Routes></Routes> */}
        </Content>
      </Layout>

      <Footer>footer</Footer>
    </Layout>
  );
};

export default App;
