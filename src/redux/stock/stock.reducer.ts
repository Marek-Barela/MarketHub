import { getType } from 'typesafe-actions';
import { RootAction } from '../../redux/root-actions';
import { StockInterface } from '../stock/stock.model';
import { fetchListOfStocksRequest } from './stock.actions';

const initialState: StockInterface = {
	stockList: [],
	isLoading: true,
};

const stockReducer = (
	state: StockInterface = initialState,
	action: RootAction
): StockInterface => {
	const { type, payload } = action;
	switch (type) {
		case getType(fetchListOfStocksRequest.request): {
			return {
				...state,
				isLoading: true,
			};
		}
		case getType(fetchListOfStocksRequest.success): {
			console.log(payload);
			return {
				...state,
				isLoading: false,
				stockList: payload.bestMatches,
			};
		}
		case getType(fetchListOfStocksRequest.failure): {
			return {
				...state,
				isLoading: false,
			};
		}
		default: {
			return { ...state };
		}
	}
};

export default stockReducer;
