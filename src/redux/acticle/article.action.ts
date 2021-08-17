import { articleTypes, Article, ArticleAction } from './article.type'

export const fetchArticles = () => {
    return {
        type: articleTypes.FETCH_ARTICLE_START
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