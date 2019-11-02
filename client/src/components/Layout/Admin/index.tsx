import React, { SFC, ReactNode } from "react";
import { Layout } from "antd";
import Sider from "./Sider";
import style from "./style.less";

const { Content } = Layout;

export interface Props {
  children: ReactNode;
}
const AdminLayout: SFC<Props> = props => (
  <Layout>
    <Sider></Sider>
    <Layout>
      <Content className={style.content}>{props.children}</Content>
    </Layout>
  </Layout>
);
export default AdminLayout;
