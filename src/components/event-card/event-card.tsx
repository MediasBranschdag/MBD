import React, { FC, useState } from 'react'
import './event-card.css'
import Card from '../card/card'
import TextSection from '../text-section/text-section'
import { ContentPadding } from '../content-padding'
import TranslationModel from '../../model/translationModel'
import dateIcon from '../../assets/icons/other/calendaricon.svg'
import clock from '../../assets/icons/other/clock.svg'
import location from '../../assets/icons/other/location.svg'
import FbIcon from '../../assets/icons/other/fbicon.svg'
import phrases from '../../data/translations.json'
import { Button } from '../button/button'
import ExternalIconBlack from '../../assets/icons/other/external-link-black.svg'
import { Event } from '../../model/eventModel'
import { isMobile } from 'react-device-detect'

interface EventCardProps {
    event: Event
}

const EventCard: FC<EventCardProps> = (props) => {
    const [open, setOpen] = useState(false)

    return (
        <div className='event-card-container no-tap-highlight'>
            <Card light isClickable>
                <div
                    className={`event-card no-tap-highlight  
                        ${open ? 'active' : ''} 
                        ${props.event.image ? 'background' : ''}
                    `}
                    onClick={() => setOpen(!open)}
                    style={{ backgroundImage: `url('${props.event.image}')` }}
                />
                <div className={open ? 'event-card-desc' : 'event-card-closed'}>
                    <ContentPadding>
                        <div className="event-info-strip">

                            <h2>{TranslationModel.translate(props.event.title)}{!isMobile && props.event.fbLink && (
                                <a
                                    href={props.event.fbLink}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <img
                                        src={ExternalIconBlack}
                                        alt=''
                                        className='event-open'
                                    />
                                </a>
                            )}</h2>
                            <span className="date-strip">
                                <img className="date-time-icon" src={dateIcon} alt='' />
                                <span className="info-strip-text">{props.event.date}</span>
                            </span>

                            <span className="date-strip">
                                <img className="date-time-icon" src={clock} alt='' />
                                <span className="info-strip-text">{props.event.time}</span>
                            </span>

                            <span className="link-strip">
                                <img className="date-time-icon" src={location} alt='' />
                                <span className="link-strip-text">
                                    {props.event.location.includes('http') ? <a href={props.event.location} target="_blank" rel="noopener noreferrer">{props.event.location.replace('https://', '').replace('/', '')} <img className='event-open' src={ExternalIconBlack} alt='' /></a>
                                        : props.event.location}

                                </span>
                            </span>

                            <span className="link-strip">
                                <img className="date-time-icon" src={FbIcon} alt='' />
                                <span className="link-strip-text">
                                    <a href={props.event.fbLink} target="_blank" rel="noopener noreferrer">Facebook Event <img className='event-open' src={ExternalIconBlack} alt='' /></a>

                                </span>
                            </span>
                        </div>
                        <TextSection>
                            {TranslationModel.translate(props.event.description)}
                            <br />

                        </TextSection>
                        {open ? <div className="readmore-button" onClick={() => setOpen(!open)}>
                            <Button className='readmore-button-close'>{TranslationModel.translate(phrases.show_less)}</Button>
                        </div> : <div className='fade-bottom'>
                                <div className="readmore-button" onClick={() => setOpen(!open)}>
                                    <Button>{TranslationModel.translate(phrases.read_more)}</Button>
                                </div>
                            </div>}
                    </ContentPadding>
                </div>
            </Card>
        </div>
    )
}

export default EventCard
