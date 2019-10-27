export interface Store {
  counter: Counter;
  article: Article;
}

export interface Counter {
  number: number;
}

export interface Article {
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
  content: string;
  updatedAt: string;
  tags?: Array<string>;
}
