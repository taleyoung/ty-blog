export interface Store {
  counter: Counter;
  article: Article;
}

export interface Counter {
  number: number;
}

export interface Article {
  articleList: Array<ArticleContent>;
}

export interface ArticleContent {
  title: string;
  content: string;
}
