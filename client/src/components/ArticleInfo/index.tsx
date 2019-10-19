import React from "react";
import { Tag, Divider } from "antd";
import TagIcon from "../TagIcon";
import style from "./style.less";

const ArticleInfo = () => {
  return (
    <div className={style.info}>
      <span className={style.date}>发布于 2019-10-28</span>
      <TagIcon type="tag"></TagIcon>
      <Tag color="orange">nodejs开发</Tag>
      <Tag color="blue">js基础</Tag>
      <Divider type="vertical"></Divider>
      <TagIcon type="container" />
      <Tag color="magenta">magenta</Tag>
    </div>
  );
};
export default ArticleInfo;
