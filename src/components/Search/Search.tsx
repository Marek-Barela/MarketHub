import React, { FC, FormEvent, useState } from 'react';
import axios from 'axios';
import './Search.styles.scss';

const Search: FC = () => {
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

		try {
			const response = await axios(
				`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${search}&apikey=${process.env.REACT_APP_API_KEY}`
			);

			if (response.status === 200) {
				console.log(response.data.bestMatches);
			}
		} catch (err) {
			console.log(err);
		}
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

export default Search;
