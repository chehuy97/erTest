export const articleTypes = {
  FETCH_ARTICLE_START: "FETCH_ARTICLE_START",
  FETCH_ARTICLE_SUCCESS: "FETCH_ARTICLE_SUCCESS",
  FETCH_ARTICLE_FAILURE: "FETCH_ARTICLE_FAILURE",
  FETCH_ARTICLE_DETAIL_START: "FETCH_ARTICLE_DETAIL_START",
  FETCH_ARTICLE_DETAIL_SUCCESS: "FETCH_ARTICLE_DETAIL_SUCCESS",
};

export interface Article {
  id: string;
  createdAt: string;
  title: string;
  image: string;
  content: string;
}

export type ArticlePayload = {
  articles: Article[];
  articleDetail: Article;
};

export const defaultArticleState: ArticlePayload = {
  articles: [],
  articleDetail: {
    id: "",
    createdAt: "",
    image: "",
    title: "",
    content: "",
  },
};

export type ArticleAction<T> = {
  type: string;
  payload: T;
};
