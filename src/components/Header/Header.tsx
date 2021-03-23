import React, { FC } from 'react';
import logo from '../../assets/logo.png';
import { Search } from '../';
import { Link } from 'react-router-dom';
import './Header.styles.scss';

const Header: FC = () => {
	return (
		<header className='header'>
			<img src={logo} alt='MarketHub' />
			<Search />
			<div className='nav'>
				<Link to='/'>Home</Link>
				<Link to='/overview'>Overview</Link>
			</div>
		</header>
	);
};

export default Header;
