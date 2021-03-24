import React, { FC } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStockDailyData } from '../../redux/graph/graph-actions';
import { saveHistoryItem } from '../../redux/history/history.actions';
import { HistoryItem } from '../../redux/history/history.model';
import { RootState } from '../../redux/root-reducer';
import './StockListItem.styles.scss';

interface ParentProps {
	symbol: String;
	name: String;
	type: String;
	region: String;
	currency: String;
}

interface DispatchProps {
	fetchStockDailyData: (symbol: String) => void;
	saveHistoryItem: (stockData: HistoryItem) => void;
}

type Props = ParentProps & DispatchProps & RouteComponentProps;

const StockListItem: FC<Props> = ({
	symbol,
	name,
	type,
	region,
	currency,
	history,
	saveHistoryItem,
	fetchStockDailyData,
}) => {
	const handleClick = () => {
		history.push('/overview');
		fetchStockDailyData(symbol);
		saveHistoryItem({ symbol, name, type, region, currency });
	};

	return (
		<tr className='listitem-row' onClick={handleClick}>
			<td className='region-row'>{region}</td>
			<td className='name-row'>
				<span>{symbol}</span>
				<p>{name}</p>
			</td>
			<td className='type-row'>{type}</td>
			<td className='currency-row'>{currency}</td>
		</tr>
	);
};

const mapDispatchToProps = {
	fetchStockDailyData,
	saveHistoryItem,
};

export default connect<{}, DispatchProps, {}, RootState>(
	null,
	mapDispatchToProps
)(withRouter(StockListItem));
