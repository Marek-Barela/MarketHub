import { RootAction } from '../root-actions';
import { RatesInterface } from './rates.model';
import { getType } from 'typesafe-actions';
import { fetchRatesDataRequest } from './rates.actions';
import { REHYDRATE } from 'redux-persist/lib/constants';

const initialState: RatesInterface = {
	ratesData: {
		'Global Quote': {},
	},
	isLoading: false,
};

const ratesReducer = (
	state: RatesInterface = initialState,
	action: RootAction
): RatesInterface => {
	const { type, payload } = action;

	switch (type) {
		case getType(fetchRatesDataRequest.request): {
			return {
				...state,
				isLoading: true,
			};
		}
		case getType(fetchRatesDataRequest.success): {
			if (payload['Note'] === undefined)
				return {
					...state,
					isLoading: false,
					ratesData: payload,
				};
			else {
				return {
					...state,
					isLoading: false,
					ratesData: {
						'Global Quote': {},
					},
				};
			}
		}
		case getType(fetchRatesDataRequest.failure): {
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
			return {
				...state,
				ratesData: { ...payload.rates.ratesData },
			};
		}
		default: {
			return {
				...state,
			};
		}
	}
};

export default ratesReducer;
