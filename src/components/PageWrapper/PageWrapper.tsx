import React, { FC, ReactNode } from 'react';
import { Header } from '../';
import './PageWrapper.styles.scss';

interface ParentProps {
	children: ReactNode;
}

type Props = ParentProps;

const PageWrapper: FC<Props> = ({ children }) => {
	return (
		<div>
			<Header />
			<main className='main'>{children}</main>
		</div>
	);
};

export default PageWrapper;
