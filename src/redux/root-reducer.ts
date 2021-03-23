import { combineReducers } from 'redux';
import { RootAction } from './root-actions';
import stockReducer from './stock/stock.reducer';

const reducerMap = { stock: stockReducer };

export type RootState = {
	[K in keyof typeof reducerMap]: ReturnType<typeof reducerMap[K]>;
};
export const rootReducer = combineReducers<RootState, RootAction>(reducerMap);
