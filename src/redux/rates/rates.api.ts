import { RatesInterface } from './rates.model';
import axios from 'axios';

export const getRatesData = async (symbol: string): Promise<RatesInterface> => {
	return await axios(
		`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey={process.env.REACT_APP_API_KEY}`
	).then((res) => res.data);
};
