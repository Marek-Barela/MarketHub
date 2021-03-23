import * as api from './graph-api';
import {
	fetchStockDailyData,
	fetchStockDailyDataRequest,
} from './graph-actions';
import { all, call, Effect, put, takeLatest } from 'redux-saga/effects';
import { getType } from 'typesafe-actions';
import { GraphInterface } from './graph-model';

export function* handleFetchDailyStockData(effect: Effect) {
	const { payload } = effect;
	try {
		yield put(fetchStockDailyDataRequest.request());
		const response: GraphInterface[] = yield call(
			api.getStockDailyData,
			payload
		);

		yield put(fetchStockDailyDataRequest.success(response));
	} catch (err) {
		yield put(fetchStockDailyDataRequest.failure(err));
	}
}

export function* graphSaga() {
	yield all([
		takeLatest(getType(fetchStockDailyData), handleFetchDailyStockData),
	]);
}
