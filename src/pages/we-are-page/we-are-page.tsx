import React, { FC, Fragment, useEffect, useState } from 'react'

import Footer from '../../components/footer/footer'
import './we-are-page.css'
import TranslationModel from '../model/translationModel'
import phrases from '../../data/translations.json'
import ContentSection, {
    ContentSectionBackground,
} from '../../components/layout/content-section/content-section'

import FieldCard from '../../components/field-card/field-card'
import SectionTitle, {
    TitleSectionAlignment,
} from '../../components/section-title/section-title'

import UndergraduateFields from './undergraduate-fields.json'
import Masters from './master-fields.json'
import UndergraduateDescription from './undergraduate-description.json'

import TextSection, { TextSectionAlignment } from '../../components/text-section/text-section'
import TextWithContent from '../../components/text-with-content/text-with-content'
import { MBDDateContext } from '../../contexts/mbd-date-provider'
import MapBackground from '../../assets/backgrounds/we-are-medieteknik.png'

import IntroScreenTitle from '../../components/intro-screen/intro-screen-title/intro-screen-title'

import HalfHalfCard from '../../components/half-half-card/half-half-card'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import { spawn } from 'child_process'

const WeArePage: FC = () => {

    const windowDimensions = useWindowDimensions();
        const [onMobile, _setOnMobile] = useState(false);
    
        useEffect(() => {
                _setOnMobile(windowDimensions.width <= 850)
            }, [windowDimensions.width]);

    return (
        <div className='what-is-page'>

            <IntroScreenTitle noGradient = {true}>{TranslationModel.translate(
                phrases.we_are_media_technology.about_media_technology
                )}</IntroScreenTitle>


            <div id='companypage-fair' className='companypage-fair'>
                <div
                    className='media-background'
                    style={{ backgroundImage: `url(${MapBackground})` }}
                ></div>

                <ContentSection>
                    <TextSection>
                                <h1>
                                    <SectionTitle>
                                        {TranslationModel.translate(
                                            phrases.we_are_media_technology
                                                .what_is_media_technology
                                        )}
                                    </SectionTitle>
                                </h1>
                                <MBDDateContext.Consumer>
                                    {(mbdDate) =>
                                        TranslationModel.translate({
                                            se: (
                                                <span>
                                                    Medieteknik är en teknisk
                                                    utbildning med fokus på att
                                                    utveckla nya sätt för
                                                    människor att kommunicera.
                                                    Studenter lär sig att
                                                    utveckla medietekniska
                                                    lösningar, datasystem och
                                                    gränssnitt som förenklar och
                                                    förbättrar mänsklig
                                                    kommunikation och
                                                    interaktion.
                                                    <br />
                                                    <br />
                                                    Utbildningen innehåller
                                                    mycket matematik och
                                                    programmering, men den är
                                                    också kreativ då lösningar
                                                    ofta integrerar olika typer
                                                    av media, som video och
                                                    ljud, med tekniken.
                                                </span>
                                            ),
                                            en: (
                                                <span>
                                                    Media Technology is a
                                                    technical education with a
                                                    focus on new ways of human
                                                    communication. Students are
                                                    taugh how to develop media
                                                    technology solutions,
                                                    computer systems and user
                                                    interfaces that simplify and
                                                    improve human communication
                                                    and interaction.
                                                    <br />
                                                    <br />
                                                    The education contains a lot
                                                    mathematics and programming,
                                                    but it is also creative
                                                    since solutions often
                                                    integrates different types
                                                    of media such as video and
                                                    sound with other digital
                                                    technology.
                                                </span>
                                            ),
                                        })
                                    }
                                </MBDDateContext.Consumer>
                            </TextSection>
                </ContentSection>
            </div>
            <div>
                
                
                <ContentSection>
                    <SectionTitle>
                    {TranslationModel.translate(
                        phrases.we_are_media_technology.undergraduate_degrgee
                    )}
                </SectionTitle>
                    <TextSection>

                        {Object.values(UndergraduateDescription.undergraduate_description).map(
                            (year, index) => (
                            <p key={index}>
                                {TranslationModel.translate(year)}
                            </p>
                            )
                        )}
                    </TextSection>
                </ContentSection>

                
                
            </div>

            <div id='master-programmes' />
            <ContentSection>
                <SectionTitle align={TitleSectionAlignment.center}>
                    {TranslationModel.translate(
                        phrases.we_are_media_technology.masters
                    )}
                </SectionTitle>
        
                <div className='master-container'>
                    {Masters.map((field) => {
                        const isOdd = onMobile? false : !(field.id%2);
                        
                        const partOne = {
                            width: '60%',
                            content: <div className='content'>
                                        <h3>{TranslationModel.translate(field.title)}</h3>
                                        <p>{TranslationModel.translate(field.desc)}</p>
                                    </div>
                        }
                        const partTwo = {
                            width: '40%',
                            content: <img src={field.background} className='image'/>
                        }

                        return(
                        <div key={field.id}>
                            <HalfHalfCard
                                left_max_h='200px'
                                left_width={onMobile? undefined : (isOdd? partOne.width : partTwo.width)}
                                right_width={onMobile? undefined : isOdd? partTwo.width : partOne.width}
                                left_content={isOdd? partOne.content : partTwo.content}
                                right_content={isOdd? partTwo.content : partOne.content}
                                />
                        </div>
                    )})}
                </div>
            </ContentSection>

        </div>
    )
}

export default WeArePage

/* OLD CARDS DISPLAYING INFO ABOUT UNDERGRADUATE AREAS */
/*
<div id='undergraduate-fields' />
            <ContentSection>
                <SectionTitle align={TitleSectionAlignment.center}>
                    {TranslationModel.translate(
                        phrases.we_are_media_technology.undergraduate_fields
                    )}
                </SectionTitle>
                {UndergraduateFields.map((field) => (
                    <Fragment key={field.title.se}>
                        <FieldCard
                            field={field}
                            key={field.title.se}
                            onClick={() => {}}
                        />
                    </Fragment>
                ))}
            </ContentSection>
*/