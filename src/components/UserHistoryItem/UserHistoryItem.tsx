import React, { FC } from 'react';
import { HistoryItem } from '../../redux/history/history.model';
import './UserHistoryItem.styles.scss';

type Props = HistoryItem;

const UserHistoryItem: FC<Props> = ({ symbol, name, region }) => {
	return (
		<div className='history-item'>
			<span className='history-symbol'>
				{symbol} - {region}
			</span>
			<span className='history-name'>{name}</span>
		</div>
	);
};

export default UserHistoryItem;
