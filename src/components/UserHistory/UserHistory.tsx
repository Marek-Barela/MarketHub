import React, { FC } from 'react';
import { UserHistoryItem } from '../';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectUserHistory } from '../../redux/history/history.selector';
import { HistoryItem } from '../../redux/history/history.model';
import { RootState } from '../../redux/root-reducer';
import './UserHistory.style.scss';

interface StateProps {
	userHistory: HistoryItem[];
}

type Props = StateProps;

const UserHistoryComponent: FC<Props> = ({ userHistory }) => {
	return (
		<div className='history-wrapper'>
			{userHistory.length ? (
				<>
					<h3 className='history-title'>Your recent search</h3>
					{userHistory.map((item, index) => {
						return <UserHistoryItem key={index} {...item} />;
					})}
				</>
			) : (
				<div className='history-empty'>
					<p>Your history is empty</p>
				</div>
			)}
		</div>
	);
};

const mapStateToProps = createStructuredSelector<RootState, StateProps>({
	userHistory: selectUserHistory,
});

export default connect(mapStateToProps)(UserHistoryComponent);
