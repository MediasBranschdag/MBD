import React, { useState } from 'react';
import './navbar.css';

import Routes from '../../routes/routes';
import { NavLink } from 'react-router-dom';

import mbdLogo from '../../assets/mbd-logo/mbd-logo-yellow.svg';
import kthLogo from '../../assets/KTH_logo.png';
import medieteknikLogo from '../../assets/medieteknik_logo.png';
import HamburgerButton from '../hamburger-button/hamburger-button';

import TranslationModel from '../../model/translationModel';
import LanguageSelect from './language-select/language-select';
import { Line, LineType } from '../lines/line';

const Navbar = () => {

    const [mobileMenuOpen, toogleMobileMenuOpen] = useState(false);

    return (
        <div className='navbar'>
            <div className='navbar-leading navbar-padding'>
                <NavLink className='no-select' exact to='/'>
                    <img className='navbar-mbd-logo' src={mbdLogo} alt='MBD Logo'/>
                </NavLink>
            </div>
            <div className={`navbar-content navbar-padding ${mobileMenuOpen ? 'active' : ''}`}>
                {
                    Object.values(Routes).filter(route => route.inMenu).map((route) => {
                        return <NavLink 
                            exact
                            className='navbar-link'
                            activeClassName='navbar-link active'
                            onClick={() => toogleMobileMenuOpen(!mobileMenuOpen)}
                            to={route.path} 
                            key={route.path}>
                            {TranslationModel.translate(route.name)}
                        </NavLink>
                    })
                }
            </div>
            <div className='navbar-trailing navbar-padding'>
                <div className='navbar-trailing-item'>
                    <LanguageSelect/>
                </div>

                <div className='navbar-trailing-item'>
                    <Line lineType={LineType.vertical}/>
                </div>

                <img className='side-logo navbar-trailing-item ' src={medieteknikLogo} alt=''/>
                <img className='side-logo navbar-trailing-item ' src={kthLogo} alt=''/>

                <div className='navbar-mobile-menu-button navbar-trailing-item '>
                    <HamburgerButton 
                        onClick={() => {toogleMobileMenuOpen(!mobileMenuOpen)}} 
                        isActive={mobileMenuOpen}/>
                </div>
            </div>
        </div>
    );
}

export default Navbar;