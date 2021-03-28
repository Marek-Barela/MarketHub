import React from 'react';
import { PageWrapper, GraphPreview, RatesPreview } from '../../components';

const Overview = () => {
	return (
		<PageWrapper>
			<RatesPreview />
			<GraphPreview />
		</PageWrapper>
	);
};

export default Overview;
