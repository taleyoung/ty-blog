import React, { SFC } from "react";
import { Icon, Tag, Divider } from "antd";
import ArticleInfo from "../ArticleInfo";
import TagIcon from "../TagIcon";
import style from "./style.less";

const Preview: SFC = () => {
  return (
    <div>
      <div className={style.container}>
        <div className={style.desc}>
          <Icon type="heart" theme="twoTone" style={{ fontSize: "30px" }} />
          <div>24</div>
        </div>
        <div className={style.content}>
          <div className={style.title}>从Material Design到UI设计的思考</div>
          <div>
            说来惭愧，工作3年多，都没有认真的通读Material
            Design，只人云亦云的在某些工作案例中去学习它的操作方式。
            最近再读Material
            Design，感叹Google设计师的伟大。说来惭愧，工作3年多，都没有认真的通读Material
            Design，只人云亦云的在某些工作案例中去学习它的操作方式。
            最近再读Material Design，感叹Google设计师的伟大。
          </div>
          <ArticleInfo></ArticleInfo>
        </div>
      </div>
      <Divider></Divider>
    </div>
  );
};

export default Preview;
