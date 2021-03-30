import { createAction, createAsyncAction } from 'typesafe-actions';
import { ListOfStocksResponse } from './stock.model';

export const fetchListOfStocks = createAction(
	'stock/FETCH_LIST_OF_STOCS',
	(action: any) => {
		return (symbol: string) => action(symbol);
	}
);

export const fetchListOfStocksRequest = createAsyncAction(
	'stock/FETCH_LIST_OF_STOCS_REQUEST',
	'stock/FETCH_LIST_OF_STOCS_SUCCESS',
	'stock/FETCH_LIST_OF_STOCS_FAILED'
)<undefined, ListOfStocksResponse[], Error>();

export const saveCurrentStockDetails = createAction(
	'stock/SAVE_CURRENT_STOCK_DETAILS',
	(action) => (name: string, currency: string) => action({ name, currency })
);
