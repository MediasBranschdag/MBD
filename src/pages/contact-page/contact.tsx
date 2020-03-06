import React, { FC, useEffect, useState } from 'react';
import './homepage.css';

import IntroScreen from '../../components/intro-screen/intro-screen';

import IntroScreenBackground from '../assets/backgrounds/leaf_dark_blur.jpg';
import Footer from '../../components/footer/fotter';

const Contactpage: FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="homepage">

            {/* Logo and countdown */}
            <IntroScreen backgroundImage={IntroScreenBackground}>
                <div className="homepage-intro-content">
                </div>
            </IntroScreen>

            <Footer/>
        </div>
    );
}

export default Contactpage;
