import React, { FC } from 'react';
import ReactApexCharts from 'react-apexcharts';

interface ParentProps {
	data: any;
}

type Props = ParentProps;

const Graph: FC<Props> = ({ data }) => {
	const series = [
		{
			name: 'candle',
			data: [...data],
		},
	];

	const options = {
		chart: {
			type: 'candlestick',
			height: 350,
		},
		title: {
			text: 'CandleStick Chart',
			align: 'center',
		},
		xaxis: {
			type: 'datetime',
		},
		yaxis: {
			tooltip: {
				enabled: true,
			},
		},
	};

	return (
		<ReactApexCharts
			options={options}
			series={series}
			type='candlestick'
			height={350}
		/>
	);
};

export default Graph;
