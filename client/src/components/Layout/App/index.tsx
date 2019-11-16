import React, { SFC, ReactNode } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import { Layout, Row, Col } from "antd";
import style from "./style.less";

const { Footer } = Layout;

export interface Props {
  children: ReactNode;
}

const siderLayout = { xxl: 6, xl: 6, lg: 6, sm: 0, xs: 0 };
const contentLayout = { xxl: 15, xl: 14, lg: 14, sm: 24, xs: 24 };

const AppLayout: SFC<Props> = props => {
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

export default AppLayout;
