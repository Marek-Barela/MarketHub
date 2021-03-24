import { RootState } from '../root-reducer';
import { createSelector } from 'reselect';

const selectHistory = (state: RootState) => {
	return state.history;
};

export const selectUserHistory = createSelector(
	[selectHistory],
	(history) => history.userHistory
);
