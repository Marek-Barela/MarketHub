import React, { FC } from 'react';
import { Homepage } from './pages';
import { Route } from 'react-router-dom';

const App: FC = () => {
	return (
		<div>
			<Route exact path='/' component={Homepage} />
		</div>
	);
};

export default App;
