import React, { FC } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectUserHistory } from '../../redux/history/history.selector';
import { HistoryItem } from '../../redux/history/history.model';
import { RootState } from '../../redux/root-reducer';

interface StateProps {
	userHistory: HistoryItem[];
}

type Props = StateProps;

const UserHistoryComponent: FC<Props> = ({ userHistory }) => {
	return (
		<div>
			{userHistory.map((item, index) => {
				console.log(item);
				return <p key={index}>{item.symbol}</p>;
			})}
		</div>
	);
};

const mapStateToProps = createStructuredSelector<RootState, StateProps>({
	userHistory: selectUserHistory,
});

export default connect(mapStateToProps)(UserHistoryComponent);
