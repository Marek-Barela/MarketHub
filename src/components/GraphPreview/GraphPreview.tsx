import React, { FC } from 'react';
import { Graph } from '../';
import { connect } from 'react-redux';
import {
	selectGraphDailyData,
	selectCurrentGraphSymbol,
} from '../../redux/graph/graph-selectors';
import { createStructuredSelector } from 'reselect';
import { RootState } from '../../redux/root-reducer';

interface StateProps {
	graphData: any;
	graphSymbol: string;
}

type Props = StateProps;

const GraphPreview: FC<Props> = ({ graphData, graphSymbol }) => {
	return (
		<div>
			<Graph data={graphData} symbol={graphSymbol} />
		</div>
	);
};

const mapStateToProps = createStructuredSelector<RootState, StateProps>({
	graphData: selectGraphDailyData,
	graphSymbol: selectCurrentGraphSymbol,
});

export default connect(mapStateToProps)(GraphPreview);
