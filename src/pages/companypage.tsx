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
import ContentSection from '../components/layout/content-section/content-section';
import TextSection from '../components/text-section/text-section';
import { MBDDateContext } from '../contexts/mbd-date-provider';

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
                            idRef: "who-are-we",
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

            {/* Info section */}
            <div id="who-are-we">
                <ContentSection>
                    <TextSection>
                        <h1>
                            {TranslationModel.translate(
                                phrases.who_are_we
                            )}?
                        </h1>
                        <MBDDateContext.Consumer>
                            {mbdDate =>
                                TranslationModel.translate({
                                    "se":
                                        <span>
                                            Vi är studenter från civilingenjörsprogrammet i Medieteknik på KTH. 
                                            Vi har masterprogram inom interaktiva medier, datalogi och maskininlärning. 
                                            Många av oss sysslar med bland annat system- webb- och apputveckling. 
                                            Interaktionsdesigners, grafiker och till och med spelutvecklare. 
                                            Hos oss hittar ni blivande projektledare inom IT och studenter som älskar management. 
                                            Vi medietekniker är speciellt bra på att kommunicera mellan teknik- och 
                                            business-avdelningen. Medietekniker har en bred bas and oändligt med möjligheter 
                                            inom teknik-sektorn. Alla de här studenterna, kommer att vara på vår branschdag 
                                            den <b>{mbdDate.getStartDate()}e {mbdDate.getStartMonth()} {mbdDate.getStartYear()}</b>, 
                                            där vi vill att ni deltar. Att synas på Medias Branschdag 
                                            är en otroligt bra möjlighet för er att marknadsföra ert företag och för oss 
                                            studenter är branschdagen ett uppskattat tillfälle kunna nätverka med morgondagens 
                                            arbetsgivare. Medias branschdag är årets bästa tillfälle för er att visa upp er 
                                            verksamhet mot potentiella medarbetare.
                                            <br /><br />
                                            Välkommen!
                                        </span>,
                                    "en":
                                        <span>
                                            We are students from the degree programme in Media Technology at KTH. We have 
                                            master programmes in interactive media, data science and machine learning. A lot 
                                            of our students are focused on system, web and app development. Some like IxD, 
                                            graphics and game development. Among our students you can find future project 
                                            leaders within the IT sector and lovers of management. We are especially good at 
                                            communicating between different departments such as the tech and business. Media 
                                            Technology students have a diverse foundation and endless of possibilities within 
                                            the tech sector. These students will be present at our job fair the 
                                            <b>{mbdDate.getStartDate()}th {mbdDate.getStartMonth()} {mbdDate.getStartYear()}, </b>
                                            and we want you to join them. To be seen at Medias Branschdag is a terrific opportunity 
                                            to promote your company to them. For us students, it is a much appreciated occasion to 
                                            network with future employers. Medias Branschdag is simply the best way for you to 
                                            connect with our students and future employees.
                                            <br /><br />
                                            Welcome!
                                        </span>,
                                })
                            }
                        </MBDDateContext.Consumer>
                    </TextSection>
                </ContentSection>
            </div>

            <Footer/>
        </div>
    );
}

export default Companypage;