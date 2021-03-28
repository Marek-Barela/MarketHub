import React, { FC } from 'react';
import { Rates } from '../';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectRatesData } from '../../redux/rates/rates.selector';
import { RatesData } from '../../redux/rates/rates.model';
import { RootState } from '../../redux/root-reducer';

interface StateProps {
	rates: RatesData;
}

type Props = StateProps;

const RatesPreview: FC<Props> = ({ rates }) => {
	const symbol = rates['Global Quote']['01. symbol'];
	const price = rates['Global Quote']['05. price'];
	const lastUpdate = rates['Global Quote']['07. latest trading day'];
	const change = rates['Global Quote']['09. change'];
	const changePercent = rates['Global Quote']['10. change percent'];

	console.log(symbol, price, lastUpdate, change, changePercent);

	return (
		<div>
			<Rates />
		</div>
	);
};

const mapStateToProps = createStructuredSelector<RootState, StateProps>({
	rates: selectRatesData,
});

export default connect(mapStateToProps)(RatesPreview);
