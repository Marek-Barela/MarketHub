import React, { FC } from 'react';
import { StockListItem, Loader, NoResults } from '../';

import {
	selectStockList,
	selectStockListIsLoading,
} from '../../redux/stock/stock.selector';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { RootState } from '../../redux/root-reducer';
import { ListOfStocksResponse } from '../../redux/stock/stock.model';
import './StockList.styles.scss';

interface StateProps {
	stockList: ListOfStocksResponse;
	stockListIsLoading: Boolean;
}

type Props = StateProps;

const StockList: FC<Props> = ({ stockList: { bestMatches }, stockListIsLoading }) => {
	return (
		<>
			{stockListIsLoading ? (
				<Loader />
			) : bestMatches.length ? (
				<>
					<h2>Instrument Monitor</h2>
					<table className='table'>
						<thead>
							<tr>
								<th>Country</th>
								<th>Name</th>
								<th>Instrument Type</th>
								<th>Currency</th>
							</tr>
						</thead>
						<tbody>
							{bestMatches.map((item, index) => {
								const symbol = item['1. symbol'];
								const name = item['2. name'];
								const type = item['3. type'];
								const region = item['4. region'];
								const currency = item['8. currency'];

								return (
									<StockListItem
										key={index}
										symbol={symbol}
										type={type}
										name={name}
										region={region}
										currency={currency}
									/>
								);
							})}
						</tbody>
					</table>
				</>
			) : (
				<NoResults text='No search results...' />
			)}
		</>
	);
};

const mapStateToProps = createStructuredSelector<RootState, StateProps>({
	stockList: selectStockList,
	stockListIsLoading: selectStockListIsLoading,
});

export default connect<StateProps, {}, {}, RootState>(mapStateToProps)(StockList);
