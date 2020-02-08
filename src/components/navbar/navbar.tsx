import React from 'react';
import './navbar.css';
import mbdLogo from '../../assets/mbd-logo/mbd-logo-yellow.svg';
import kthLogo from '../../assets/KTH_logo.png';
import medieteknikLogo from '../../assets/medieteknik_logo.png';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-leading navbar-padding">
                <img className="navbar-mbd-logo" src={mbdLogo} alt="MBD Logo"/>
            </div>
            <div className="navbar-content navbar-padding">
                <div className="navbar-link">Starsida</div>
                <div className="navbar-link">För studenter</div>
            </div>
            <div className="navbar-trailing navbar-padding">
                <img className="side-logo" src={medieteknikLogo} alt=""/>
                <img className="side-logo" src={kthLogo} alt=""/>
            </div>
        </div>
    );
}

export default Navbar;