import React, { useState } from 'react';

import Search from './Search/Search';
import Logo from '../../images/logo.svg';
import menuIcon from '../../images/menu.svg';

import './Header.scss';

const Header = ({ setShowSearched }) => {
	const links = ['Link 1', 'Link 2', 'Link 3', 'My Profile', 'Logout'];
	const [showNav, setShowNav] = useState(false);
	return (
		<div className="header">
			<span className="header__logo">
				<img src={Logo} alt="logo" />
			</span>
			<Search setShowSearched={setShowSearched} />
			<span className={`header__nav ${showNav ? 'menu-open' : ''}`}>
				{links.map(link => (
					<span key={link} className="header__nav__link">
						{link}
					</span>
				))}
			</span>
			<img
				onClick={() => {
					setShowNav(!showNav);
				}}
				className="header__menu"
				src={menuIcon}
				alt="menu"
			/>
		</div>
	);
};
export default Header;
