import React, { FC, useState, useEffect, Fragment } from 'react'
import './event-card.css'
import Card from '../card/card'
import TextSection from '../text-section/text-section'
import { ContentPadding } from '../content-padding'
import TranslationModel, { Phrase } from '../../model/translationModel'

import phrases from '../../data/translations.json'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import Chip from '../chip/chip'

import ExternalIcon from '../../assets/icons/other/external-link-outline.svg'

export interface Event {
    link?: string
    title: Phrase
    description: Phrase
    courses?: Array<{ title: Phrase; url: string }>
    tracks?: Array<{ title: Phrase; desc: Phrase }>
    date: string
    time: string
}

interface EventCardProps {
    event: Event
    onClick: () => void
    onMouseEnter?: () => void
    onMouseLeave?: () => void
    showDesc?: boolean
    background?: string
}

const EventCard: FC<EventCardProps> = (props) => {
    const windowDimensions = useWindowDimensions()
    const [onMobile, setOnMobile] = useState(false)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        setOnMobile(windowDimensions.width < 800)
    }, [windowDimensions.width])

    const openEvent = (e: any) => {
        if (!e.target.className.includes('open-event')) {
            setOpen(!open)
        }
    }

    return (
        <div className='event-card-container no-tap-highlight'>
            <Card light isClickable>
                <div
                    className={`event-card no-tap-highlight  
                        ${open ? 'active' : ''} 
                        ${props.background ? 'background' : ''}
                    `}
                    onClick={openEvent}
                    style={{ backgroundImage: `url('${props.background}')` }}
                >
                    <h2>
                        {TranslationModel.translate(props.event.title)}
                        {!onMobile && props.event.link && (
                            <a
                                href={props.event.link}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <img
                                    src={ExternalIcon}
                                    alt=''
                                    className='event-open'
                                />
                            </a>
                        )}
                    </h2>
                    <div>
                        {props.showDesc && !onMobile && (
                            <>
                                <br />
                                {props.event.tracks && (
                                    <>
                                        {props.event.tracks.map((track) => (
                                            <div
                                                className='event-chip-cont'
                                                key={`${track.title.se}`}
                                            >
                                                <Chip>
                                                    {TranslationModel.translate(
                                                        track.title
                                                    )}
                                                </Chip>
                                            </div>
                                        ))}
                                    </>
                                )}
                            </>
                        )}
                    </div>
                </div>
                {open ? (
                    <div className='event-card-desc'>
                        <ContentPadding>
                            <TextSection>
                                {TranslationModel.translate(props.event.description)}
                                <br />
                                
                            </TextSection>
                        </ContentPadding>
                    </div>
                ) : (
                    <div className='event-card-closed'>
                    <ContentPadding>
                        <TextSection>
                            {TranslationModel.translate(props.event.description)}
                            <br />
                            
                        </TextSection>
                        <div className='fade-bottom'>
                            
                        </div>
                    </ContentPadding>
                </div>
                )}
            </Card>
        </div>
    )
}

export default EventCard
