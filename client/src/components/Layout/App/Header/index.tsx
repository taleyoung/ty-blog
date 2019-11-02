import React, { SFC } from "react";
import { Menu, Icon, Button } from "antd";
import { Link } from "react-router-dom";
import style from "./style.less";

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1445382_6tc0o0rwbfu.js"
});

const menuList = [
  {
    path: "/app/home",
    iconType: "icon-qiu",
    name: "首页"
  },
  {
    path: "/app/article",
    iconType: "icon-jilu",
    name: "文章"
  },
  {
    path: "/app/project",
    iconType: "icon-lianxi",
    name: "项目"
  },
  {
    path: "/app/timeline",
    iconType: "icon-lubiao",
    name: "时间线"
  },
  {
    path: "/app/about",
    iconType: "icon-xiangji",
    name: "关于我"
  }
];

export interface Props {}

const Header: SFC<Props> = props => {
  console.log("props", props);
  // const toAdmin = () => {
  //   props.history.push("/admin/overview");
  // };

  return (
    <div className={style.topBar}>
      <div className={style.logo}>Taleyoung的博客</div>
      <div className={style.menu}>
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={["首页"]}>
          {menuList.map(menu => (
            <Menu.Item key={menu.name}>
              <Link to={menu.path}>
                <IconFont type={menu.iconType} style={{ fontSize: "24px" }} />
                {menu.name}
              </Link>
            </Menu.Item>
          ))}
        </Menu>
        {/* <Button>Admin</Button> */}
      </div>
    </div>
  );
};

export default Header;
