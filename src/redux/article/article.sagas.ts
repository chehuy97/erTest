import { Article, ArticleAction, articleTypes } from "./article.type";
import { takeLatest, put, all, call } from "@redux-saga/core/effects";
import { getListArticles, getActicleDetail } from "../../services/api-services";
import { AxiosResponse } from "axios";
import { fetchArticlesSuccess, fetchArticleFailure, fetchArticleDetailSuccess } from "./article.action";

export function* fetchArticles(action:ArticleAction<{[key:string]:any}>) {
  try {
    const result: AxiosResponse<Article[]> = yield call(getListArticles, action.payload);
    yield put(fetchArticlesSuccess(result.data));
  } catch (err) {
    let msg = handleError(err)
    yield put(fetchArticleFailure(msg));
  }
}

export function* fetchArticleDetail(action:ArticleAction<string>) {
  try{
    const result:AxiosResponse<Article> = yield call(getActicleDetail,action.payload)
    yield put(fetchArticleDetailSuccess(result.data));
  }catch (err) {
    let msg = handleError(err)
    yield put(fetchArticleFailure(msg));
  }
}

export function* onArticlesStart() {
  yield takeLatest(articleTypes.FETCH_ARTICLE_START, fetchArticles);
}

export function* onArticleDetailStart() {
  yield takeLatest(articleTypes.FETCH_ARTICLE_DETAIL_START, fetchArticleDetail);
}

export function* articleSagas() {
  yield all([
    call(onArticlesStart),
    call(onArticleDetailStart)
  ]);
}

function handleError(error:any):string {
  let status = error.response.status as number
  let msg = ''
  switch(status){
    case 404:
      msg = 'Data not found'
      break
    case 500:
      msg = 'Server error'
      break
    default:
      msg = 'Cannot load data cause of unknown issue'    
  }
  return msg
}
