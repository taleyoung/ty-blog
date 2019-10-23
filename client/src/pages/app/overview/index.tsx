import React, { SFC, useState, useEffect } from "react";
import { connect } from "react-redux";
import { Store } from "../../../types/store";
import Preview from "../../../components/Preview";
import style from "./style.less";

import { fetchArticleList } from "../../../redux/actions/article";

interface Props {
  articleList: Array<{ title: string; content: string }>;
  fetchArticleList: any;
}

const Overview: SFC<Props> = props => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      // const res = await getAllArticle();
      const res = await props.fetchArticleList();
      console.log("resVIEW", props);
      setArticles(res);
    };
    getArticles();
  }, []);

  return (
    <div className={style.container}>
      {articles.map((item, index) => (
        <Preview
          key={`${item.title}${index}`}
          title={item.title}
          content={item.content}
        ></Preview>
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
