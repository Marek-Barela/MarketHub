import React, { FC } from 'react';
import { StockListItem } from '../';

import { selectStockList } from '../../redux/stock/stock.selector';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { RootState } from '../../redux/root-reducer';
import { ListOfStocksResponse } from '../../redux/stock/stock.model';

interface StateProps {
	stockList: ListOfStocksResponse;
}

type Props = StateProps;

const StockList: FC<Props> = ({ stockList: { bestMatches } }) => {
	return (
		<div>
			{bestMatches.map((item, index) => {
				const symbol = item['1. symbol'];
				const name = item['2. name'];
				const region = item['4. region'];
				const currency = item['8. currency'];

				return (
					<StockListItem
						key={index}
						symbol={symbol}
						name={name}
						region={region}
						currency={currency}
					/>
				);
			})}
		</div>
	);
};

const mapStateToProps = createStructuredSelector<RootState, StateProps>({
	stockList: selectStockList,
});

export default connect<StateProps, {}, {}, RootState>(mapStateToProps)(
	StockList
);
