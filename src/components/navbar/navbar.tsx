import React, { useState } from 'react';
import './navbar.css';

import Routes from '../../routes/routes';
import { NavLink } from 'react-router-dom';

import mbdLogo from '../../assets/mbd-logo/mbd-logo-yellow.svg';
import kthLogo from '../../assets/KTH_logo.png';
import medieteknikLogo from '../../assets/medieteknik_logo.png';
import HamburgerButton from '../hamburger-button/hamburger-button';
import InstagramIconWhite from '../../assets/icons/other/instagram_white.png'
import FacebookIconWhite from '../../assets/icons/other/facebook_white.png'
import LinkedIconWhite from '../../assets/icons/other/linked_in_white.png'
import InstagramIconYellow from '../../assets/icons/other/instagram_icon_yellow.png'
import FacebookIconYellow from '../../assets/icons/other/facebook_icon_yellow.png'
import LinkedinIconYellow from '../../assets/icons/other/linkedin_icon_yellow.png'


import TranslationModel from '../../model/translationModel';
import LanguageSelect from './language-select/language-select';
import { Line, LineType } from '../lines/line';

const Navbar = () => {

    const [mobileMenuOpen, toogleMobileMenuOpen] = useState(false);
    const [instagranIcon, setInstagranIcon] = useState(InstagramIconWhite)
    const [FacebookIcon, setFacebookIcon] = useState(FacebookIconWhite)
    const [LinkedInIcon, setLinkedInIcon] = useState(LinkedIconWhite)

    const openFacebook = () => {
        window.open("https://www.facebook.com/mediasbranschdag", "Medias Branschdag Facebook")
    }
    const openInstagram = () => {
        window.open("https://www.instagram.com/mediasbranschdag/", "Medias Branschdag Instagram")
    }
    const openLinkedin = () => {
        window.open("https://www.linkedin.com/company/medias-branschdag/", "Medias Branschdag LinkedIn")
    }


    return (
        <div className='navbar'>
            <div className='navbar-leading navbar-padding'>
                <NavLink className='no-select' exact to='/'>
                    <img className='navbar-mbd-logo' src={mbdLogo} alt='MBD Logo' />
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
                    <LanguageSelect />
                </div>

                <div className='navbar-trailing-item'>
                    <Line lineType={LineType.vertical} />
                </div>


                <img className='side-logo navbar-trailing-item ' src={instagranIcon} onMouseEnter={() => setInstagranIcon(InstagramIconYellow)}
                    onMouseOut={() => setInstagranIcon(InstagramIconWhite)} alt='' onClick={openInstagram} />
                <img className='side-logo navbar-trailing-item ' src={FacebookIcon} onMouseEnter={() => setFacebookIcon(FacebookIconYellow)}
                    onMouseOut={() => setFacebookIcon(FacebookIconWhite)} alt='' onClick={openFacebook} />
                <img className='side-logo navbar-trailing-item ' src={LinkedInIcon} onMouseEnter={() => setLinkedInIcon(LinkedinIconYellow)}
                    onMouseOut={() => setLinkedInIcon(LinkedIconWhite)} alt='' onClick={openLinkedin} />

                <div className='navbar-mobile-menu-button navbar-trailing-item '>
                    <HamburgerButton
                        onClick={() => { toogleMobileMenuOpen(!mobileMenuOpen) }}
                        isActive={mobileMenuOpen} />
                </div>
            </div>
        </div>
    );
}

export default Navbar;