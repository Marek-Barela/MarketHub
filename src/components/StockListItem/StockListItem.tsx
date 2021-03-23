import React, { FC } from 'react';
import './StockListItem.styles.scss';

interface ParentProps {
	symbol: String;
	name: String;
	type: String;
	region: String;
	currency: String;
}

type Props = ParentProps;

const StockListItem: FC<Props> = ({ symbol, name, type, region, currency }) => {
	return (
		<tr className='listitem-row'>
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

export default StockListItem;
