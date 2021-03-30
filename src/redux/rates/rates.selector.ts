import { createSelector } from 'reselect';
import { RootState } from '../root-reducer';

const selectRates = (state: RootState) => {
	return state.rates;
};

export const selectRatesData = createSelector([selectRates], (rates) => rates.ratesData);

export const selectRatesIsLoading = createSelector(
	[selectRates],
	(rates) => rates.isLoading
);
