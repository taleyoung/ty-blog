import React, { SFC, useState, useEffect } from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { Input, Button } from "antd";

import { fetchArticleDetail, updateArticle } from "@redux/actions/article";
import { Store, ArticleDetail } from "@src/types/store";
import BreadCrumb from "@components/BreadCrumb";
import style from "./style.less";

const { TextArea } = Input;

interface Props {
  article: ArticleDetail;
  match: { params: { id: string } };
  fetchArticleDetail: typeof fetchArticleDetail;
  updateArticle: typeof updateArticle;
}

const Article: SFC<Props & RouteComponentProps> = props => {
  const {
    article,
    match: { params }
  } = props;
  const id = parseInt(params.id);

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetch = async () => {
      await props.fetchArticleDetail(id);
    };
    fetch();
  }, []);

  useEffect(() => {
    console.log("DIDUPDATE----article", article);
    setTitle(article.title);
    setContent(article.content);
  }, [article]);

  const submitChange = async () => {
    setLoading(true);
    const data = {
      title,
      content
    };
    console.log("data", data);
    const res = await props.updateArticle(id, data);
    console.log("res", res);
    // await props.fetchArticleDetail(id);
    setLoading(false);
  };

  return (
    <div>
      <BreadCrumb list={["文章管理", "文章编辑"]}></BreadCrumb>
      <div className={style.wrap}>
        <div className={style.title}>标题</div>
        <Input value={title} onChange={e => setTitle(e.target.value)} />
        <div className={style.title}>标签</div>
        <div className={style.title}>分类</div>
        <div className={style.title}>内容</div>
        <TextArea
          value={content}
          onChange={e => setContent(e.target.value)}
          className={style.textArea}
        ></TextArea>
        <Button type="primary" loading={loading} onClick={submitChange}>
          提交
        </Button>
      </div>
    </div>
  );
};

export default connect(
  (state: Store) => ({
    article: state.article.articleDetail
  }),
  {
    fetchArticleDetail,
    updateArticle
  }
)(Article);
