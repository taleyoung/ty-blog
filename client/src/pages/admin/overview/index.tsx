import React, { SFC, useState, useEffect } from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { Table } from "antd";
import { fetchArticleList, Action } from "@redux/actions/article";
import { Store, ArticleContent } from "@src/types/store";
import BreadCrumb from "@components/BreadCrumb";

interface Props {
  articleList: Array<ArticleContent>;
  fetchArticleList: any;
}
const list: Object[] = [];
const Overview: SFC<Props & RouteComponentProps> = props => {
  const [loading, setLoading] = useState(true);

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
    },
    {
      title: "更新时间",
      dataIndex: "updatedAt",
      key: "updatedAt"
    },
    {
      title: "编辑",
      dataIndex: "edit",
      key: "edit",
      render: (text: any, data: any) => (
        <a onClick={() => toArticle(text, data)}>编辑</a>
      )
    }
  ];

  const toArticle = (a: any, item: any) => {
    props.history.push(`/admin/article/${item.id}`);
  };

  useEffect(() => {
    const fetch = async () => {
      const res = await props.fetchArticleList();
      res.forEach((item: { [key: string]: string | number }) => {
        list.push({
          id: item.id,
          title: item.title,
          content: item.content,
          updatedAt: item.updatedAt,
          key: item.id
        });
      });
      // setList(resList);
      setLoading(false);
    };
    fetch();
  }, []);

  return (
    <div>
      <BreadCrumb list={["文章管理", "文章列表"]}></BreadCrumb>
      <Table dataSource={list} columns={columns} loading={loading} />
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
