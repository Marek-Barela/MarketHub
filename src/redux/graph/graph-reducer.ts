import { getType } from 'typesafe-actions';
import { RootAction } from '../../redux/root-actions';
import { GraphInterface } from './graph-model';
import { fetchStockDailyDataRequest } from './graph-actions';
import { REHYDRATE } from 'redux-persist/lib/constants';
import { graphDefaultData } from './graph-helpers';

const initialState: GraphInterface = {
	dailyData: {
		'Meta Data': {},
		'Time Series (Daily)': graphDefaultData,
	},
	isLoading: false,
};

const graphReducer = (
	state: GraphInterface = initialState,
	action: RootAction
): GraphInterface => {
	const { type, payload } = action;
	switch (type) {
		case getType(fetchStockDailyDataRequest.request): {
			return {
				...state,
				isLoading: true,
			};
		}
		case getType(fetchStockDailyDataRequest.success): {
			return {
				...state,
				isLoading: false,
				dailyData: payload,
			};
		}
		case getType(fetchStockDailyDataRequest.failure): {
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
					dailyData: payload.graph.dailyData,
				};
		}
		default: {
			return {
				...state,
			};
		}
	}
};

export default graphReducer;
