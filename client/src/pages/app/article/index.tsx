import React, { SFC, useEffect } from "react";
import { connect } from "react-redux";
import { fetchArticleContent, Action } from "../../../redux/actions/article";
import { Store, ArticleContent } from "../../../types/store";
import { RouteComponentProps } from "react-router-dom";
import ArticleInfo from "../../../components/ArticleInfo";
import style from "./style.less";

interface Props {
  article: ArticleContent;
  match: { params: { id: string } };
  fetchArticleContent: any;
}

const Article: SFC<Props & RouteComponentProps> = props => {
  const { title, content } = props.article;

  useEffect(() => {
    const getArticle = async () => {
      await props.fetchArticleContent(id);
    };
    getArticle();
  }, []);

  console.log("props", props);
  const { id } = props.match.params;
  console.log("id", props.match.params);
  return (
    <div>
      <div className={style.container}>
        <div className={style.title}>{title}</div>
        <ArticleInfo
          time="2019-10-10"
          tags={["11", "22"]}
          archives={["33", "44"]}
        ></ArticleInfo>
        <div className={style.content}>{content}</div>
      </div>
    </div>
  );
};

export default connect(
  (state: Store) => ({
    article: state.article.article
  }),
  { fetchArticleContent }
)(Article);
