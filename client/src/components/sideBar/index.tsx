import React, { SFC } from "react";
import { Avatar, Divider, Tag } from "antd";
import style from "./style.less";

export interface IProp {}

const SideBar: SFC<IProp> = () => {
  return (
    <div className={style.container}>
      <Avatar size="large"></Avatar>
      <div className={style.title}>taleyoung</div>
      <div className={style.subTitle}>js爱好者</div>
      <Divider>标签</Divider>
      <div className={style.tagList}>
        <Tag color="red">标签</Tag>
        <Tag color="red">标签</Tag>
        <Tag color="red">标签</Tag>
      </div>
    </div>
  );
};

export default SideBar;
