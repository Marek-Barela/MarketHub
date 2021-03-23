import { RootState } from '../root-reducer';
import { createSelector } from 'reselect';

const selectStock = (state: RootState) => {
	return state.stock;
};

export const selectStockList = createSelector(
	[selectStock],
	(stock) => stock.stockList
);

export const selectStockListIsLoading = createSelector(
	[selectStock],
	(stock) => stock.isLoading
);
