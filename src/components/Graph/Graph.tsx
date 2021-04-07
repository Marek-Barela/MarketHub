import React, { FC, useEffect, useState } from 'react';
import ReactApexCharts from 'react-apexcharts';

interface ParentProps {
	data: any;
	symbol: string;
}

type Props = ParentProps;

const Graph: FC<Props> = ({ data, symbol = '' }) => {
	const [state, setState] = useState({
		series: [
			{
				name: 'candle',
				data: [...data],
			},
		],
		options: {
			chart: {
				type: 'candlestick',
				height: 350,
			},
			title: {
				text: symbol,
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
		},
	});

	const { series, options } = state;

	useEffect(() => {
		setState((prevState) => {
			return {
				...prevState,
				series: [
					{
						name: 'candle',
						data: [...data],
					},
				],
				options: {
					...prevState.options,
					title: {
						text: symbol,
						align: 'center',
					},
				},
			};
		});
	}, [data, symbol]);

	return (
		<ReactApexCharts options={options} series={series} type='candlestick' height={350} />
	);
};

export default Graph;
