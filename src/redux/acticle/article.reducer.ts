import {defaultArticleState, ArticleAction, ArticlePayload, articleTypes, ActionSuccess, ActionFailure} from "./article.type";

const articleReducer = (state = defaultArticleState, action: ArticleAction): ArticlePayload => {
  switch (action.type) {
    case articleTypes.FETCH_ARTICLE_SUCCESS:
      action = action as ActionSuccess<ArticlePayload>
      return {
        ...state,
        articles: action.payload.articles
      }
    case articleTypes.FETCH_ARTICLE_FAILURE:
      action = action as ActionFailure
      alert(action.payload.errorMessage)
      return state  
    default:
      return state;
  }
};

export default articleReducer
