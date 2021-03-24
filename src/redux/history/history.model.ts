export interface UserHistory {
	userHistory: HistoryItem[];
}

export interface HistoryItem {
	symbol: String;
	name: String;
	type: String;
	region: String;
	currency: String;
}
