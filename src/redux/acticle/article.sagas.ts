import { Article, articleTypes } from "./article.type";
import { takeLatest, put, all, call } from "@redux-saga/core/effects";
import { getListArticles } from "../../services/api-services";
import { AxiosResponse } from "axios";
import { fetchArticlesSuccess, fetchArticleFailure } from "./article.action";

export function* fetchArticles() {
  try {
    const result: AxiosResponse<Article[]> = yield call(getListArticles);
    yield put(fetchArticlesSuccess(result.data));
  } catch (err) {
    yield put(fetchArticleFailure("Cannot load articles from server"));
  }
}

export function* onArticlesStart() {
  yield takeLatest(articleTypes.FETCH_ARTICLE_START, fetchArticles);
}

export function* articleSagas() {
  yield all([call(onArticlesStart)]);
}
