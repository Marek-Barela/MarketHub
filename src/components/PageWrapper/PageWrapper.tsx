import React, { FC, ReactNode } from 'react';
import { Header } from '../';

interface ParentProps {
	children: ReactNode;
}

type Props = ParentProps;

const PageWrapper: FC<Props> = ({ children }) => {
	return (
		<div>
			<Header />
			<main>{children}</main>
		</div>
	);
};

export default PageWrapper;
