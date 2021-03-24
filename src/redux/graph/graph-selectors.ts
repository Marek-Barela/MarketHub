import { createSelector } from 'reselect';
import { RootState } from '../root-reducer';

const selectGraphData = (state: RootState) => {
	return state.graph;
};

export const selectGraphDailyData = createSelector([selectGraphData], (graph) =>
	Object.entries(graph.dailyData['Time Series (Daily)']).map(([x, y]) => ({
		x,
		y: Object.values(y as any),
	}))
);
