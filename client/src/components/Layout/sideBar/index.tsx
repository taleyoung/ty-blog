import React, { SFC } from "react";
import { Avatar, Divider, Tag } from "antd";
import style from "./style.less";
import avatar1 from "../../../assets/img/avatar1.jpeg";

export interface IProp {}

const SideBar: SFC<IProp> = () => {
  return (
    <div className={style.container}>
      <Avatar src={avatar1} size="large" className={style.avatar}></Avatar>
      <div className={style.title}>taleyoung</div>
      <div className={style.subTitle}>js爱好者</div>
      <Divider>热门文章</Divider>
      <div className={style.articleList}>
        <div>从Material Design到UI设计</div>
        <div>从Material Design到UI设计</div>
        <div>从Material Design到UI设计</div>
        <div>从Material Design到UI设计</div>
      </div>
      <Divider>标签</Divider>
      <div className={style.tagList}>
        <Tag color="red">算法</Tag>
        <Tag color="blue">frontend</Tag>
        <Tag color="orange">计算机网络</Tag>
      </div>
    </div>
  );
};

export default SideBar;
