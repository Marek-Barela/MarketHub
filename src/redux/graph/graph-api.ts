import { GraphInterface } from './graph-model';
import axios from 'axios';

export const getStockDailyData = async (symbol: string): Promise<GraphInterface> => {
	return await axios(
		`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey={process.env.REACT_APP_API_KEY}`
	).then((res) => res.data);
};
