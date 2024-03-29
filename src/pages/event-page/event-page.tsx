import React, { FC, useEffect, useState } from 'react'
import './event-page.css'

import Footer from '../../components/footer/footer'
import TranslationModel from '../model/translationModel'
import phrases from '../../data/translations.json'
import Background from '../../assets/backgrounds/kth_stone_ground.jpg'
import ContentSection from '../../components/layout/content-section/content-section'
import IntroScreen from '../../components/intro-screen/intro-screen'
import { isMobile, isSafari } from 'react-device-detect'
import EventCard from '../../components/event-card/event-card'

import { getEvents, Event } from '../model/eventModel'
import SectionTitle from '../../components/section-title/section-title'
import Loader from '../../components/loader/loader'
import TextSection, {
    TextSectionAlignment,
} from '../../components/text-section/text-section'
// import IntroScreenButtons from '../../components/intro-screen/intro-screen-buttons/intro-screen-buttons'
import { Button } from '../../components/button/button'
// import { emphasize } from '@material-ui/core'

const Eventpage: FC = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [events, setEvents] = useState<Event[]>([])
    const [oldEvents, setOldEvents] = useState<Event[]>([])

    useEffect(() => {
        getEvents()
            .then((e) => {
                setEvents(
                    e.filter(
                        (e) =>
                            new Date(
                                parseInt(e.date.split('-')[0]),
                                parseInt(e.date.split('-')[1]) - 1,
                                parseInt(e.date.split('-')[2]),
                                parseInt(e.time.slice(-5, -3))
                            ) >= new Date()
                    )
                )
                setOldEvents(
                    e.filter(
                        (e) =>
                            new Date(
                                parseInt(e.date.split('-')[0]),
                                parseInt(e.date.split('-')[1]) - 1,
                                parseInt(e.date.split('-')[2]),
                                parseInt(e.time.slice(-5, -3))
                            ) < new Date()
                    )
                )
            })
            .finally(() => setIsLoading(false))
    }, [])

    //const logoParts = 3;
    //const [logoPartActiveStep, setLogoPartActiveStop] = useState(0);
    /*
    useEffect(() => {
        var timeout = setTimeout(() => {
            if (logoPartActiveStep < logoParts) {
                setLogoPartActiveStop(logoPartActiveStep + 1);
            }
        }, 500);

        return () => {
            clearTimeout(timeout);
        }
    }, [logoPartActiveStep]);
    */
    /*
    var buttonsIntroEvents: { title: Phrase; scrollTargetID: React.ReactNode }[] = [];
    events.map((e)=>(buttonsIntroEvents.push({title: e.title,
        scrollTargetID: e.id})))*/

    return (
        <div>
            <IntroScreen
                title={TranslationModel.translate(phrases.events)}
                backgroundImage={isMobile && isSafari ? Background : undefined}
                backgroundVideo={
                    isMobile && isSafari
                        ? undefined
                        : require('../../assets/backgrounds/MotionGraphics_Trim.mp4')
                }
            >
                <div className='event-summary'>
                    <div className='event-button-graduateland'>
                        <a href='https://digital.mediasbranschdag.com'>
                            <Button className={'btn--compact'}>
                                {TranslationModel.translate({
                                    se: 'Klicka här för att gå till den digitala mässan',
                                    en: 'Register for the online fair here',
                                })}
                            </Button>
                        </a>
                    </div>
                    {/*
                    <div className="event-intro-text">
                        <div className={`event-text-part ${logoPartActiveStep > 0 ? 'active' : ''}`}>{TranslationModel.translate({ se: 'Våra', en: 'Our' })} </div>
                        <div className={`event-text-part ${logoPartActiveStep > 1 ? 'active' : ''}`}>{TranslationModel.translate({ se: 'aktuella', en: 'current' })} </div>
                        <div className={`event-text-part ${logoPartActiveStep > 2 ? 'active' : ''}`}>{TranslationModel.translate({ se: 'event', en: 'events!' })}</div>
                    </div>
                */}
                </div>
            </IntroScreen>

            <ContentSection>
                {isLoading ? (
                    <TextSection align={TextSectionAlignment.center}>
                        <Loader />
                    </TextSection>
                ) : (
                    <div className='event-container'>
                        {events.map((event, i) => (
                            <div key={event.id + i}>
                                <EventCard key={event.id + i} event={event} />
                            </div>
                        ))}
                        <SectionTitle>
                            {TranslationModel.translate({
                                se: 'Tidigare event',
                                en: 'Previous events',
                            })}
                        </SectionTitle>
                        {oldEvents.map((event, i) => (
                            <div key={event.id + i}>
                                <EventCard key={event.id + i} event={event} />
                            </div>
                        ))}
                    </div>
                )}
            </ContentSection>
            <Footer />
        </div>
    )
}

export default Eventpage
