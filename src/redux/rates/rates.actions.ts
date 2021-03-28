import { createAction, createAsyncAction } from 'typesafe-actions';
import { RatesInterface } from './rates.model';

export const fetchRatesData = createAction('rates/FETCH_RATES_DATA', (action) => {
	return (symbol: string) => action(symbol);
});

export const fetchRatesDataRequest = createAsyncAction(
	'rates/FETCH_RATES_DATA_REQUEST',
	'rates/FETCH_RATES_DATA_SUCCESS',
	'rates/FETCH_RATES_DATA_FAILED'
)<undefined, RatesInterface, Error>();
