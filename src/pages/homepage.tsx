import React, { FC, useEffect, useState } from 'react';
import IntroScreen from '../components/intro-screen/intro-screen';
import IntroScreenBackground from '../assets/backgrounds/leaf_dark_blur.jpg';
import AnimatedMBDLogo from '../components/animated-mbd-logo/animated-mbd-logo';

import './homepage.css';
import Countdown from '../components/countdown/countdown';
import MBDDateContext from '../contexts/mbd-date-context';

const Homepage: FC = () => {
  return (
    <div className="homepage">
      <IntroScreen backgroundImage={IntroScreenBackground}>
        <div className="homepage-intro-content">
          <AnimatedMBDLogo/>
          <MBDDateContext.Consumer>
            {mbdDate => <Countdown mbdDate={mbdDate}/>}
          </MBDDateContext.Consumer>
        </div>
      </IntroScreen>
    </div>
  );
}

export default Homepage;
