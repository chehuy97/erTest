import { articleTypes, Article, ArticleAction } from './article.type'

export const fetchArticles = (requestParams:{[key:string]:any}):ArticleAction<{[key:string]:any}> => {
    return {
        type: articleTypes.FETCH_ARTICLE_START,
        payload:requestParams
    }
}

export const fetchArticlesSuccess = (articles:Article[]):ArticleAction<Article[]> => {
    return {
        type: articleTypes.FETCH_ARTICLE_SUCCESS,
        payload: articles
    }
}

export const fetchArticleFailure = (msg:string):ArticleAction<string> => {
    return {
        type: articleTypes.FETCH_ARTICLE_FAILURE,
        payload: msg
    }
}

export const fetchArticleDetail = (id:string):ArticleAction<string> => {
    return {
        type: articleTypes.FETCH_ARTICLE_DETAIL_START,
        payload: id
    }
}

export const fetchArticleDetailSuccess = (articleDetail: Article):ArticleAction<Article> => {
    return {
        type: articleTypes.FETCH_ARTICLE_DETAIL_SUCCESS,
        payload: articleDetail
    }
}