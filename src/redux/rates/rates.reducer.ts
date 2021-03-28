import { RootAction } from '../root-actions';
import { RatesInterface } from './rates.model';
import { getType } from 'typesafe-actions';
import { fetchRatesDataRequest } from './rates.actions';

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
			return {
				...state,
				isLoading: false,
				ratesData: payload,
			};
		}
		case getType(fetchRatesDataRequest.failure): {
			return {
				...state,
				isLoading: false,
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
