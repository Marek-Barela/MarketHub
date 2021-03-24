import { createAction } from 'typesafe-actions';
import { HistoryItem } from '../history/history.model';

export const saveHistoryItem = createAction('history/SAVE_STOCK_ITEM', (action) => {
	return (stockItem: HistoryItem) => action(stockItem);
});
