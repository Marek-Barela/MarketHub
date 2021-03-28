import React, { FC } from 'react';
import { Graph, Loader, NoResults } from '../';
import { connect } from 'react-redux';
import {
	selectGraphData,
	selectGraphDailyData,
	selectCurrentGraphSymbol,
	selectGraphIsLoading,
} from '../../redux/graph/graph-selectors';
import { createStructuredSelector } from 'reselect';
import { RootState } from '../../redux/root-reducer';
import { graphDefaultData } from '../../redux/graph/graph-helpers';
import { GraphInterface } from '../../redux/graph/graph-model';

interface StateProps {
	graph: GraphInterface;
	graphData: any;
	graphSymbol: string;
	graphIsLoading: Boolean;
}

type Props = StateProps;

const GraphPreview: FC<Props> = ({ graph, graphData, graphSymbol, graphIsLoading }) => {
	// Check if actual state is the same as default state, should return true only at first render
	const actualGraphState = graph.dailyData['Time Series (Daily)'];
	const actualGraphStateStringify = JSON.stringify(actualGraphState);
	const graphDefaultDataStringify = JSON.stringify(graphDefaultData);

	const isDefaultGraphData = actualGraphStateStringify === graphDefaultDataStringify;

	return (
		<div>
			{isDefaultGraphData && graphIsLoading === false ? (
				<NoResults text='Select instrument first...' />
			) : graphIsLoading ? (
				<Loader />
			) : (
				<Graph data={graphData} symbol={graphSymbol} />
			)}
		</div>
	);
};

const mapStateToProps = createStructuredSelector<RootState, StateProps>({
	graph: selectGraphData,
	graphData: selectGraphDailyData,
	graphSymbol: selectCurrentGraphSymbol,
	graphIsLoading: selectGraphIsLoading,
});

export default connect(mapStateToProps)(GraphPreview);
