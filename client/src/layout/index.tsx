import React, { SFC, ReactNode } from "react";
import Header from "./header";
import SideBar from "./sideBar";
import { Layout, Row, Col } from "antd";
import style from "./style.less";

const { Footer } = Layout;

export interface IProp {
  children: ReactNode;
}

const siderLayout = { xxl: 4, xl: 5, lg: 5, sm: 0, xs: 0 };
const contentLayout = { xxl: 15, xl: 15, lg: 15, sm: 24, xs: 24 };

const PageLayout: SFC<IProp> = props => {
  return (
    <Layout className={style.container}>
      <Header></Header>
      <Row className={style.wrapper}>
        <Col {...siderLayout}>
          <SideBar></SideBar>
        </Col>
        <Col {...contentLayout}>{props.children}</Col>
      </Row>
      <Footer>footer</Footer>
    </Layout>
  );
};

export default PageLayout;
