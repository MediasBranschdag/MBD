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
                                                        21 mars 2024
                                                    
                                                        {/*{16}{' '}
                                                        {TranslationModel.translate(
                                                            phrases.months
                                                                .february
                                                        )}{' '}
                                                        {2023}{' '}*/}
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
                                                        March 21st 2024
                                                        {/*{16}{' '}
                                                        {TranslationModel.translate(
                                                            phrases.months
                                                                .february
                                                        )}{' '}
                                                        {2023}{' '}*/}
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
                
                </div>
                    {<div className='companypage-offer'>
                        <Card light>
                            <ContentPadding>
                                <ContentPadding>
                                    {TranslationModel.translate({
                                        se: (
                                            <>
                                                <h4>Huvudsponsorpaket</h4>
                                                <h3>59 500kr</h3>
                                                <br />
                                                <p>
                                                    <ul>
                                                        <li>
                                                            8m2 för monter, två
                                                            ståbord och fyra
                                                            stolar samt två
                                                            personliga
                                                            företagsvärdar
                                                        </li>
                                                        <li>
                                                            Fyra
                                                            sittningsbiljetter,
                                                            tillgång till
                                                            företagslounge samt
                                                            lunch och fika för
                                                            fyra
                                                        </li>
                                                        <li>
                                                            Exponering på
                                                            hemsida, sociala
                                                            medier, ryggen på
                                                            kläder under
                                                            branschdagen och i
                                                            sektionslokalen
                                                        </li>
                                                        <li>
                                                            <b>Event:</b>{' '}
                                                            Exempelvis en
                                                            lunchföreläsning
                                                            eller pub. Mat till 50 personer
                                                            ingår. Kostnad för drinkbiljetter
                                                            tillkommer á 30 kr.
                                                        </li>
                                                        <li>
                                                            <b>Annons:</b> På vår webbsida,
                                                             Instagram och Facebook. 
                                                             Annonserna är uppe i sju dagar. 
                                                              Gäller för 2 kanaler.
                                                        </li>
                                                    </ul>
                                                </p>
                                            </>
                                        ),
                                        en: (
                                            <>
                                                <h4>Main Sponsorship</h4>
                                                <h3>59 500 SEK</h3>
                                                <br />
                                                <p>
                                                    <ul>
                                                        <li>
                                                            8m2 for stand, two
                                                            standing tables and
                                                            four chairs and two
                                                            personal company
                                                            hosts{' '}
                                                        </li>
                                                        <li>
                                                            Four dinner tickets,
                                                            access to the
                                                            corporate lounge as
                                                            well as lunch and
                                                            coffee for four
                                                        </li>
                                                        <li>
                                                            Exposure on the
                                                            website, social
                                                            media, the back of
                                                            clothes during the
                                                            fair
                                                        </li>
                                                        <li>
                                                            <b>Event:</b> For
                                                            example a lunch
                                                            lecture or a pub
                                                        </li>
                                                        <li>
                                                            <b>Advert:</b> On
                                                            website, Instagram
                                                            and Facebook. Advert 
                                                            is up for seven days. 
                                                            2 channels are included.
                                                        </li>
                                                    </ul>
                                                </p>
                                            </>
                                        ),
                                    })}
                                </ContentPadding>
                            </ContentPadding>
                        </Card>
                        <Card light>
                            <ContentPadding>
                                <ContentPadding>
                                    {TranslationModel.translate({
                                        se: (
                                            <>
                                                <h4>Standardpaket</h4>
                                                <h3>29 500kr</h3>
                                                <br />
                                                <p>
                                                    <ul>
                                                        <li>
                                                            6m2 för monter, ett
                                                            ståbord och två
                                                            stolar samt en
                                                            personlig
                                                            företagsvärd
                                                        </li>
                                                        <li>
                                                            Två
                                                            sittningsbiljetter,
                                                            tillgång till
                                                            företagslounge samt
                                                            lunch och fika för
                                                            två
                                                        </li>
                                                        <li>
                                                            Exponering på
                                                            hemsida och i
                                                            sociala medier
                                                        </li>
                                                    </ul>
                                                </p>
                                            </>
                                        ),
                                        en: (
                                            <>
                                                <h4>Standard</h4>
                                                <h3>29 500 SEK</h3>
                                                <br />
                                                <p>
                                                    <ul>
                                                        <li>
                                                            6m2 for stand, a
                                                            standing table and
                                                            two chairs and a
                                                            personal company
                                                            host
                                                        </li>
                                                        <li>
                                                            Two dinner tickets,
                                                            access to the
                                                            corporate lounge and
                                                            lunch and coffee for
                                                            two
                                                        </li>
                                                        <li>
                                                            Exposure on the
                                                            website and in
                                                            social media
                                                        </li>
                                                    </ul>
                                                </p>
                                            </>
                                        ),
                                    })}
                                </ContentPadding>
                            </ContentPadding>
                        </Card>
                        <div className='additional-offers'>
                            <div>
                                <Card light>
                                    <ContentPadding>
                                        <ContentPadding>
                                            {TranslationModel.translate({
                                                se: (
                                                    <>
                                                        <h4>Event</h4>
                                                        <h3>6 900kr</h3>
                                                        <br />
                                                        <p>
                                                            <ul>
                                                                <li>
                                                                Ett event är ett perfekt tillfälle för er att komma
                                                                ännu närmare studenterna, exempelvis genom
                                                                en pub eller lunchföreläsning.
                                                                
                                                                </li>
                                                                <li>
                                                                Vill ni ha hjälp med planeringen eller bolla
                                                                eventideér?
                                                                Kontakta branschdag@medieteknik.com så
                                                                hjälper vi er!
                                                                </li>
                                                                <li>
                                                                Vid mat tillkommer en kostnad á 120kr/biljett. 
                                                                Drinkbiljetter á 30kr.
                                                                </li>
                                                            </ul>
                                                        </p>
                                                    </>
                                                ),
                                                en: (
                                                    <>
                                                        <h4>Event</h4>
                                                        <h3>6 900 SEK</h3>
                                                        <br />
                                                        <p>
                                                            <ul>
                                                            <li>
                                                                An event is a perfect opportunity for you to network 
                                                                even more with the students, for example through a 
                                                                pub or a lunch lecture.
                                                                
                                                                </li>
                                                                <li>
                                                                Would you like help with planning or brainstorming ideas?
                                                                Contact us at branschdag@medieteknik.com and we will help you!
                                                                </li>
                                                                <li>
                                                                    Foor food there is an additional 120kr per food ticket, and 30kr per drink ticket.
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
                            <Card light>
                                <ContentPadding>
                                    <ContentPadding>
                                        {TranslationModel.translate({
                                            se: (
                                                <>
                                                    <h4>Annons</h4>
                                                    <h3>900 kr per kanal</h3>
                                                    <br />
                                                    <p>
                                                        <ul>
                                                            <li>
                                                            Vill ni synas lite extra på vår webbsida,
                                                            Instagram eller Facebook? Eller har ni
                                                            kanske en ledig tjänst som ni vill annonsera
                                                            till våra studenter? Passa då på att
                                                            annonsera på någon av våra
                                                            kommunikationskanaler!
                                                            </li>
                                                            <li>
                                                                Annonsen är uppe i 7 dagar.
                                                            </li>
                                                        </ul>
                                                    </p>
                                                </>
                                            ),
                                            en: (
                                                <>
                                                    <h4>Advert</h4>
                                                    <h3>900 SEK per channel</h3>
                                                    <br />
                                                    <p>
                                                        <ul>
                                                        <li>
                                                            Would you like some exposure on our website, 
                                                            Instagram or Facebook? Our do you have a vacancy 
                                                            that you want to advertise to our students?
                                                            Don't miss the opportunity to advertise on
                                                            our social media channels!
                                                            </li>
                                                            <li>
                                                                The advert is shown for 7 days.
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
