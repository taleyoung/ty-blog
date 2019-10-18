import React, { SFC } from "react";
import ArticleCard from "./card";
import style from "./style.less";

const Article: SFC = () => {
  return (
    <div>
      <div className={style.container}>
        <ArticleCard></ArticleCard>
        <ArticleCard></ArticleCard>
        <ArticleCard></ArticleCard>
      </div>
    </div>
  );
};

export default Article;
