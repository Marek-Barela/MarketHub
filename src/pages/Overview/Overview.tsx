import React, { FC } from 'react';
import { PageWrapper, GraphPreview, RatesPreview, Loader } from '../../components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectGraphIsLoading } from '../../redux/graph/graph-selectors';
import { selectRatesIsLoading } from '../../redux/rates/rates.selector';
import { RootState } from '../../redux/root-reducer';

interface StateProps {
	graphIsLoading: Boolean;
	ratesIsLoading: boolean;
}

type Props = StateProps;

const Overview: FC<Props> = ({ graphIsLoading, ratesIsLoading }) => {
	return (
		<PageWrapper>
			{graphIsLoading || ratesIsLoading ? (
				<Loader />
			) : (
				<>
					<RatesPreview />
					<GraphPreview />
				</>
			)}
		</PageWrapper>
	);
};

const mapStateToProps = createStructuredSelector<RootState, StateProps>({
	graphIsLoading: selectGraphIsLoading,
	ratesIsLoading: selectRatesIsLoading,
});

export default connect(mapStateToProps)(Overview);
