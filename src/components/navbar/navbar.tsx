import React, { useState } from 'react';
import './navbar.css';

import Routes from '../../routes/routes';
import { NavLink } from "react-router-dom";

import mbdLogo from '../../assets/mbd-logo/mbd-logo-yellow.svg';
import kthLogo from '../../assets/KTH_logo.png';
import medieteknikLogo from '../../assets/medieteknik_logo.png';
import HamburgerButton from '../hamburger-button/hamburger-button';

const Navbar = () => {

    const [mobileMenuOpen, toogleMobileMenuOpen] = useState(false);

    return (
        <div className="navbar">
            <div className="navbar-leading navbar-padding">
                <img className="navbar-mbd-logo" src={mbdLogo} alt="MBD Logo"/>
            </div>
            <div className={`navbar-content navbar-padding ${mobileMenuOpen ? 'active' : ''}`}>
                {
                    Routes.map((route) => {
                        return <NavLink 
                            exact
                            className="navbar-link"
                            activeClassName="navbar-link active"
                            onClick={() => toogleMobileMenuOpen(!mobileMenuOpen)}
                            to={route.path} 
                            key={route.path}>
                            {route.name}
                        </NavLink>
                    })
                }
            </div>
            <div className="navbar-trailing navbar-padding">
                <img className="side-logo" src={medieteknikLogo} alt=""/>
                <img className="side-logo" src={kthLogo} alt=""/>

                <div className="navbar-mobile-menu-button">
                    <HamburgerButton 
                        onClick={() => {toogleMobileMenuOpen(!mobileMenuOpen)}} 
                        isActive={mobileMenuOpen}/>
                </div>
            </div>
        </div>
    );
}

export default Navbar;