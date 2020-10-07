import React, { FC, useState, useEffect } from 'react'
import './field-card.css'
import Card from '../card/card'
import TextSection from '../text-section/text-section'
import { ContentPadding } from '../content-padding'
import TranslationModel, { Phrase } from '../../model/translationModel'

import phrases from '../../data/translations.json'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import Chip from '../chip/chip'

export interface Field {
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
    background?: string,
}

const FieldCard: FC<FieldCardProps> = (props) => {
    const windowDimensions = useWindowDimensions()
    const [onMobile, setOnMobile] = useState(false)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        setOnMobile(windowDimensions.width < 700)
    }, [windowDimensions.width])

    return (
        <div
            className='field-card-container no-tap-highlight'
        >
            <Card
                isClickable={true}
                light={true}
            >
                <div
                    className={`field-card 
                        ${open ? 'active' : ''} 
                        ${props.background ? 'background' : ''}
                    `}
                    onClick={() => setOpen(!open)}
                    style={{backgroundImage: `url('${props.background}')`}}
                >
                    <h2>{TranslationModel.translate(props.field.title)}</h2>
                    { (props.showDesc && !onMobile) && <><br/>{TranslationModel.translate(props.field.desc)} </>}
                </div>
                {open ? (
                    <ContentPadding>
                        <TextSection>
                            { (!props.showDesc || onMobile) && <>{TranslationModel.translate(props.field.desc)} <br /><br /></>}
                            
                            
                            { props.field.courses && <>Kurser inom området:
                            {props.field.courses.map((course) => (
                                <Chip>
                                    {TranslationModel.translate(course.title)}
                                </Chip>
                            ))}</>}
                            { props.field.tracks && <>Inriktningar:
                            {props.field.tracks.map((track) => (
                                <Chip>
                                    {TranslationModel.translate(track.title)}
                                </Chip>
                            ))}</>}
                        </TextSection>
                    </ContentPadding>
                ) : (
                    <></>
                )}
            </Card>
        </div>
    )
}

export default FieldCard
