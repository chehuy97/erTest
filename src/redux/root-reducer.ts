import {combineReducers} from 'redux'
import { useSelector as useReduxSelector, TypedUseSelectorHook } from 'react-redux'
import { ArticlePayload } from './article/article.type'
import articleReducer from './article/article.reducer'

type AppSate = {
    article: ArticlePayload
}

const rootReducer= combineReducers<AppSate>({
    article: articleReducer
})

export const useSelector:TypedUseSelectorHook<ReturnType<typeof rootReducer>> = useReduxSelector 

export default rootReducer