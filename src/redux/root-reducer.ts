import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { RootAction } from './root-actions';
import stockReducer from './stock/stock.reducer';
import graphReducer from './graph/graph-reducer';
import historyReducer from './history/history.reducer';
import ratesReducer from './rates/rates.reducer';

const persistConfig = {
	key: 'root',
	storage,
};

const reducerMap = {
	stock: stockReducer,
	graph: graphReducer,
	history: historyReducer,
	rates: ratesReducer,
};

export type RootState = {
	[K in keyof typeof reducerMap]: ReturnType<typeof reducerMap[K]>;
};

export const rootReducer = combineReducers<RootState, RootAction>(reducerMap);

export default persistReducer(persistConfig, rootReducer);
