import React, { FC } from 'react';
import './NoResults.styles.scss';

interface ParentProps {
	text: string;
}

type Props = ParentProps;

const NoResults: FC<Props> = ({ text }) => {
	return <p className='no-results'>{text}</p>;
};

export default NoResults;
