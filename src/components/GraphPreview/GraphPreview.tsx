import React, { FC } from 'react';
import { Graph } from '../';
import { connect } from 'react-redux';
import { selectGraphDailyData } from '../../redux/graph/graph-selectors';
import { createStructuredSelector } from 'reselect';
import { RootState } from '../../redux/root-reducer';

interface StateProps {
	graphData: any;
}

type Props = StateProps;

const GraphPreview: FC<Props> = ({ graphData }) => {
	return (
		<div>
			<Graph data={graphData} />
		</div>
	);
};

const mapStateToProps = createStructuredSelector<RootState, StateProps>({
	graphData: selectGraphDailyData,
});

export default connect(mapStateToProps)(GraphPreview);
