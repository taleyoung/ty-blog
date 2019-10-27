import React, { SFC, useState, useEffect } from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { Table } from "antd";
import { fetchArticleList } from "@redux/actions/article";
import { Store, ArticleDetail, ArticleList } from "@src/types/store";
import BreadCrumb from "@components/BreadCrumb";

interface Props {
  articleList: ArticleList;
  fetchArticleList: typeof fetchArticleList;
}
interface ArticleListTable extends ArticleDetail {
  key: string;
}
const Overview: SFC<Props & RouteComponentProps> = props => {
  const [loading, setLoading] = useState(true);
  const [tableData, setData] = useState([]);
  const { articleList } = props;
  const { total, data } = articleList;

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
      title: "标签",
      dataIndex: "tags",
      key: "tags"
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
      render: (text: any, record: any) => (
        <a onClick={() => toArticle(text, record)}>编辑</a>
      )
    }
  ];

  const toArticle = (a: any, item: any) => {
    props.history.push(`/admin/article/${item.id}`);
  };

  useEffect(() => {
    const getArticles = async () => {
      await props.fetchArticleList();
      setLoading(false);
    };
    getArticles();
  }, []);

  useEffect(() => {
    let tableData: Array<ArticleListTable> = data.map(item => ({
      ...item,
      key: JSON.stringify(item.id)
    }));
    setData(tableData);
  }, [data]);

  const pageChange = async (page: number) => {
    await props.fetchArticleList(page);
  };

  const pagination = {
    total: total,
    onChange: (page: number) => pageChange(page)
  };

  return (
    <div>
      <BreadCrumb list={["文章管理", "文章列表"]}></BreadCrumb>
      <Table
        dataSource={tableData}
        columns={columns}
        loading={loading}
        pagination={pagination}
      />
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
