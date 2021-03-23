import React, { FC, FormEvent, useState } from 'react';
import { connect } from 'react-redux';
import { fetchListOfStocks } from '../../redux/stock/stock.actions';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import './Search.styles.scss';

interface DispatchProps {
	fetchListOfStocks: (action: string) => void;
}

type Props = DispatchProps & RouteComponentProps;

const Search: FC<Props> = ({ fetchListOfStocks, history }) => {
	const [state, setState] = useState({
		search: '',
	});

	const { search } = state;

	const handleChange = (e: FormEvent<HTMLInputElement>) => {
		const { name, value } = e.currentTarget;
		setState({ ...state, [name]: value });
	};

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		fetchListOfStocks(search);
		history.push('/');
	};

	return (
		<div>
			<form onSubmit={handleSubmit} className='search-input'>
				<input
					name='search'
					type='text'
					onChange={handleChange}
					value={search}
					className='search-input'
					placeholder='Search for stock e.g IBM'
					required
				/>
				<button type='submit' className='button'>
					<span className='fas fa-search'></span>
				</button>
			</form>
		</div>
	);
};

const mapDispatchToProps = {
	fetchListOfStocks,
};

export default withRouter(connect(null, mapDispatchToProps)(Search));
