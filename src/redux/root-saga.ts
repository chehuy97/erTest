import { articleSagas } from './acticle/article.sagas'
import { all, call } from '@redux-saga/core/effects'

export default function* rootSaga() {
    yield all([
        call(articleSagas)
    ])
}