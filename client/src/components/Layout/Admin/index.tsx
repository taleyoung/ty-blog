import React, { SFC, ReactNode } from "react";
import { Layout } from "antd";
import Sider from "./Sider";

const { Header, Content, Footer } = Layout;

export interface Props {
  children: ReactNode;
}
const AdminLayout: SFC<Props> = props => (
  <Layout>
    <Sider>Sider</Sider>
    <Layout>
      <Header>Header</Header>
      <Content>{props.children}</Content>
    </Layout>
  </Layout>
);
export default AdminLayout;
