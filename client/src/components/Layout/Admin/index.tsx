import React, { SFC, ReactNode } from "react";
import { Layout, Breadcrumb } from "antd";
import Sider from "./Sider";

const { Content } = Layout;

export interface Props {
  children: ReactNode;
}
const AdminLayout: SFC<Props> = props => (
  <Layout>
    <Sider></Sider>
    <Layout>
      {/* <Header>Header</Header> */}
      <Content>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>User</Breadcrumb.Item>
          <Breadcrumb.Item>Bill</Breadcrumb.Item>
        </Breadcrumb>
        {props.children}
        <div style={{ padding: 24, background: "#fff", minHeight: 500 }}>
          Bill is a cat.
        </div>
      </Content>
    </Layout>
  </Layout>
);
export default AdminLayout;
