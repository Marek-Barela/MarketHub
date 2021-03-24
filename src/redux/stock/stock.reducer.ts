import { getType } from 'typesafe-actions';
import { RootAction } from '../root-actions';
import { StockInterface } from './stock.model';
import { fetchListOfStocksRequest } from './stock.actions';
import { REHYDRATE } from 'redux-persist/lib/constants';

const initialState: StockInterface = {
	stockList: {
		bestMatches: [],
	},
	isLoading: false,
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
			if (payload['Note'] === undefined)
				return {
					...state,
					isLoading: false,
					stockList: payload,
				};
			else {
				return {
					...state,
					isLoading: false,
					stockList: {
						bestMatches: [],
					},
				};
			}
		}
		case getType(fetchListOfStocksRequest.failure): {
			return {
				...state,
				isLoading: false,
				stockList: {
					bestMatches: [],
				},
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
