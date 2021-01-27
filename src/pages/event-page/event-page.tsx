import React, { FC, useEffect, useState } from 'react'
import Footer from '../../components/footer/footer'
import TranslationModel from '../../model/translationModel'
import phrases from '../../data/translations.json'
// import IntroScreenTitle from '../../components/intro-screen/intro-screen-title/intro-screen-title'
// import Eventcard from '../../components/event-card/event-card'
import Background from '../../assets/backgrounds/kth_stone_ground.jpg'
// import { TeamMember, getAllTeamMembers } from '../../model/teamModel'
import ContentSection, {
    /*ContentSectionBackground*/
} from '../../components/layout/content-section/content-section'
import './event-page.css'
import IntroScreen from '../../components/intro-screen/intro-screen'
// import IntroText from '../../components/section-title/section-title'
import { isMobile, isSafari } from 'react-device-detect'
// import {getAllEvents} from '../../model/eventModel'
import EventCard from '../../components/event-card/event-card'

const Eventpage: FC = () => {
    let events = [
    {
        id: 1,
        title: {
            se: "Medias Digitala Branchdag",
            en: "Medias Digitala Branchdag"},
        date: {
            se: '25 Februari 2021',
            en: '25 February 2021'
        },
        time: '10:00 - 16:00',
        img: "image4",
        link: "https://www.facebook.com/events/873160383445311",
        tags: [
            {
                se: "IT",
                en: "IT"
            },
            {
                se: "Kommunikation",
                en: "Communication"
            },
            {
                se: "Programutveckling", 
                en: "Software development"
            }

        ],
        background: './assets/events/nymble_beach_flag.jpg',
        location: 'https://digital.mediasbranschdag.com/',
        description: {
            se: "Den 25 februari 2021 är det äntligen dags för Medietekniks årliga branschdagsmässa, Medias Branschdag! För första gången någonsin kommer mässan att hållas digitalt genom onlinetjänsten Graduateland! Det innebär att oavsett var du befinner dig i vårt avlånga land så kommer du kunna vara med.\n\n Möt oss och företag på nätet och knyt värdefulla kontakter inför framtiden! Medias Branschdag ger inte bara studenter ett smakprov på vad arbetslivet har att ge, utan bidrar likväl till att företagen får ett smakprov av vad vi teknologer har att bidra med.\n\nKlicka i 'kommer' på facebook eventet och håll dig uppdaterad på kommande information. Du kan registrera dig på den digitala plattformen 'digital.mediasbranschdag.com' redan nu!\n\nVarmt välkomna!",
            en: "On the 25 of February 2021, it is finally time for Media Technology's annual fair Media's Branschdag! For the first time ever, the fair will be held digitally through the online service Graduateland! This means that no matter where you are in our elongated country, you will be able to participate.\n\n Meet us and companies online and make valuable contacts for the future! Fill in 'yes' on the facebook event and stay updated on upcoming information! Visit 'digital.mediasbranschdag.com' and register a personal account for the fairday.\n\nYou are most welcome!"}
        }]
    

    const logoParts = 3;
    const [logoPartActiveStep, setLogoPartActiveStop] = useState(0);

    useEffect(() => {
        

        // Active a logo part every half secound
        var timeout = setTimeout(() => {
            if (logoPartActiveStep < logoParts) {
                setLogoPartActiveStop(logoPartActiveStep + 1);
            }
        }, 500);

        return () => {
            clearTimeout(timeout);
        }
    }, [logoPartActiveStep]);
    
    return (
        <div>  
            
            <IntroScreen
                title={TranslationModel.translate(phrases.events)}
                backgroundImage={
                    isMobile && isSafari ? Background : undefined
                }
                backgroundVideo={
                    isMobile && isSafari
                        ? undefined
                        : require('../../assets/backgrounds/MotionGraphics_Trim.mp4')}>
                
                <div className="event-intro-text">
                    <div className={`event-text-part ${logoPartActiveStep > 0 ? 'active' : ''}`}>Våra </div>
                    <div className={`event-text-part ${logoPartActiveStep > 1 ? 'active' : ''}`}>aktuella </div>
                    <div className={`event-text-part ${logoPartActiveStep > 2 ? 'active' : ''}`}>event!</div>
                </div>
                </IntroScreen>
            
            <ContentSection>
            <div className='master-container'>
                    {events.map((event) => (
                        <div key={event.id}>
                            <EventCard
                                event={event}
                                key={event.id}
                                onClick={() => {}}
                                showDesc
                                background={event.background}
                            />
                        </div>
                    ))}
                </div>
                        
     
                </ContentSection>
            <Footer />
        </div>
    )
}

export default Eventpage;
