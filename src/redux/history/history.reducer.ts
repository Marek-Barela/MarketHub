import { getType } from 'typesafe-actions';
import { RootAction } from '../root-actions';
import { UserHistory } from './history.model';
import { saveHistoryItem } from '../history/history.actions';
import { REHYDRATE } from 'redux-persist/lib/constants';

const initialState = {
	userHistory: [],
};

const historyReducer = (
	state: UserHistory = initialState,
	action: RootAction
): UserHistory => {
	const { type, payload } = action;
	switch (type) {
		case getType(saveHistoryItem): {
			return {
				...state,
				userHistory: [payload, ...state.userHistory],
			};
		}
		case REHYDRATE: {
			if (!payload)
				return {
					...state,
				};
			return {
				...state,
				userHistory: [...payload.history.userHistory],
			};
		}
		default: {
			return {
				...state,
			};
		}
	}
};

export default historyReducer;
