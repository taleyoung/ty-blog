import { string } from "prop-types";

export interface Store {
  counter: CounterState;
  article: ArticleState;
  tag: TagState;
}

export interface CounterState {
  number: number;
}
interface AllTagsItem {
  id: string;
  name: string;
}

interface TagState {
  allTags: Array<AllTagsItem>;
}

export interface ArticleState {
  articleList: ArticleList;
  articleDetail: ArticleDetail;
}

export interface ArticleList {
  total: number;
  data: Array<ArticleDetail>;
}

export interface ArticleDetail {
  id: number;
  title: string;
  category: string;
  content: string;
  updatedAt: string;
  tags?: Array<string>;
}
