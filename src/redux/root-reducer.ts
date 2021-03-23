import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { RootAction } from './root-actions';
import stockReducer from './stock/stock.reducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['stock'],
};

const reducerMap = { stock: stockReducer };

export type RootState = {
	[K in keyof typeof reducerMap]: ReturnType<typeof reducerMap[K]>;
};

export const rootReducer = combineReducers<RootState, RootAction>(reducerMap);

export default persistReducer(persistConfig, rootReducer);
