import React, { FC } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStockDailyData } from '../../redux/graph/graph-actions';
import { fetchRatesData } from '../../redux/rates/rates.actions';
import { saveCurrentStockDetails } from '../../redux/stock/stock.actions';
import { saveHistoryItem } from '../../redux/history/history.actions';
import { HistoryItem } from '../../redux/history/history.model';
import { RootState } from '../../redux/root-reducer';
import './StockListItem.styles.scss';

interface ParentProps {
	symbol: string;
	name: string;
	type: string;
	region: string;
	currency: string;
}

interface DispatchProps {
	fetchStockDailyData: (symbol: string) => void;
	saveCurrentStockDetails: (name: string, currency: string) => void;
	saveHistoryItem: (stockData: HistoryItem) => void;
	fetchRatesData: (symbol: string) => void;
}

type Props = ParentProps & DispatchProps & RouteComponentProps;

const StockListItem: FC<Props> = ({
	symbol,
	name,
	type,
	region,
	currency,
	history,
	saveCurrentStockDetails,
	saveHistoryItem,
	fetchStockDailyData,
	fetchRatesData,
}) => {
	const handleClick = () => {
		history.push('/overview');
		fetchStockDailyData(symbol);
		fetchRatesData(symbol);
		saveCurrentStockDetails(name, currency);
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
	saveCurrentStockDetails,
	saveHistoryItem,
	fetchRatesData,
};

export default connect<{}, DispatchProps, {}, RootState>(
	null,
	mapDispatchToProps
)(withRouter(StockListItem));
