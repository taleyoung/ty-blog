export interface Store {
  counter: Counter;
  article: Article;
}

export interface Counter {
  number: number;
}

export interface Article {
  articleList: Array<ArticleContent>;
  article: ArticleContent;
}

export interface ArticleContent {
  id: number;
  title: string;
  content: string;
  updatedAt: string;
  tags: Array<string>;
}
