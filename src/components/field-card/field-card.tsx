import React, { FC, useState, useEffect, Fragment } from 'react'
import './field-card.css'
import Card from '../card/card'
import TextSection from '../text-section/text-section'
import { ContentPadding } from '../content-padding'
import TranslationModel, { Phrase } from '../../pages/model/translationModel'

import phrases from '../../data/translations.json'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import Chip from '../chip/chip'

import ExternalIcon from '../../assets/icons/other/external-link-outline.svg'

export interface Field {
    kth_link?: string
    title: Phrase
    desc: Phrase
    courses?: Array<{ title: Phrase; url: string }>
    tracks?: Array<{ title: Phrase; desc: Phrase }>
}

interface FieldCardProps {
    field: Field
    onClick: () => void
    onMouseEnter?: () => void
    onMouseLeave?: () => void
    showDesc?: boolean
    background?: string
}

const FieldCard: FC<FieldCardProps> = (props) => {
    const windowDimensions = useWindowDimensions()
    const [onMobile, setOnMobile] = useState(false)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        setOnMobile(windowDimensions.width < 800)
    }, [windowDimensions.width])

    const openField = (e: any) => {
        if (!e.target.className.includes('field-external')) {
            setOpen(!open)
        }
    }

    return (
        <div className='field-card-container no-tap-highlight'>
            <Card light isClickable>
                <div
                    className={`field-card no-tap-highlight  
                        ${open ? 'active' : ''} 
                        ${props.background ? 'background' : ''}
                    `}
                    onClick={openField}
                    style={{ backgroundImage: `url('${props.background}')` }}
                >
                    <h2>
                        {TranslationModel.translate(props.field.title)}
                        {!onMobile && props.field.kth_link && (
                            <a
                                href={props.field.kth_link}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                
                                <img
                                    src={ExternalIcon}
                                    alt=''
                                    className='field-external'
                                />
                            </a>
                        )}
                    </h2>
                    <div>
                        {props.showDesc && !onMobile && (
                            <>
                                <br />
                                {props.field.tracks && (
                                    <>
                                        {props.field.tracks.map((track) => (
                                            <div
                                                className='field-chip-cont'
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
                    <div className='field-card-desc'>
                        <ContentPadding>
                            <TextSection>
                                {TranslationModel.translate(props.field.desc)}
                                <br />
                                {props.field.courses && (
                                    <>
                                        <h4>
                                            {TranslationModel.translate(
                                                phrases.we_are_media_technology
                                                    .courses_within
                                            )}
                                        </h4>
                                        {props.field.courses.map((course) => (
                                            <div
                                                className='field-chip-cont'
                                                key={`${props.field.title.se}_${course.title.se}`}
                                            >
                                                <a
                                                    href={course.url}
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                >
                                                    <Chip clickable>
                                                        {TranslationModel.translate(
                                                            course.title
                                                        )}
                                                    </Chip>
                                                </a>
                                            </div>
                                        ))}
                                    </>
                                )}
                                {props.field.tracks && onMobile && (
                                    <>
                                        <h4>
                                            {TranslationModel.translate(
                                                phrases.we_are_media_technology
                                                    .tracks
                                            )}
                                        </h4>
                                        {props.field.tracks.map((track) => (
                                            <Fragment key={`${track.title.se}`}>
                                                <Chip>
                                                    {TranslationModel.translate(
                                                        track.title
                                                    )}
                                                </Chip>
                                            </Fragment>
                                        ))}
                                    </>
                                )}
                            </TextSection>
                        </ContentPadding>
                    </div>
                ) : (
                    <></>
                )}
            </Card>
        </div>
    )
}

export default FieldCard
