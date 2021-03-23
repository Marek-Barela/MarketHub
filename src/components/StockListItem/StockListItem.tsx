import React, { FC } from 'react';

interface ParentProps {
	symbol: String;
	name: String;
	region: String;
	currency: String;
}

type Props = ParentProps;

const StockListItem: FC<Props> = ({ symbol, name, region, currency }) => {
	return <div>item</div>;
};

export default StockListItem;
