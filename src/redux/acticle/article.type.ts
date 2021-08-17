export const articleTypes = {
        FETCH_ARTICLE_START:'FETCH_ARTICLE_START',
        FETCH_ARTICLE_SUCCESS:'FETCH_ARTICLE_SUCCESS',
        FETCH_ARTICLE_FAILURE:'FETCH_ARTICLE_FAILURE'
}

export interface Article {
    id: string,
    createdAt:string,
    title:string,
    image:string,
    content:string
}

export type ArticlePayload = {
    articles:Article[]
}

export const defaultArticleState:ArticlePayload = {
    articles: []
}

export type ActionSuccess<T> = {
    type:string,
    payload: T
}

export type ActionFailure = {
    type:string,
    payload: {
        errorMessage:string
    }
}

export type ArticleAction = ActionSuccess<ArticlePayload> | ActionFailure