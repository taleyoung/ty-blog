export interface Store {
  counter: Counter;
  article: Article;
}

export interface Counter {
  number: number;
}

export interface Article {
  articleList: ArticleList;
  article: ArticleContent;
}

export interface ArticleList {
  total: number;
  data: Array<ArticleContent>;
}

export interface ArticleContent {
  id: number;
  title: string;
  content: string;
  updatedAt: string;
  tags?: Array<string>;
}
