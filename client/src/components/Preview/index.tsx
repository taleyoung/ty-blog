import React, { SFC } from "react";
import { Icon, Divider } from "antd";
import ArticleInfo from "../ArticleInfo";
import style from "./style.less";

interface Props {
  id: number;
  title: string;
  content: string;
  time: string;
  tags?: Array<string>;
  toDetail: (id: number) => void;
}

const Preview: SFC<Props> = ({ id, title, content, tags, time, toDetail }) => (
  <div>
    <div className={style.container}>
      <div className={style.desc}>
        <Icon type="heart" theme="twoTone" style={{ fontSize: "30px" }} />
        <div>24</div>
      </div>
      <div className={style.content}>
        <div className={style.title} onClick={() => toDetail(id)}>
          {title}
        </div>
        <div>
          {content} <a onClick={() => toDetail(id)}>查看全文</a>
        </div>
        <ArticleInfo
          time={time}
          tags={tags}
          archives={["aa", "bb"]}
        ></ArticleInfo>
      </div>
    </div>
  </div>
);

export default Preview;
