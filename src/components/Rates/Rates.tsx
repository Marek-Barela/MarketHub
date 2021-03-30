import React, { FC } from 'react';
import { RatesData } from '../../redux/rates/rates.model';
import './Rates.styles.scss';

type Props = RatesData;

const Rates: FC<Props> = (rates) => {
	const symbol = rates['Global Quote']['01. symbol'];
	const price = rates['Global Quote']['05. price'];
	const lastUpdate = rates['Global Quote']['07. latest trading day'];
	const change = rates['Global Quote']['09. change'];
	const changePercent = rates['Global Quote']['10. change percent'];

	const rateStatus = change.split('')[0] === '-' ? 'negative' : 'positive';
	const rateArrow = rateStatus === 'negative' ? 'fas fa-caret-down' : 'fas fa-caret-up';

	return (
		<div className='rates-container'>
			<h3 className='symbol'>{symbol}</h3>
			<p className='price'>{price}</p>
			<span className={rateStatus}>
				<span className={rateArrow} /> {change} ({changePercent})
			</span>
			<p className='last-update'>LAST UPDATE: {lastUpdate}</p>
		</div>
	);
};

export default Rates;
