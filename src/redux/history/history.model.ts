export interface UserHistory {
	userHistory: HistoryItem[];
}

export interface HistoryItem {
	symbol: string;
	name: string;
	type: string;
	region: string;
	currency: string;
}
