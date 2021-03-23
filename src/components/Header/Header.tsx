import React, { FC } from 'react';
import logo from '../../assets/logo.png';
import './Header.styles.scss';

const Header: FC = () => {
	return (
		<header className='header'>
			<img src={logo} alt='MarketHub' />
			<div className='nav'></div>
		</header>
	);
};

export default Header;
