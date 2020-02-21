import React, { useEffect } from 'react';
import Footer from '../components/footer/fotter';
import IntroScreen from '../components/intro-screen/intro-screen';

import IntroScreenBackground from '../assets/backgrounds/red_flower_dark_blur.jpg';

import TranslationModel from '../model/translationModel';
import phrases from '../data/translations.json';
import IntroScreenButtons from '../components/intro-screen/intro-screen-buttons/intro-screen-buttons';

import TicketIcon from '../assets/icons/other/tickets_black.svg';
import BoothIcon from '../assets/icons/other/booth_black.svg';
import ProfileIcon from '../assets/icons/other/profileIcon_black.svg';
import QuestionIcon from '../assets/icons/other/question_mark_black.svg';

const Companypage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="companypage">
            <IntroScreen 
                backgroundImage={IntroScreenBackground}
                title={TranslationModel.translate(phrases.for_companies)}
                >
                <IntroScreenButtons
                    buttons={[
                        {
                            title: TranslationModel.translate(
                                phrases.about_us
                            ),
                            iconPath: QuestionIcon,
                            idRef: "",
                        },
                        {
                            title: TranslationModel.translate(
                                phrases.participate
                            ),
                            iconPath: TicketIcon,
                            idRef: "",
                        },
                        {
                            title: TranslationModel.translate(
                                phrases.the_fair
                            ),
                            iconPath: BoothIcon,
                            idRef: "",
                        },
                        {
                            title: TranslationModel.translate(
                                phrases.contact
                            ),
                            iconPath: ProfileIcon,
                            idRef: "",
                        },
                    ]}
                />
            </IntroScreen>
            <Footer/>
        </div>
    );
}

export default Companypage;