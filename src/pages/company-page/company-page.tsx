import React, { useEffect, useState } from 'react'
import './company-page.css'
import {Button} from "../../components/button/button"
import { MBDDateContext } from '../../contexts/mbd-date-provider'
import TranslationModel from '../model/translationModel'
import phrases from '../../data/translations.json'
import Footer from '../../components/footer/footer'
import ContentSection, {
    ContentSectionBackground,
} from '../../components/layout/content-section/content-section'
import TextSection, {
    TextSectionAlignment,
} from '../../components/text-section/text-section'
import MapBackground from '../../assets/backgrounds/map_nymble.jpg'
import SectionTitle, {
    TitleSectionAlignment,
} from '../../components/section-title/section-title'

import Card from '../../components/card/card'
import { ContentPadding } from '../../components/content-padding'
import { ContentPaddingThin } from '../../components/content-padding-thin'
import TextWithContent from '../../components/text-with-content/text-with-content'
import ContactForm from '../contact-page/contact-form/contact-form'

const Companypage = () => {
    return (
        <div className='companypage'>
            <div id='companypage-fair' className='companypage-fair'>
                <div
                    className='companypage-map-background'
                    style={{ backgroundImage: `url(${MapBackground})` }}
                ></div>
                <div className='companypage-map-background-fade'></div>
                <ContentSection>
                    <TextWithContent
                        text={
                            <TextSection>
                                <h1>
                                    <SectionTitle
                                        align={TitleSectionAlignment.left}
                                    >
                                        {TranslationModel.translate(
                                            phrases.the_fair
                                        )}
                                    </SectionTitle>
                                </h1>
                                <MBDDateContext.Consumer>
                                    {(mbdDate) =>
                                        TranslationModel.translate({
                                            se: (
                                                <span>
                                                    Mässan kommer äga rum{' '}
                                                    <b>
                                                        {/*våren 2025*/}
                                                    
                                                        {20}{' '}
                                                        {TranslationModel.translate(
                                                            phrases.months
                                                                .march
                                                        )}{' '}
                                                        {2025}{' '}
                                                    </b>{' '}
                                                    och innehåller en heldag
                                                    spännande företag. Vi kommer
                                                    att hålla till i THS kårhus,
                                                    Nymble, som ligger på{' '}
                                                    <b>
                                                        Drottning Kristinas väg
                                                        15
                                                    </b>{' '}
                                                    vid Kungliga Tekniska
                                                    Högskolan.
                                                    <br />
                                                    <br />
                                                    Under dagen är mässan öppen
                                                    för alla studenter på KTH,
                                                    men vi riktar oss särskilt
                                                    mot medieteknikstudenter då
                                                    dessa har ett brett intresse
                                                    för design, programmering,
                                                    och entreprenörskap. Ett
                                                    perfekt tillfälle för ditt
                                                    företag att hitta studenter
                                                    för framtiden!
                                                    <br />
                                                    <br />
                                                    Dagen avslutas med en stor
                                                    sittning där era
                                                    företagsrepresentanter har
                                                    möjlighet att komma och äta
                                                    och mingla med våra
                                                    studenter i en mer
                                                    avslappnad miljö.
                                                </span>
                                            ),
                                            en: (
                                                <span>
                                                    The job fair starts in{' '}
                                                    <b>
                                                        {/*spring 2025*/}
                                                        {20}{'th '}
                                                        {TranslationModel.translate(
                                                            phrases.months
                                                                .march
                                                        )}{' '}
                                                        {2025}{' '}
                                                    </b>{' '}
                                                    and consists of a whole day
                                                    of exciting companies happy
                                                    to network with students. It
                                                    is held in THS Student Union
                                                    building, Nymble, that is
                                                    located at{' '}
                                                    <b>
                                                        Drottnings Kristinas väg
                                                        15 at KTH
                                                    </b>
                                                    .
                                                    <br />
                                                    <br />
                                                    During the day the fair is
                                                    open to all students at KTH,
                                                    but is specifically targeted
                                                    at Media Technology students
                                                    since these have a great
                                                    interest in design,
                                                    programming and
                                                    entrepreneurship. A perfect
                                                    occasion for your company to
                                                    find your future employees!
                                                    <br />
                                                    <br />
                                                    At the end of the day a big
                                                    dinner party is held where
                                                    your company representatives
                                                    can attend and network with
                                                    our students in a more
                                                    relaxed setting.
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
            <ContentSection>
                <br />
                {/* Package section */}
                <div id='companypage-package'>
                    <TextSection align={TextSectionAlignment.center}>
                        <SectionTitle align={TitleSectionAlignment.center}>
                            {TranslationModel.translate(
                                phrases.exhibitor_packages
                            )}
                        </SectionTitle>
                    </TextSection>
                    {/*
                    <div className='companypage-offer'>
                    {TranslationModel.translate({
                                        se: (
                                            <>
                                            <p className="text-center">Mer information kommer snart...</p>
                                            </>),
                                        en: (
                                            <>
                                            <p className="text-center">More information coming soon...</p>
                                            </>)
                                            })}
                    </div>*/}
                    {<div className='companypage-offer'>
                        <Card light gold>
                            <ContentPaddingThin>
                                <Card light>
                                    {TranslationModel.translate({
                                        se: (
                                            <>
                                                <br/>
                                                <h3>Guldpaketet</h3>
                                                <h3>58 000kr</h3>
                                                <br />
                                                <p>
                                                    <b>På Branchdagen:</b>
                                                    <ul>
                                                        <li>
                                                            8m² för monter centralt på mässan
                                                        </li>
                                                        <li>
                                                            Två ståbord och fyra stolar
                                                        </li>
                                                        <li>
                                                            Två personliga företagsvärdar
                                                        </li>
                                                        <li>
                                                            Fyra
                                                            sittningsbiljetter samt
                                                            lunch och fika för
                                                            fyra
                                                        </li>
                                                        <li>
                                                            Exponering på
                                                            hemsida, våra sociala
                                                            medier samt på
                                                            kläder under
                                                            branschdagen
                                                        </li>
                                                    </ul>
                                                    <b>Event:</b>{' '}
                                                    <ul>
                                                        <li>
                                                            Exempelvis en
                                                            lunchföreläsning
                                                            eller pub - mat till 50 personer ingår<br></br>
                                                            Kostnad för drinkbiljetter tillkommer á 30kr
                                                        </li>
                                                    </ul>
                                                    <b>Annons:</b>
                                                    <ul>
                                                        <li>
                                                            På
                                                            hemsida, Instagram
                                                            och Facebook.
                                                        </li>
                                                    </ul>
                                                </p>
                                            </>
                                        ),
                                        en: (
                                            <>
                                                <br/>
                                                <h3>Gold Package</h3>
                                                <h3>SEK 58 000</h3>
                                                <br />
                                                <p>
                                                    <b>On the day of the fair:</b>
                                                    <ul>
                                                        <li>
                                                            8m² for a stand
                                                        </li>
                                                        <li>
                                                            Two standing tables and four chairs
                                                        </li>
                                                        <li>
                                                            Two personal company hosts
                                                        </li>
                                                        <li>
                                                            Four dinner tickets, and lunch and coffee for four
                                                        </li>
                                                        <li>
                                                            Exposure on the website, our social media and on clothes during the fair
                                                        </li>
                                                    </ul>
                                                    <b>Event:</b>{' '}
                                                    <ul>
                                                        <li>
                                                            For example a lunch lecture or a pub - food for 50 people is included<br></br>
                                                            The cost of drink tickets is SEK 30 per ticket
                                                        </li>
                                                    </ul>
                                                    <b>Advert:</b>
                                                    <ul>
                                                        <li>
                                                            On website, Instagram and Facebook
                                                        </li>
                                                    </ul>
                                                </p>
                                            </>
                                        ),
                                    })}
                                </Card>
                            </ContentPaddingThin>
                        </Card>
                        <Card light silver>
                            <ContentPaddingThin>
                                <Card light>
                                    {TranslationModel.translate({
                                        se: (
                                            <>
                                                <br/>
                                                <h3>Silverpaketet</h3>
                                                <h3>36 000kr</h3>
                                                <br />
                                                <p>
                                                    <b>På Branchdagen:</b>
                                                    <ul>
                                                        <li>
                                                            6m² för monter
                                                        </li>
                                                        <li>
                                                            Ett ståbord och två stolar
                                                        </li>
                                                        <li>
                                                            En
                                                            personlig
                                                            företagsvärd
                                                        </li>
                                                        <li>
                                                            Två
                                                            sittningsbiljetter samt
                                                            lunch och fika för
                                                            två
                                                        </li>
                                                        <li>
                                                            Exponering på
                                                            hemsida och våra sociala
                                                            medier
                                                        </li>
                                                    </ul>
                                                </p>
                                            </>
                                        ),
                                        en: (
                                            <>
                                                <br/>
                                                <h3>Silverpaketet</h3>
                                                <h3>SEK 36 000</h3>
                                                <br />
                                                <p>
                                                    <b>On the day of the fair:</b>
                                                    <ul>
                                                        <li>
                                                            6m² for a stand
                                                        </li>
                                                        <li>
                                                            One standing table and two chairs
                                                        </li>
                                                        <li>
                                                            One personal company host
                                                        </li>
                                                        <li>
                                                            Two dinner tickets, and lunch and coffee for two
                                                        </li>
                                                        <li>
                                                            Exposure on the website and our social media
                                                        </li>
                                                    </ul>
                                                </p>
                                            </>
                                        ),
                                    })}
                                </Card>
                            </ContentPaddingThin>
                        </Card>
                        <Card light bronze>
                            <ContentPaddingThin>
                                <Card light>
                                    {TranslationModel.translate({
                                        se: (
                                            <>
                                                <br/>
                                                <h3>Bronspaketet</h3>
                                                <h3>27 000kr</h3>
                                                <br />
                                                <p>
                                                    <b>På Branchdagen:</b>
                                                    <ul>
                                                        <li>
                                                            4m² för monter
                                                        </li>
                                                        <li>
                                                            Ett
                                                            ståbord
                                                        </li>
                                                        <li>
                                                            En
                                                            företagsvärd
                                                        </li>
                                                        <li>
                                                            Fika för
                                                            två
                                                        </li>
                                                        <li>
                                                            Exponering på
                                                            hemsida och våra sociala
                                                            medier
                                                        </li>
                                                    </ul>
                                                </p>
                                            </>
                                        ),
                                        en: (
                                            <>
                                                <br/>
                                                <h3>Bronspaketet</h3>
                                                <h3>SEK 27 000</h3>
                                                <br />
                                                <p>
                                                    <b>On the day of the fair:</b>
                                                    <ul>
                                                        <li>
                                                            4m² for a stand
                                                        </li>
                                                        <li>
                                                            One standing table
                                                        </li>
                                                        <li>
                                                            One company host
                                                        </li>
                                                        <li>
                                                            Coffee for two
                                                        </li>
                                                        <li>
                                                            Exposure on the website and our social media
                                                        </li>
                                                    </ul>
                                                </p>
                                            </>
                                        ),
                                    })}
                                </Card>
                            </ContentPaddingThin>
                        </Card>
                        <div className='additional-offers'>
                            <div>
                                <Card light>
                                    <ContentPadding>
                                        <ContentPadding>
                                            {TranslationModel.translate({
                                                se: (
                                                    <>
                                                        <h3>Event</h3>
                                                        <h3>15 000kr</h3>
                                                        <br />
                                                        <p>
                                                            <ul>
                                                                <li>
                                                                    Exempelvis
                                                                    en
                                                                    liveföreläsning,
                                                                    CV-workshop
                                                                    eller Q&A
                                                                    med
                                                                    studenter
                                                                </li>
                                                                <li>
                                                                    På eller
                                                                    före
                                                                    branschdagen
                                                                </li>
                                                                <li>
                                                                    Vid mat
                                                                    tillkommer
                                                                    en kostnad á
                                                                    120kr/biljett.
                                                                    Drinkbiljetter
                                                                    á 30kr.
                                                                </li>
                                                            </ul>
                                                        </p>
                                                    </>
                                                ),
                                                en: (
                                                    <>
                                                        <h3>Event</h3>
                                                        <h3>SEK 15 000</h3>
                                                        <br />
                                                        <p>
                                                            <ul>
                                                                <li>
                                                                    For example
                                                                    a live
                                                                    lecture, CV
                                                                    workshop or
                                                                    a Q&A with
                                                                    students
                                                                </li>
                                                                <li>
                                                                    Before or
                                                                    during the
                                                                    fair day
                                                                </li>
                                                                <br/>
                                                            </ul>
                                                        </p>
                                                    </>
                                                ),
                                            })}
                                        </ContentPadding>
                                    </ContentPadding>
                                </Card>
                            </div>
                            <Card light>
                                <ContentPadding>
                                    <ContentPadding>
                                        {TranslationModel.translate({
                                            se: (
                                                <>
                                                    <h3>Annons</h3>
                                                    <h3>1 000 kr</h3>
                                                    <br />
                                                    <p>
                                                        <ul>
                                                            <li>
                                                                På vår
                                                                Facebook-sida,
                                                                Instagram eller
                                                                hemsida
                                                            </li>
                                                            <li>
                                                                Annons visas i 7
                                                                dagar, pris
                                                                gäller per kanal
                                                            </li>
                                                        </ul>
                                                    </p>
                                                </>
                                            ),
                                            en: (
                                                <>
                                                    <h3>Advert</h3>
                                                    <h3>SEK 1 000</h3>
                                                    <br />
                                                    <p>
                                                        <ul>
                                                            <li>
                                                                On our Facebook,
                                                                Instagram or
                                                                website
                                                            </li>
                                                            <li>
                                                                The advert is
                                                                shown for 7
                                                                days, price is
                                                                per channel
                                                            </li>
                                                        </ul>
                                                    </p>
                                                </>
                                            ),
                                        })}
                                    </ContentPadding>
                                </ContentPadding>
                            </Card>
                        </div>
                    </div>}
                </div>
            </ContentSection>
            {/* Email us section */}
            <ContentSection background={ContentSectionBackground.dark}>
                <TextSection>
                    <h1>{TranslationModel.translate(phrases.contact_us)}!</h1>

                    <ContactForm />
                </TextSection>
            </ContentSection>
            <Footer />
        </div>
    )
}

export default Companypage
