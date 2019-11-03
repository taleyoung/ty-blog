import React, { SFC, useState, useEffect } from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { Table, Popconfirm, Tag } from "antd";
import { fetchArticleList, deleteArticle } from "@redux/actions/article";
import { Store, ArticleDetail, ArticleList } from "@src/types/store";
import BreadCrumb from "@components/BreadCrumb";

interface Props {
  articleList: ArticleList;
  fetchArticleList: typeof fetchArticleList;
  deleteArticle: typeof deleteArticle;
}
interface ArticleListTable extends ArticleDetail {
  key: string;
}
const Overview: SFC<Props & RouteComponentProps> = props => {
  const [loading, setLoading] = useState(true);
  const [tableData, setData] = useState([]);
  const { articleList } = props;
  const { total, data = [] } = articleList;

  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id"
    },
    {
      title: "标题",
      dataIndex: "title",
      key: "title",
      width: "100px"
    },
    {
      title: "内容",
      dataIndex: "content",
      key: "content"
    },
    {
      title: "标签",
      dataIndex: "tags",
      key: "tags",
      width: "150px",
      render: (tags: Array<string>) =>
        tags.map(tag => (
          <Tag key={tag} color="blue">
            {tag}
          </Tag>
        ))
    },
    {
      title: "更新时间",
      dataIndex: "updatedAt",
      key: "updatedAt",
      width: "200px"
    },
    {
      title: "删除",
      dataIndex: "delete",
      key: "delete",
      width: "100px",
      render: (text: string, record: { id: number }) => (
        <Popconfirm
          title="真滴要删除这篇文章嘛"
          okText="删除"
          cancelText="取消"
          onConfirm={() => deleteArticle(record.id)}
        >
          <a>删除</a>
        </Popconfirm>
      )
    },
    {
      title: "编辑",
      dataIndex: "edit",
      key: "edit",
      width: "100px",
      render: (text: string, record: { id: number }) => (
        <a onClick={() => toArticle(record.id)}>编辑</a>
      )
    }
  ];

  const deleteArticle = async (id: number) => {
    setLoading(true);
    await props.deleteArticle(id);
    setLoading(false);
  };

  const toArticle = (id: number) => {
    props.history.push(`/admin/article/${id}`);
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
    fetchArticleList,
    deleteArticle
  }
)(Overview);
