import React, { FC } from 'react';
import { Rates, NoResults } from '../';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectRatesData } from '../../redux/rates/rates.selector';
import { RatesData } from '../../redux/rates/rates.model';
import { selectCurrentStockDetails } from '../../redux/stock/stock.selector';
import { RootState } from '../../redux/root-reducer';

interface StateProps {
	rates: RatesData;
	currentStockDetails: { name: string; currency: string };
}

type Props = StateProps;

const RatesPreview: FC<Props> = ({ rates, currentStockDetails }) => {
	const ratesAreEmpty = Object.keys(rates['Global Quote']).length === 0;

	return (
		<div>
			{ratesAreEmpty ? (
				<NoResults text='Select instrument to display rates' />
			) : (
				<Rates rates={rates} stockDetails={currentStockDetails} />
			)}
		</div>
	);
};

const mapStateToProps = createStructuredSelector<RootState, StateProps>({
	rates: selectRatesData,
	currentStockDetails: selectCurrentStockDetails,
});

export default connect<StateProps, {}, {}, RootState>(mapStateToProps)(RatesPreview);
