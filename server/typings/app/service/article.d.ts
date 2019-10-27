interface ArticleScheme {
  id: string;
  title: string;
  content: string;
  updatedAt: string;
  tags?: Array<string>;
}
interface ArticlePageList {
  count: number;
  rows: Array<ArticleScheme>;
}

export { ArticleScheme, ArticlePageList };
