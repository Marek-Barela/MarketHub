import { createSelector } from 'reselect';
import { RootState } from '../root-reducer';
import { selectStockList } from '../stock/stock.selector';

const selectGraphData = (state: RootState) => {
	return state.graph;
};

export const selectCurrentGraphSymbol = createSelector(
	[selectGraphData, selectStockList],
	(graph, stock) => {
		const symbol = graph.dailyData['Meta Data']['2. Symbol'] || '';
		const name =
			stock.bestMatches.find(
				(stockItem) => stockItem['1. symbol'] === symbol
			)?.['2. name'] || '';

		return `${symbol} - ${name}`;
	}
);

export const selectGraphDailyData = createSelector([selectGraphData], (graph) =>
	Object.entries(graph.dailyData['Time Series (Daily)']).map(([x, y]) => ({
		x,
		y: Object.values(y as any),
	}))
);
