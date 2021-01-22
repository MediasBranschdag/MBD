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
import Masters from '../we-are-page/master-fields.json'
import EventCard from '../../components/event-card/event-card'

const Eventpage: FC = () => {
   //  console.log(getAllEvents())
    
    let events = [
    {
    id: 1,
    title: {
        se: "Medias Digitala Branchdag",
        en: "Medias Digital Fairday"},
    date: '2021-02-24',
    time: '10:00–16:00',
    img: "image4",
    link: "https://www.youtube.com/watch?v=joCwJxI_5wY",
    tags: ["IT, Kommunikation, maskininlärning"],
    background: './assets/events/nymble_beach_flag.jpg',
    description: {
        se: 'Den fjärde februari 2020 är det äntligen dags för Medietekniks årliga branschdagsmässa Medias Branschdag! Hit är ni varmt välkomna att knyta värdefulla kontakter och mingla bland relevanta och spännande företag. Medias Branschdag ger inte bara studenter ett smakprov på vad arbetslivet har att ge, utan bidrar likväl till att företagen får ett smakprov av vad vi teknologer har att bidra med. Branschdagen slår upp dörrarna klockan 10.00 och håller öppet till 16.00. Kvällen avslutas med en sittning som börjar klockan 18.00 och innan dess kan en avnjuta en härlig afterwork-presittning i vår fina sektionslokal META. Varmt välkomna!',
        en: "On the fourth of February 2020, it is finally time for Media Technology's annual fair Media's Branschdag! Here you are warmly welcomed to make valuable contacts and mingle among relevant and exciting companies. The fair will open its doors at 10:00 and is stay open until 16:00. The evening ends with a dinner that starts at 18:00 and before that one can enjoy a lovely afterwork in META. Warm welcome!"}
    },
    { 
    id:2,
    title: {
        se: "Föreläsning om Maskininlärning",
        en: "Lecture about Machine Learning"},
    date: '2021-02-28', 
    time: "17:00-23:00",
    img: "image3",
    link: "https://www.youtube.com/watch?v=CMbj8Wgxg1g",
    tags: ["IT, Kommunikation, maskininlärning"],
    background: './assets/events/dinner_pg_background.png',
    description: {
        se: 'Vem är Schibsted? Varför är Schibsted rätt arbetsgivare för dig som nyexad medieteknikstudent? Hur ska du tänka för att bygga din karriär på ett framgångsrikt sätt?\r\n\r\nDetta får ni veta från Ian Vännman! Han är en tidigare medietekniskstudent som gått från helpdesken på Aftonbladet till grundare av Omni och som nu är Strategichef för Schibsted Media. \r\n\r\nInom Schibstedkoncernen ryms allt ifrån Aftonbladet, SvD, Blocket, Lendo, Letsdeal och Omni för att bara nämna några varumärken - Schibsted är alltså en riktig guldgruva för oss medietekniker!\r\n\r\nVi bjuder på lunch till de 50 första som dyker upp - och vi i Medias Branschdags projektgrupp har med 80 dagar kvar till branschdagen en överraskning du verkligen inte vill missa.... Så kom och inspireras med oss!',
        en: 'engelsk text'}
    }]
    

    const logoParts = 5;
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
                    <div className={`event-text-part ${logoPartActiveStep > 0 ? 'active' : ''}`}>Kolla </div>
                    <div className={`event-text-part ${logoPartActiveStep > 1 ? 'active' : ''}`}>in </div>
                    <div className={`event-text-part ${logoPartActiveStep > 2 ? 'active' : ''}`}>våra </div>
                    <div className={`event-text-part ${logoPartActiveStep > 3 ? 'active' : ''}`}>event </div>
                    <div className={`event-text-part ${logoPartActiveStep > 4 ? 'active' : ''}`}>nedan!</div>
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
