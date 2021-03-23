import React, { FC, FormEvent, useState } from 'react';
import { connect } from 'react-redux';
import { fetchListOfStocks } from '../../redux/stock/stock.actions';
import './Search.styles.scss';

interface DispatchProps {
	fetchListOfStocks: (action: string) => void;
}

type Props = DispatchProps;

const Search: FC<Props> = ({ fetchListOfStocks }) => {
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

export default connect(null, mapDispatchToProps)(Search);
