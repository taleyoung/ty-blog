import React, { SFC, useEffect } from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { Pagination } from "antd";

import { Store, ArticleList } from "../../../types/store";
import Preview from "../../../components/Preview";
import { fetchArticleList, Action } from "../../../redux/actions/article";
import style from "./style.less";

interface Props {
  articleList: ArticleList;
  fetchArticleList: any;
}

const Overview: SFC<Props & RouteComponentProps> = props => {
  const { articleList } = props;
  const { total, data } = articleList;
  console.log("props", props);
  useEffect(() => {
    const getArticles = async () => {
      await props.fetchArticleList();
    };
    getArticles();
  }, []);

  const toArticleDetail = (id: number) => {
    props.history.push(`/app/article/${id}`);
  };

  const pageChange = async (page: number) => {
    console.log("page", page);
    await props.fetchArticleList(page);
  };

  return (
    <div className={style.container}>
      {data.map((item, index) => (
        <div
          key={`${item.title}${index}`}
          onClick={() => toArticleDetail(item.id)}
        >
          <Preview
            title={item.title}
            content={item.content}
            tags={item.tags}
            time={item.updatedAt}
          ></Preview>
        </div>
      ))}
      <Pagination
        pageSize={10}
        defaultCurrent={1}
        total={total}
        onChange={page => pageChange(page)}
      />
    </div>
  );
};

export default connect(
  (state: Store) => ({
    articleList: state.article.articleList
  }),
  { fetchArticleList }
)(Overview);
