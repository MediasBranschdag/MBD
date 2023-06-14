import React, { FC, Fragment } from 'react'

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

import TextSection from '../../components/text-section/text-section'
import TextWithContent from '../../components/text-with-content/text-with-content'
import { MBDDateContext } from '../../contexts/mbd-date-provider'
import MapBackground from '../../assets/backgrounds/we-are-medieteknik.png'

const WeArePage: FC = () => {
    return (
        <div className='what-is-page'>
            <div id='companypage-fair' className='companypage-fair'>
                <div
                    className='media-background'
                    style={{ backgroundImage: `url(${MapBackground})` }}
                ></div>

                <ContentSection>
                    <TextWithContent
                        text={
                            <TextSection>
                                <h1>
                                    <SectionTitle>
                                        {TranslationModel.translate(
                                            phrases.we_are_media_technology
                                                .about_media_technology
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
                        }
                        content={
                            // This is used to make the icon on the map background
                            // visibale on small screens
                            <div className='companypage-see-map-box'></div>
                        }
                    />
                </ContentSection>
            </div>

            <div id='master-programmes' />
            <ContentSection background={ContentSectionBackground.dark}>
                <SectionTitle align={TitleSectionAlignment.center}>
                    {TranslationModel.translate(
                        phrases.we_are_media_technology.masters
                    )}
                </SectionTitle>
                <div className='master-container'>
                    {Masters.map((field) => (
                        <div key={field.title.se}>
                            <FieldCard
                                field={field}
                                key={field.title.se}
                                onClick={() => {}}
                                showDesc
                                background={field.background}
                            />
                        </div>
                    ))}
                </div>
            </ContentSection>
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

            <Footer />
        </div>
    )
}

export default WeArePage
