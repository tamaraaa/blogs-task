import React from 'react';

import Search from './Search/Search';
import Logo from '../../images/logo.svg';

import './Header.scss';

const Header = ({setShowSearched}) =>{
    const links = ['Link 1', 'Link 2', 'Link 3', 'My Profile', 'Logout'];
    return (
        <div className='header'>
            <span className='header__logo'>
                <img src={Logo} alt='logo'/>
            </span>
            <Search setShowSearched={setShowSearched}/>
            {links.map( link => <span key={link} className='header__link'>{link}</span>)}           
        </div>
    );
};
export default Header;
