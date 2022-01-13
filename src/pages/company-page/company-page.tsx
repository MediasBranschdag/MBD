import React, { useEffect, useState } from 'react'
import './company-page.css'

import { MBDDateContext } from '../../contexts/mbd-date-provider'
import TranslationModel from '../../model/translationModel'
import phrases from '../../data/translations.json'
import Footer from '../../components/footer/footer'
import ContentSection, {
    ContentSectionBackground,
} from '../../components/layout/content-section/content-section'
import TextSection, {
    TextSectionAlignment,
} from '../../components/text-section/text-section'
import MapBackground from '../../assets/backgrounds/map_nymble.jpg'
import SectionTitle, { TitleSectionAlignment } from '../../components/section-title/section-title'

import Card from '../../components/card/card'
import { ContentPadding } from '../../components/content-padding'
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


                                    <SectionTitle align={TitleSectionAlignment.left}>

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
                                                        {"våren"}{' '}
                                                        {mbdDate.getStartYear()}
                                                        {' '}
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
                                                    The job fair starts the{' '}
                                                    <b>
                                                        {"spring"}{' '}
                                                        {mbdDate.getStartYear()}
                                                        {' '}
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
                    <div className='companypage-offer'>
                        <Card light>
                            <ContentPadding><ContentPadding>
                                {TranslationModel.translate({
                                    se: (
                                        <>
                                            <h4>Huvudsponsorpaket</h4>
                                            <h3>50 000kr</h3>
                                            <br />
                                            <p>
                                                <ul>
                                                    <li>
                                                        8m2 för monter, två ståbord och fyra stolar samt två personliga företagsvärdar
                                                    </li>
                                                    <li>
                                                        Fyra sittningsbiljetter, tillgång till företagslounge samt lunch och fika för fyra
                                                    </li>
                                                    <li>
                                                        Exponering på hemsida, sociala medier, ryggen på kläder under branschdagen och i sektionslokalen
                                                    </li>
                                                    <li>
                                                        <b>Event:</b> Exempelvis en lunchföreläsning eller pub
                                                    </li>
                                                    <li>
                                                        <b>Annons:</b> På hemsida, Instagram och Facebook
                                                    </li>

                                                </ul>
                                            </p>
                                        </>
                                    ),
                                    en: (
                                        <>
                                            <h4>Main Sponsorship</h4>
                                            <h3>50 000 SEK</h3>
                                            <br />
                                            <p>
                                                <ul>
                                                    <li>
                                                        8m2 for stand, two standing tables and four chairs and two personal company hosts                                                    </li>
                                                    <li>
                                                        Four dinner tickets, access to the corporate lounge as well as lunch and coffee for four
                                                    </li>
                                                    <li>
                                                        Exposure on the website, social media, the back of clothes during the fair
                                                    </li>
                                                    <li>
                                                        <b>Event:</b> For example a lunch lecture or a pub
                                                    </li>
                                                    <li>
                                                        <b>Advert:</b> On website, Instagram and Facebook
                                                    </li>
                                                </ul>
                                            </p>
                                        </>
                                    ),
                                })}
                            </ContentPadding></ContentPadding>
                        </Card>
                        <Card light>
                            <ContentPadding><ContentPadding>
                                {TranslationModel.translate({
                                    se: (
                                        <>
                                            <h4>Standardpaket</h4>
                                            <h3>20 000kr</h3>
                                            <br />
                                            <p>
                                                <ul>
                                                    <li>
                                                        6m2 för monter, ett ståbord och två stolar samt en personlig företagsvärd
                                                    </li>
                                                    <li>
                                                        Två sittningsbiljetter, tillgång till företagslounge samt lunch och fika för två
                                                    </li>
                                                    <li>
                                                        Exponering på hemsida och i sociala medier
                                                    </li>
                                                </ul>
                                            </p>
                                        </>
                                    ),
                                    en: (
                                        <>
                                            <h4>Standard</h4>
                                            <h3>20 000 SEK</h3>
                                            <br />
                                            <p>
                                                <ul>
                                                    <li>
                                                        6m2 for stand, a standing table and two chairs and a personal company host
                                                    </li>
                                                    <li>
                                                        Two dinner tickets, access to the corporate lounge and lunch and coffee for two
                                                    </li>
                                                    <li>
                                                        Exposure on the website and in social media
                                                    </li>
                                                </ul>
                                            </p>
                                        </>
                                    ),
                                })}
                            </ContentPadding></ContentPadding>
                        </Card>
                        <Card light>
                            <ContentPadding><ContentPadding>
                                {TranslationModel.translate({
                                    se: (
                                        <>
                                            <h4>Lågkostnadspaket*</h4>
                                            <h3>5000kr</h3>
                                            <br />
                                            <p>
                                                <ul>
                                                    <li>
                                                        2m2 för monter, ett ståbord och två stolar samt en personliga företagsvärdar
                                                    </li>
                                                    <li>
                                                        Två sittningsbiljetter, tillgång till företagslounge samt lunch och fika för två
                                                    </li>
                                                    <li>
                                                        Exponering på hemsida och i sociala medier
                                                    </li>

                                                </ul>

                                            </p>
                                        </>
                                    ),
                                    en: (
                                        <>
                                            <h4>Startup / Non-profit*</h4>
                                            <h3>5000 SEK</h3>
                                            <br />
                                            <p>
                                                <ul>
                                                    <li>
                                                        2m2 for stand, a standing table and two chairs and a personal company hosts
                                                    </li>
                                                    <li>
                                                        Two dinner tickets, access to the corporate lounge and lunch and coffee for two
                                                    </li>
                                                    <li>
                                                        Exposure on the website and in social media
                                                    </li>
                                                </ul>
                                            </p>
                                        </>
                                    ),
                                })}
                            </ContentPadding></ContentPadding>
                        </Card>
                        <div className='additional-offers'>
                            <div>
                                <Card light>
                                    <ContentPadding><ContentPadding>
                                        {TranslationModel.translate({
                                            se: (
                                                <>
                                                    <h4>Event</h4>
                                                    <h3>7000kr</h3>
                                                    <br />
                                                    <p>
                                                        <ul>
                                                            <li>
                                                                Exempelvis en liveföreläsning, CV-workshop eller Q&A med studenter
                                                            </li>
                                                            <li>
                                                                På eller före branschdagen
                                                            </li>
                                                            <li>
                                                                Vid mat tillkommer en kostnad á 120kr/biljett. Drinkbiljetter á 30kr.
                                                            </li>
                                                        </ul>
                                                    </p>
                                                </>
                                            ),
                                            en: (
                                                <>
                                                    <h4>Event</h4>
                                                    <h3>7 000 SEK</h3>
                                                    <br />
                                                    <p>
                                                        <ul>
                                                            <li>
                                                                For example a live lecture, CV workshop or a Q&A with students
                                                            </li>
                                                            <li>
                                                                Before or during the fair day
                                                            </li>
                                                        </ul>
                                                    </p>
                                                </>
                                            ),
                                        })}
                                    </ContentPadding></ContentPadding>
                                </Card></div>
                            <Card light>
                                <ContentPadding><ContentPadding>
                                    {TranslationModel.translate({
                                        se: (
                                            <>
                                                <h4>Annons</h4>
                                                <h3>1 000 kr</h3>
                                                <br />
                                                <p>
                                                    <ul>
                                                        <li>
                                                            På vår Facebook-sida, Instagram eller hemsida
                                                        </li>
                                                        <li>
                                                            Annons visas i 7 dagar, pris gäller per kanal
                                                        </li>
                                                    </ul>
                                                </p>
                                            </>
                                        ),
                                        en: (
                                            <>
                                                <h4>Advert</h4>
                                                <h3>1 000 SEK</h3>
                                                <br />
                                                <p>
                                                    <ul>
                                                        <li>
                                                            On our Facebook, Instagram or website
                                                        </li>
                                                        <li>
                                                            The advert is shown for 7 days, price is per channel
                                                        </li>
                                                    </ul>
                                                </p>
                                            </>
                                        ),
                                    })}
                                </ContentPadding></ContentPadding>
                            </Card>
                        </div>
                    </div>
                    <TextSection align={TextSectionAlignment.center}>
                        <p>
                            {TranslationModel.translate({
                                se: (
                                    <span>
                                        <i>* Lågkostnadspaket erbjuds endast ideella organisationer och mindre startups</i>
                                    </span>
                                ),
                                en: (
                                    <span>
                                        <i>* The Startup / Non-profit package is only offered to non-profit organizations and smaller startups</i>
                                    </span>
                                ),
                            })}
                        </p>
                        <p>

                        </p>

                    </TextSection>
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
