import {
  defaultArticleState,
  ArticleAction,
  ArticlePayload,
  articleTypes,
  sortTypes,
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
    case articleTypes.SORT_ARTICLES:
      action = action as ArticleAction<string>;
      return {
        ...state,
        articles: state.articles.sort((a,b) => action.payload === sortTypes.UP ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title))
      }  
    default:
      return state;
  }
};

export default articleReducer;
