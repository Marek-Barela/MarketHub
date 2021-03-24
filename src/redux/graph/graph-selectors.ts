import { createSelector } from 'reselect';
import { RootState } from '../root-reducer';

export const selectGraphData = (state: RootState) => {
	return state.graph;
};

export const selectCurrentGraphSymbol = createSelector(
	[selectGraphData],
	(graph) => graph.dailyData['Meta Data']['2. Symbol']
);

export const selectGraphDailyData = createSelector([selectGraphData], (graph) =>
	Object.entries(graph.dailyData['Time Series (Daily)']).map(([x, y]) => ({
		x,
		y: Object.values(y as any),
	}))
);

export const selectGraphIsLoading = createSelector(
	[selectGraphData],
	(graph) => graph.isLoading
);
