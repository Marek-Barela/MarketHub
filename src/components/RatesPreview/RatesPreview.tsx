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
	return (
		<div>
			<Rates {...rates} />
		</div>
	);
};

const mapStateToProps = createStructuredSelector<RootState, StateProps>({
	rates: selectRatesData,
});

export default connect(mapStateToProps)(RatesPreview);
