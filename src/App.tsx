import React, { FC } from 'react';
import { Homepage, Overview } from './pages';
import { Route } from 'react-router-dom';

const App: FC = () => {
	return (
		<div>
			<Route exact path='/' component={Homepage} />
			<Route exact path='/overview' component={Overview} />
		</div>
	);
};

export default App;
