import React, { FC } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import './StockListItem.styles.scss';

interface ParentProps {
	symbol: String;
	name: String;
	type: String;
	region: String;
	currency: String;
}

type Props = ParentProps & RouteComponentProps;

const StockListItem: FC<Props> = ({
	symbol,
	name,
	type,
	region,
	currency,
	history,
}) => {
	const handleClick = () => {
		history.push('/overview');
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

export default withRouter(StockListItem);
