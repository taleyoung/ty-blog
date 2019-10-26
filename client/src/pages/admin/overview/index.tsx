import React, { SFC, useEffect } from "react";
import { connect } from "react-redux";
import Home from "@pages/app/home";
import { fetchArticleList } from "@redux/actions/article";
import { Store, ArticleContent } from "@src/types/store";
import { Table } from "antd";

interface Props {
  articleList: Array<ArticleContent>;
}

const columns = [
  {
    title: "id",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "标题",
    dataIndex: "title",
    key: "title"
  },
  {
    title: "内容",
    dataIndex: "content",
    key: "content"
  }
];

const Overview: SFC<Props> = props => {
  useEffect(() => {
    const fetch = async () => {
      await fetchArticleList();
    };
    fetch();
  });
  return (
    <div>
      <Table dataSource={props.articleList} columns={columns} />
      <Home></Home>
    </div>
  );
};

export default connect(
  (state: Store) => ({
    articleList: state.article.articleList
  }),
  {
    fetchArticleList
  }
)(Overview);
