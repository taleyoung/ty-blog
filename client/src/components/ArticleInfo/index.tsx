import React, { SFC } from "react";
import { Tag, Divider } from "antd";
import TagIcon from "../TagIcon";
import style from "./style.less";

interface Props {
  time: string;
  tags: Array<string>;
  archives: Array<string>;
}

const ArticleInfo: SFC<Props> = ({ time, tags = [], archives = [] }) => {
  return (
    <div className={style.info}>
      <span className={style.date}>发布于 {time}</span>
      <TagIcon type="tag"></TagIcon>
      {tags.map(item => (
        <Tag color="orange" key={item}>
          {item}
        </Tag>
      ))}
      <Divider type="vertical"></Divider>
      <TagIcon type="container" />
      {archives.map(item => (
        <Tag color="orange" key={item}>
          {item}
        </Tag>
      ))}
    </div>
  );
};
export default ArticleInfo;
