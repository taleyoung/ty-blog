import React, { SFC, useEffect } from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";

import { Store, ArticleContent } from "../../../types/store";
import Preview from "../../../components/Preview";
import { fetchArticleList, Action } from "../../../redux/actions/article";
import style from "./style.less";

interface Props {
  articleList: Array<ArticleContent>;
  fetchArticleList: any;
}

const Overview: SFC<Props & RouteComponentProps> = props => {
  useEffect(() => {
    const getArticles = async () => {
      await props.fetchArticleList();
    };
    getArticles();
  }, []);

  const toArticleDetail = (id: number) => {
    props.history.push(`/app/article/${id}`);
  };

  return (
    <div className={style.container}>
      {props.articleList.map((item, index) => (
        <div
          key={`${item.title}${index}`}
          onClick={() => toArticleDetail(item.id)}
        >
          <Preview title={item.title} content={item.content}></Preview>
        </div>
      ))}
    </div>
  );
};

export default connect(
  (state: Store) => ({
    articleList: state.article.articleList
  }),
  { fetchArticleList }
)(Overview);
