import {
  defaultArticleState,
  ArticleAction,
  ArticlePayload,
  articleTypes,
  Article,
} from "./article.type";

const articleReducer = (
  state = defaultArticleState,
  action: ArticleAction<any>
): ArticlePayload => {
  switch (action.type) {
    case articleTypes.FETCH_ARTICLE_SUCCESS:
      action = action as ArticleAction<Article[]>;
      return {
        ...state,
        articles: action.payload,
      };
    case articleTypes.FETCH_ARTICLE_DETAIL_SUCCESS:
      action = action as ArticleAction<Article>
      return {
        ...state,
        articleDetail: action.payload
      }
    case articleTypes.FETCH_ARTICLE_FAILURE:
      action = action as ArticleAction<string>;
      alert(action.payload);
      return state;
    default:
      return state;
  }
};

export default articleReducer;
