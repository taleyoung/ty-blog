import React, { SFC, useEffect, useState } from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { Pagination, Spin } from "antd";
import { Store, ArticleList } from "@src/types/store";
import Preview from "@components/Preview";
import { fetchArticleList } from "@redux/actions/article";
import style from "./style.less";

interface Props {
  articleList: ArticleList;
  fetchArticleList: typeof fetchArticleList;
}

const Overview: SFC<Props & RouteComponentProps> = props => {
  const [loading, setLoading] = useState(true);
  const { articleList } = props;
  const { total, data } = articleList;

  useEffect(() => {
    const getArticles = async () => {
      await props.fetchArticleList();
    };
    getArticles();
    setLoading(false);
  }, []);

  const toArticleDetail = (id: number) => {
    props.history.push(`/app/article/${id}`);
  };

  const pageChange = async (page: number) => {
    await props.fetchArticleList(page);
  };

  return (
    <div className={style.container}>
      <Spin spinning={loading}>
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
      </Spin>
    </div>
  );
};

export default connect(
  (state: Store) => ({
    articleList: state.article.articleList
  }),
  { fetchArticleList }
)(Overview);
