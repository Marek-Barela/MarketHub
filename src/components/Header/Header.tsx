import React, { FC } from 'react';
import logo from '../../assets/logo.png';
import { Search } from '../';
import { NavLink } from 'react-router-dom';
import './Header.styles.scss';

const Header: FC = () => {
	return (
		<header className='header'>
			<img src={logo} alt='MarketHub' />
			<Search />
			<div className='nav'>
				<NavLink to='/' exact activeClassName='selected'>
					Instruments
				</NavLink>
				<NavLink to='/overview' exact activeClassName='selected'>
					Graph
				</NavLink>
			</div>
		</header>
	);
};

export default Header;
