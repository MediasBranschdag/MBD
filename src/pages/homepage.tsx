import React, { FC } from 'react';
import './homepage.css';

import IntroScreen from '../components/intro-screen/intro-screen';
import IntroScreenBackground from '../assets/backgrounds/leaf_dark_blur.jpg';
import AnimatedMBDLogo from '../components/animated-mbd-logo/animated-mbd-logo';
import Countdown from '../components/countdown/countdown';
import MBDDateContext from '../contexts/mbd-date-context';
import ContentSection from '../components/layout/content-section/content-section';
import TextSection from '../components/text-section/text-section';

import TranslationModel from '../model/translationModel';
import phrases from '../data/translations.json';

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

      <ContentSection>
        <TextSection>
          <h1>
            {TranslationModel.translate(phrases.hello)}!
          </h1>
          <MBDDateContext.Consumer>
            {mbdDate => 
              TranslationModel.translate({
                "se": 
                  `Inspiration och framtidstro. Det kommer kårhuset Nymble genomsyras ` + 
                  `av den ${mbdDate.getStartDate()}e ${mbdDate.getStartMonth()} ${mbdDate.getStartYear()} när dörrarna öppnas till Medias Branschdag! ` + 
                  `Vår årliga branschdagsmässa hålls för att studenter och företag ska ` + 
                  `kunna mötas för utbyten - oavsett om det som söks är ett eventuellt ` + 
                  `sommarjobb eller insikt i vad det egentligen innebär att jobba som  ` +
                  `medietekniker i praktiken. Branschdagen ger inte bara studenter ett ` + 
                  `smakprov på vad arbetslivet har att ge, utan bidrar likväl till att ` + 
                  `företagen får ett smakprov av vad framtida medieteknologer har att  ` +
                  `bidra med. \n\n` +
                  `Vi ses på branschdagen i februari!`,

                "en": 
                  `The student union building Nymble will be filled with inspiration on` +
                  `the ${mbdDate.getStartDate()}th of ${mbdDate.getStartMonth()} ${mbdDate.getStartYear()} when the doors to Medias Branschdag are ` +
                  `opened! Our annual job fair is held to connect students with ` +
                  `companies, whether students might be searching for their future ` +
                  `employer or just want to see what a career as a Media Technology ` +
                  `graduate will entail. The job fair not only gives the students ` +
                  `knowledge of their future, but also serves to show the companies what` +
                  `future media engineers have to offer.\n\n` +
                  `We can’t wait to meet you at the fair in February!`
              })
            }
        </MBDDateContext.Consumer>
        </TextSection>
      </ContentSection>
      
    </div>
  );
}

export default Homepage;
