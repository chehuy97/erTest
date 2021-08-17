import { articleTypes, ActionSuccess, ActionFailure,ArticlePayload, Article } from './article.type'

export const fetchArticles = () => {
    return {
        type: articleTypes.FETCH_ARTICLE_START
    }
}

export const fetchArticlesSuccess = (articles:Article[]):ActionSuccess<ArticlePayload> => {
    return {
        type: articleTypes.FETCH_ARTICLE_SUCCESS,
        payload:{
            articles: articles
        }
    }
}

export const fetchArticleFailure = (msg:string):ActionFailure => {
    return {
        type: articleTypes.FETCH_ARTICLE_FAILURE,
        payload: {
            errorMessage: msg
        }
    }
}