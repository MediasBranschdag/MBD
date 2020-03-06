import React, { useEffect } from 'react';
import './companypage.css';

import { MBDDateContext } from '../contexts/mbd-date-provider';
import TranslationModel from '../model/translationModel';
import phrases from '../data/translations.json';
import Footer from '../components/footer/fotter';
import IntroScreen from '../components/intro-screen/intro-screen';
import IntroScreenButtons from '../components/intro-screen/intro-screen-buttons/intro-screen-buttons';
import ContentSection from '../components/layout/content-section/content-section';
import TextSection, { TextSectionAlignment } from '../components/text-section/text-section';
import CenterBackground from '../components/center-background/center-background';
import OfferCard from '../components/offer-card/offer-card';
import { Button, ButtonTypes } from '../components/button/button';
import TextWithContent from '../components/text-with-content/text-with-content';

import TicketIcon from '../assets/icons/other/tickets_black.svg';
import BoothIcon from '../assets/icons/other/booth_black.svg';
import FoodIcon from '../assets/icons/other/food_black.svg';
import SoundIcon from '../assets/icons/other/sound_black.svg';
import CupIcon from '../assets/icons/other/cup_black.svg';
import ProfileIcon from '../assets/icons/other/profileIcon_black.svg';
import QuestionIcon from '../assets/icons/other/question_mark_black.svg';

import IntroScreenBackground from '../assets/backgrounds/red_flower_dark_blur.jpg';
import PackageFlowerBackground from '../assets/backgrounds/blue_flower_dark_blur.jpg';
import MapBackground from '../assets/backgrounds/map_nymble.jpg';
import Card from '../components/card/card';
import { ContentPadding } from '../components/content-padding';
import { getAllTeamMemebers, getSalesTeamMemebers } from '../model/teamModel';


const Companypage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        getSalesTeamMemebers().then(console.log);
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
                            idRef: "package",
                        },
                        {
                            title: TranslationModel.translate(
                                phrases.the_fair
                            ),
                            iconPath: BoothIcon,
                            idRef: "a",
                        },
                        {
                            title: TranslationModel.translate(
                                phrases.contact
                            ),
                            iconPath: ProfileIcon,
                            idRef: "b",
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
                                    se: <span>
                                        Vi är studenter från civilingenjörsprogrammet i Medieteknik på KTH.
                                        Vi har masterprogram inom interaktiva medier, datalogi och maskininlärning.
                                        Många av oss sysslar med bland annat system- webb- och apputveckling.
                                        Interaktionsdesigners, grafiker och till och med spelutvecklare.
                                        Hos oss hittar ni blivande projektledare inom IT och studenter som älskar management.
                                        Vi medietekniker är speciellt bra på att kommunicera mellan teknik- och
                                        business-avdelningen. Medietekniker har en bred bas and oändligt med möjligheter
                                        inom teknik-sektorn. Alla de här studenterna, kommer att vara på vår branschdag
                                        den <b>{mbdDate.getStartDate()}e {mbdDate.getStartMonth()} {mbdDate.getStartYear()}</b>
                                        där vi vill att ni deltar. Att synas på Medias Branschdag
                                        är en otroligt bra möjlighet för er att marknadsföra ert företag och för oss
                                        studenter är branschdagen ett uppskattat tillfälle kunna nätverka med morgondagens
                                        arbetsgivare. Medias branschdag är årets bästa tillfälle för er att visa upp er
                                        verksamhet mot potentiella medarbetare.
                                        <br /><br />
                                        Välkommen!
                                    </span>,
                                    en: <span>
                                        We are students from the degree programme in Media Technology at KTH. We have
                                        master programmes in interactive media, data science and machine learning. A lot
                                        of our students are focused on system, web and app development. Some like IxD,
                                        graphics and game development. Among our students you can find future project
                                        leaders within the IT sector and lovers of management. We are especially good at
                                        communicating between different departments such as the tech and business. Media
                                        Technology students have a diverse foundation and endless of possibilities within
                                        the tech sector. These students will be present at our job fair 
                                        the <b>{mbdDate.getStartDate()}th {mbdDate.getStartMonth()} {mbdDate.getStartYear()} </b>
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

                <div id="package">
                    <CenterBackground backgroundURL={PackageFlowerBackground}>
                        <ContentSection>
                            <TextSection align={TextSectionAlignment.center}>
                                <h1>
                                    {TranslationModel.translate(phrases.exhibitor_package)}
                                </h1>
                                <h2>
                                    20 000 sek
                                </h2>
                            </TextSection>
                            <div className="companypage-offer">
                                <OfferCard
                                    img={BoothIcon}
                                    altImage="Lounge icon"
                                    text={TranslationModel.translate(phrases.package_showcase_area)} />
                                <OfferCard
                                    img={ProfileIcon}
                                    altImage="Profile icon"
                                    text={TranslationModel.translate(phrases.package_host)} />
                                <OfferCard
                                    img={FoodIcon}
                                    altImage="Food icon"
                                    text={TranslationModel.translate(phrases.package_fika)} />
                                <OfferCard
                                    img={SoundIcon}
                                    altImage="Sound icon"
                                    text={TranslationModel.translate(phrases.package_promotion)} />
                                <OfferCard
                                    img={CupIcon}
                                    altImage="Cup icon"
                                    text={TranslationModel.translate(phrases.package_lounge)} />
                                <OfferCard
                                    img={TicketIcon}
                                    altImage="Ticket icon"
                                    text={TranslationModel.translate(phrases.package_tickets)} />
                            </div>
                            <TextSection align={TextSectionAlignment.center}>
                                <p>
                                    {TranslationModel.translate({
                                        se: <span>
                                            Kontakta oss gärna för anmälan, frågor eller information om våra andra paket!
                                        </span>,
                                        en: <span>
                                            Contact us to apply, ask a question or get information about our other packages!
                                        </span>
                                    })}
                                </p>
                                <Button buttonType={ButtonTypes.normalCompact}>
                                    {TranslationModel.translate(phrases.contact)}
                                </Button>
                            </TextSection>
                        </ContentSection>
                    </CenterBackground>

                    <div className="companypage-fair">
                        <div
                            className="companypage-map-background"
                            style={{backgroundImage: `url(${MapBackground})`}}></div>
                        <div
                            className="companypage-map-background-fade"></div>
                        <ContentSection>
                            <TextWithContent
                                text={
                                    <TextSection>
                                        <h1>
                                            {TranslationModel.translate(phrases.the_fair)}
                                        </h1>
                                        <MBDDateContext.Consumer>
                                            {mbdDate =>
                                                TranslationModel.translate({
                                                    se: <span>
                                                        Mässan startar den <b>{mbdDate.getStartDate()}e {mbdDate.getStartMonth()} {mbdDate.getStartYear()}, </b> och innehåller en heldag spännande företag. 
                                                        Vi kommer att hålla till i THS kårhus, Nymble, som ligger på <b>Drottning Kristinas 
                                                        väg 15</b> vid Kungliga Tekniska Högskolan.
                                                        <br/><br />
                                                        Under dagen är mässan öppen för alla studenter på KTH, men vi riktar oss särskilt 
                                                        mot medieteknikstudenter då dessa har ett brett intresse för design, programmering, 
                                                        och entreprenörskap. Ett perfekt tillfälle för ditt företag att hitta studenter 
                                                        för framtiden!
                                                        <br/><br/>
                                                        Dagen avslutas med en stor sittning där era företagsrepresentanter har möjlighet att 
                                                        komma och äta och mingla med våra studenter i en mer avslappnad miljö.
                                                    </span>,
                                                    en: <span>
                                                        The job fair starts the <b>{mbdDate.getStartDate()}th {mbdDate.getStartMonth()} {mbdDate.getStartYear()}, </b> and consists of a whole day of 
                                                        exciting companies happy to network with students. It is held in THS Student 
                                                        Union building, Nymble, that is located at <b>Drottnings Kristinas väg 15 at KTH</b>.
                                                        <br /><br />
                                                        During the day the fair is open to all students at KTH, but is specifically 
                                                        targeted at Media Technology students since these have a great interest in design, 
                                                        programming and entrepreneurship. A perfect occasion for your company to find 
                                                        your future employees!
                                                        <br /><br />
                                                        At the end of the day a big dinner party is held where 
                                                        your company representatives can attend and network with our students in a more 
                                                        relaxed setting.
                                                    </span>
                                                })
                                            }
                                        </MBDDateContext.Consumer>
                                    </TextSection>
                                }
                                content={
                                    // This is used to make the icon on the map background 
                                    // visibale on small screens
                                    <div className="companypage-see-map-box"></div>
                                }
                            />
                        </ContentSection>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Companypage;