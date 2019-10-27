import React, { SFC, useEffect } from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";

import { fetchArticleDetail } from "@redux/actions/article";
import { Store, ArticleDetail } from "@src/types/store";
import ArticleInfo from "@components/ArticleInfo";
import style from "./style.less";

interface Props {
  article: ArticleDetail;
  match: { params: { id: string } };
  fetchArticleDetail: typeof fetchArticleDetail;
}

const Article: SFC<Props & RouteComponentProps> = props => {
  const { title, content, updatedAt, tags = [] } = props.article;
  const { params } = props.match;

  useEffect(() => {
    const getArticle = async () => {
      await props.fetchArticleDetail(parseInt(params.id));
    };
    getArticle();
  }, []);

  return (
    <div>
      <div className={style.container}>
        <div className={style.title}>{title}</div>
        <ArticleInfo
          time={updatedAt}
          tags={tags}
          archives={["33", "44"]}
        ></ArticleInfo>
        <div className={style.content}>{content}</div>
      </div>
    </div>
  );
};

export default connect(
  (state: Store) => ({
    article: state.article.articleDetail
  }),
  { fetchArticleDetail }
)(Article);
