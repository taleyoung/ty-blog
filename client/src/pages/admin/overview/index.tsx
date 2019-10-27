import React, { SFC, useState, useEffect } from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { Table } from "antd";
import { fetchArticleList, Action } from "@redux/actions/article";
import { Store, ArticleContent, ArticleList } from "@src/types/store";
import BreadCrumb from "@components/BreadCrumb";

interface Props {
  articleList: ArticleList;
  fetchArticleList: any;
}
interface ArticleListTable extends ArticleContent {
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
    // const fetch = async () => {
    //   const res = await props.fetchArticleList();
    //   let list: Array<ArticleListTable> = [];
    //   let total = res.total;
    //   res.data.forEach((item: any) => {
    //     list.push({
    //       ...item,
    //       key: item.id
    //     });
    //   });
    //   setArticle({ total, list });
    //   setLoading(false);
    // };
    const getArticles = async () => {
      await props.fetchArticleList();
      setLoading(false);
    };
    getArticles();
  }, []);

  useEffect(() => {
    console.log("data", data);
    let tableData: Array<ArticleListTable> = [];
    data.forEach(item => {
      tableData.push({
        ...item,
        key: JSON.stringify(item.id)
      });
    });
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
