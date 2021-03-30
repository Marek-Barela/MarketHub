export interface StockInterface {
	stockList: ListOfStocksResponse;
	isLoading: boolean;
	currentStockDetails: {
		name: string;
		currency: string;
	};
}

export interface ListOfStocksResponse {
	bestMatches: StockListItem[];
}

export interface StockListItem {
	'1. symbol': string;
	'2. name': string;
	'3. type': string;
	'4. region': string;
	'5. marketOpen': string;
	'6. marketClose': string;
	'7. timezone': string;
	'8. currency': string;
	'9. matchScore': string;
}
