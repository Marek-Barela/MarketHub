import React, { FC } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { fetchStockDailyData } from '../../redux/graph/graph-actions';
import { connect } from 'react-redux';
import { HistoryItem } from '../../redux/history/history.model';
import './UserHistoryItem.styles.scss';
import { RootState } from '../../redux/root-reducer';

interface DispatchProps {
	fetchStockDailyData: (symbol: String) => void;
}

type Props = HistoryItem & RouteComponentProps & DispatchProps;

const UserHistoryItem: FC<Props> = ({
	symbol,
	name,
	region,
	history,
	fetchStockDailyData,
}) => {
	const handleClick = () => {
		history.push('/overview');
		fetchStockDailyData(symbol);
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
};

export default connect<{}, DispatchProps, {}, RootState>(
	null,
	mapDispatchToProps
)(withRouter(UserHistoryItem));
