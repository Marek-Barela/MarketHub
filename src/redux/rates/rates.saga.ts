import * as api from './rates.api';
import { fetchRatesData, fetchRatesDataRequest } from './rates.actions';
import { all, call, Effect, put, takeLatest } from 'redux-saga/effects';
import { getType } from 'typesafe-actions';
import { RatesInterface } from './rates.model';

export function* handleFetchRatesData(effect: Effect) {
	const { payload } = effect;
	try {
		yield put(fetchRatesDataRequest.request());
		const response: RatesInterface = yield call(api.getRatesData, payload);

		yield put(fetchRatesDataRequest.success(response));
	} catch (err) {
		yield put(fetchRatesDataRequest.failure(err));
	}
}

export function* ratesSaga() {
	yield all([takeLatest(getType(fetchRatesData), handleFetchRatesData)]);
}
