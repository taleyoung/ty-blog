import React, { SFC } from "react";
import { Icon, Divider } from "antd";
import ArticleInfo from "../ArticleInfo";
import style from "./style.less";

interface Props {
  title: string;
  content: string;
  // onClick: () => void;
}

const Preview: SFC<Props> = ({ title, content }) => {
  const tags = ["111", "222", "333"];
  const archives = ["aaa", "bbb", "ccc"];
  return (
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
            time="2019-10-01"
            tags={tags}
            archives={archives}
          ></ArticleInfo>
        </div>
      </div>
      <Divider></Divider>
    </div>
  );
};

export default Preview;
