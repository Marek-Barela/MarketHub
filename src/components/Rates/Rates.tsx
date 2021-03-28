import React, { FC } from 'react';
import { RatesData } from '../../redux/rates/rates.model';

type Props = RatesData;

const Rates: FC<Props> = (rates) => {
	const symbol = rates['Global Quote']['01. symbol'];
	const price = rates['Global Quote']['05. price'];
	const lastUpdate = rates['Global Quote']['07. latest trading day'];
	const change = rates['Global Quote']['09. change'];
	const changePercent = rates['Global Quote']['10. change percent'];

	return (
		<div>
			<p>{symbol}</p>
			<p>{price}</p>
			<p>{lastUpdate}</p>
			<p>{change}</p>
			<p>{changePercent}</p>
		</div>
	);
};

export default Rates;
