import React, { FC } from 'react';
import logo from '../../assets/logo.png';
import { Search } from '../';
import './Header.styles.scss';

const Header: FC = () => {
	return (
		<header className='header'>
			<img src={logo} alt='MarketHub' />
			<Search />
			<div className='nav'></div>
		</header>
	);
};

export default Header;
