import React, { SFC } from "react";
import { Layout, Menu, Icon } from "antd";
import { Link } from "react-router-dom";
import style from "./style.less";

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1445382_6tc0o0rwbfu.js"
});
export interface IProps {}

const Header: SFC<IProps> = () => (
  <div>
    <Layout>
      <div className={style.topBar}>
        <div className={style.logo}>Taleyoung's Blog</div>
        <div className={style.menu}>
          <Menu theme="light" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">
              <Link to="/app/home">
                <IconFont type="icon-qiu" style={{ fontSize: "24px" }} />
                首页
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/app/article">
                <IconFont type="icon-jilu" style={{ fontSize: "24px" }} />
                文章
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/app/project">
                <IconFont type="icon-lianxi" style={{ fontSize: "24px" }} />
                项目
              </Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/app/timeline">
                <IconFont type="icon-lubiao" style={{ fontSize: "24px" }} />
                时间线
              </Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to="/app/about">
                <IconFont type="icon-xiangji" style={{ fontSize: "24px" }} />
                关于我
              </Link>
            </Menu.Item>
          </Menu>
        </div>
      </div>
    </Layout>
  </div>
);

export default Header;
