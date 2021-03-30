import React, { FC } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { fetchStockDailyData } from '../../redux/graph/graph-actions';
import { fetchRatesData } from '../../redux/rates/rates.actions';
import { connect } from 'react-redux';
import { HistoryItem } from '../../redux/history/history.model';
import './UserHistoryItem.styles.scss';
import { RootState } from '../../redux/root-reducer';

interface DispatchProps {
	fetchStockDailyData: (symbol: string) => void;
	fetchRatesData: (symbol: string) => void;
}

type Props = HistoryItem & RouteComponentProps & DispatchProps;

const UserHistoryItem: FC<Props> = ({
	symbol,
	name,
	region,
	history,
	fetchStockDailyData,
	fetchRatesData,
}) => {
	const handleClick = () => {
		history.push('/overview');
		fetchStockDailyData(symbol);
		fetchRatesData(symbol);
	};

	return (
		<div className='history-item' onClick={handleClick}>
			<span className='history-symbol'>
				{symbol} - {region}
			</span>
			<span className='history-name'>{name}</span>
		</div>
	);
};

const mapDispatchToProps = {
	fetchStockDailyData,
	fetchRatesData,
};

export default connect<{}, DispatchProps, {}, RootState>(
	null,
	mapDispatchToProps
)(withRouter(UserHistoryItem));
