import React, { SFC } from "react";
import { Icon, Divider } from "antd";
import ArticleInfo from "../ArticleInfo";
import style from "./style.less";

interface Props {
  title: string;
  content: string;
  time: string;
  tags?: Array<string>;
}

const Preview: SFC<Props> = ({ title, content, tags, time }) => (
  <div>
    <div className={style.container}>
      <div className={style.desc}>
        <Icon type="heart" theme="twoTone" style={{ fontSize: "30px" }} />
        <div>24</div>
      </div>
      <div className={style.content}>
        <div className={style.title}>{title}</div>
        <div>{content}</div>
        <ArticleInfo
          time={time}
          tags={tags}
          archives={["aa", "bb"]}
        ></ArticleInfo>
      </div>
    </div>
    <Divider></Divider>
  </div>
);

export default Preview;
