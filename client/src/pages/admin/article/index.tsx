import React, { SFC, useState, useEffect } from "react";
import { fetchArticleList } from "@redux/actions/article";
import BreadCrumb from "@components/BreadCrumb";
import style from "./style.less";
import { Input } from "antd";

const { TextArea } = Input;

const Article: SFC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);

  return (
    <div>
      <BreadCrumb list={["文章管理", "文章编辑"]}></BreadCrumb>
      <div className={style.wrap}>
        <div className={style.title}>标题</div>
        <Input
          placeholder="Basic usage"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <div className={style.title}>标签</div>
        <div className={style.title}>分类</div>
        <div className={style.title}>内容</div>
        <TextArea
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder="Controlled autosize"
          className={style.textArea}
        ></TextArea>
      </div>
    </div>
  );
};

export default Article;
