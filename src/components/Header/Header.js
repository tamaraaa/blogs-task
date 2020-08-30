import React from 'react';

import Search from './Search/Search';
import Logo from '../../images/logo.svg';

import './Header.scss';

const CLASS = 'Header';

const Header = () =>{
    return (
        <div className={CLASS}>
            <span className={`${CLASS}__logo`}>
                <img src={Logo} alt='logo'/>
            </span>
            <Search />
            <span className={`${CLASS}__link`}>Link 1</span>
            <span className={`${CLASS}__link`}>Link 2</span>
            <span className={`${CLASS}__link`}>Link 3</span>
            <span className={`${CLASS}__link`}>My Profile</span>
            <span className={`${CLASS}__link`}>Logout</span>
        </div>
    );
};
export default Header;
