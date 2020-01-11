import React, { SFC, useState, useEffect } from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { Input, Button, Tag, Modal } from "antd";

import {
  fetchArticleDetail,
  updateArticle,
  addArticle
} from "@redux/actions/article";
import { fetchAllTag } from "@redux/actions/tag";
import { Store, ArticleDetail, AllTagsItem } from "@src/types/store";
import myApi from "@utils/myApi";
import BreadCrumb from "@components/BreadCrumb";
import style from "./style.less";

const { TextArea } = Input;

interface Props {
  article: ArticleDetail;
  allTags: Array<AllTagsItem>;
  match: { params: { id: string } };
  fetchArticleDetail: typeof fetchArticleDetail;
  updateArticle: typeof updateArticle;
  addArticle: typeof addArticle;
  fetchAllTag: typeof fetchAllTag;
}

const Article: SFC<Props & RouteComponentProps> = props => {
  const {
    article,
    match: { params }
  } = props;
  const id = parseInt(params.id);
  const isNew: boolean = id ? false : true;

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [tags, setTags] = useState<Array<string>>([]);
  const [initTag, setInitTag] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [newTag, setNewTag] = useState<string>("");
  const [modal, setModal] = useState<boolean>(false);
  const [cate, setCate] = useState<string>();

  useEffect(() => {
    const fetch = async () => {
      await props.fetchArticleDetail(id);
      await props.fetchAllTag();
    };
    fetch();
  }, []);

  useEffect(() => {
    setTitle(article.title);
    setContent(article.content);
    setTags(article.tags);
    setCate(article.category);
  }, [article]);

  const submitChange = async () => {
    setLoading(true);
    const data = {
      title,
      content,
      cate,
      tag: initTag
    };
    isNew ? await props.addArticle(data) : await props.updateArticle(id, data);
    setLoading(false);
  };

  const addTag = async () => {
    const res = await myApi("tag", "post", {
      tagName: newTag,
      articleId: article.id
    });
    if (res) {
      setModal(false);
    }
  };

  return (
    <div>
      <BreadCrumb list={["文章管理", "文章编辑"]}></BreadCrumb>
      <div className={style.wrap}>
        <div className={style.title}>标题</div>
        <Input value={title} onChange={e => setTitle(e.target.value)} />
        <div className="cate">分类</div>
        <Input value={cate} onChange={e => setCate(e.target.value)} />
        {isNew ? (
          <>
            {" "}
            <div className="tag">初始标签</div>,
            <Input value={initTag} onChange={e => setInitTag(e.target.value)} />
          </>
        ) : (
          <>
            {" "}
            <div className={style.title}>已选标签</div>,
            <div className={style.tag}>
              {tags &&
                tags.map(tag => (
                  <Tag key={tag} color="blue">
                    {tag}
                  </Tag>
                ))}
              <Button icon="plus" size="small" onClick={() => setModal(true)}>
                添加书签
              </Button>
              <Modal
                title="添加书签"
                visible={modal}
                onOk={() => addTag()}
                onCancel={() => setModal(false)}
                confirmLoading={loading}
              >
                <Input
                  value={newTag}
                  onChange={e => setNewTag(e.target.value)}
                ></Input>
              </Modal>
            </div>
          </>
        )}
        <div className="title">全部标签</div>
        {props.allTags
          ? props.allTags.map(tag => (
              <Tag key={tag.id} color="green">
                {tag.name}
              </Tag>
            ))
          : ""}
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
    article: state.article.articleDetail,
    allTags: state.tag.allTags
  }),
  {
    fetchArticleDetail,
    updateArticle,
    addArticle,
    fetchAllTag
  }
)(Article);
