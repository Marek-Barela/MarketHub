export interface GraphInterface {
	dailyData: DailyData | any;
	isLoading: Boolean;
}

interface DailyData {
	'Meta Data': {
		'1. Information': String;
		'2. Symbol': String;
		'3. Last Refreshed': String;
		'4. Output Size': String;
		'5. Time Zone': String;
	};

	'Time Series (Daily)': {
		[key: string]: {
			'1. open': String;
			'2. high': String;
			'3. low': String;
			'4. close': String;
			'5. volume': String;
		};
	};
}
