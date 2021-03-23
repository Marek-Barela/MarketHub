import { ListOfStocksResponse } from './stock.model';
import axios from 'axios';

export const getListOfStocks = async (
	symbol: string
): Promise<ListOfStocksResponse> => {
	return await axios(
		`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${symbol}&apikey=${process.env.REACT_APP_API_KEY}`
	).then((res) => res.data);
};
