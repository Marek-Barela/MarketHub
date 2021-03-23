import { createAction, createAsyncAction } from 'typesafe-actions';
import { GraphInterface } from './graph-model';

export const fetchStockDailyData = createAction(
	'graph/FETCH_STOCK_DAILY_DATA',
	(action) => {
		return (symbol: String) => action(symbol);
	}
);

export const fetchStockDailyDataRequest = createAsyncAction(
	'graph/FETCH_STOCK_DAILY_DATA_REQUEST',
	'graph/FETCH_STOCK_DAILY_DATA_SUCCESS',
	'graph/FETCH_STOCK_DAILY_DATA_FAILED'
)<undefined, GraphInterface[], Error>();
