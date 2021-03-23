import { getType } from 'typesafe-actions';
import { RootAction } from '../../redux/root-actions';
import { StockInterface } from '../stock/stock.model';
import { fetchListOfStocksRequest } from './stock.actions';
import { REHYDRATE } from 'redux-persist/lib/constants';

const initialState: StockInterface = {
	stockList: {
		bestMatches: [],
	},
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
			return {
				...state,
				isLoading: false,
				stockList: payload,
			};
		}
		case getType(fetchListOfStocksRequest.failure): {
			return {
				...state,
				isLoading: false,
			};
		}
		case REHYDRATE: {
			if (!payload)
				return {
					...state,
				};
			else
				return {
					...state,
					stockList: payload.stock.stockList,
				};
		}
		default: {
			return { ...state };
		}
	}
};

export default stockReducer;
