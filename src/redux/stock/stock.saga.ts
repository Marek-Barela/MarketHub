import * as api from './stock.api';
import { fetchListOfStocks, fetchListOfStocksRequest } from './stock.actions';
import { all, call, Effect, put, takeLatest } from 'redux-saga/effects';
import { getType } from 'typesafe-actions';
import { ListOfStocksResponse } from './stock.model';

export function* handleFetchListOfStocks(effect: Effect) {
	const { payload } = effect;
	try {
		yield put(fetchListOfStocksRequest.request());
		const response: ListOfStocksResponse[] = yield call(
			api.getListOfStocks,
			payload
		);

		yield put(fetchListOfStocksRequest.success(response));
	} catch (err) {
		yield put(fetchListOfStocksRequest.failure(err));
	}
}

export function* stockSaga() {
	yield all([takeLatest(getType(fetchListOfStocks), handleFetchListOfStocks)]);
}
