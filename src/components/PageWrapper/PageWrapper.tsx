import React, { FC, ReactNode } from 'react';
import { Header, UserHistory } from '../';
import './PageWrapper.styles.scss';

interface ParentProps {
	children: ReactNode;
}

type Props = ParentProps;

const PageWrapper: FC<Props> = ({ children }) => {
	return (
		<div>
			<Header />
			<main className='main'>
				<aside className='aside'>
					<UserHistory />
				</aside>
				<section className='content'>{children}</section>
			</main>
		</div>
	);
};

export default PageWrapper;
