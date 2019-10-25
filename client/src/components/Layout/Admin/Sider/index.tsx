import React, { useState, SFC } from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";

const { Sider } = Layout;
const { SubMenu } = Menu;

const AppSider: SFC = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={() => setCollapsed(!collapsed)}
    >
      <div style={{ height: "50px" }} />
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="user" />
              <span>文章管理</span>
            </span>
          }
        >
          <Menu.Item key="1">文章列表</Menu.Item>
          <Menu.Item key="2">新增文章</Menu.Item>
        </SubMenu>
        <Menu.Item key="3">
          <Icon type="file" />
          <span>标签管理</span>
        </Menu.Item>
        <Menu.Item key="4">
          <Icon type="file" />
          <span>分类管理</span>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default AppSider;
