import React, { FC, useEffect, useState } from 'react'
import './home-page.css'
import { animateScroll as scroll } from 'react-scroll'

import IntroScreen from '../../components/intro-screen/intro-screen'
import ArrowDownIcon from '../../assets/icons/arrows/down_black.svg'

import IntroScreenBackground from '../../assets/backgrounds/nymble_beach_flag.jpg'
import ReadMoreBackground from '../../assets/backgrounds/laptop.png'
import AnimatedMBDLogo from '../../components/animated-mbd-logo/animated-mbd-logo'
import CompanyIcon from '../../assets/icons/other/company.svg'
import FacebookIcon from '../../assets/icons/other/facebook.svg'
import InstagramIcon from '../../assets/icons/other/instagram.svg'
import LinkedinIcon from '../../assets/icons/other/linkedin.svg'
import CameraIcon from '../../assets/icons/other/camera.svg'

import Countdown from '../../components/countdown/countdown'
import { MBDDateContext } from '../../contexts/mbd-date-provider'
import ContentSection, {
    ContentSectionSize,
    ContentSectionBackground,
} from '../../components/layout/content-section/content-section'
import TextSection, {
    TextSectionAlignment,
} from '../../components/text-section/text-section'

import TranslationModel from '../../model/translationModel'
import phrases from '../../data/translations.json'
import TextWithContent from '../../components/text-with-content/text-with-content'
import ProfileCard from '../../components/profile-card/profile-card'
import CenterBackground from '../../components/center-background/center-background'
import CircleIcon from '../../components/circle-icon/circle-icon'
import { Button, ButtonTypes } from '../../components/button/button'
import { InstagramModel, InstagramPost } from '../../model/instagramModel'
import InstagramCard from '../../components/instagram-post/instagram-card'
import SectionTitle from '../../components/section-title/section-title'
import Footer from '../../components/footer/footer'
import { getProjectLeaders, TeamMember } from '../../model/teamModel'
import { NavLink } from 'react-router-dom'
import { isMobile, isSafari } from 'react-device-detect'

import NicoleSignature from '../../assets/signatures/nicole_nordlund.png'
import JohnSignature from '../../assets/signatures/john_brink.png'
import { CompanyInvolment } from '../../contexts/mbd-company-provider'
import CompanyLogoList from '../../components/company-logo-list/company-logo-list'
import { ContentPadding } from '../../components/content-padding'
import Card from '../../components/card/card'
import CompanyModel from '../../model/companyModel'

const Temppage: FC = () => {
    const [salesMembers, setSalesMembers] = useState<TeamMember[]>([])
    const [lastYearCompanies, setLastYearCompanies] = useState<
        CompanyInvolment
    >()

    useEffect(() => {
        window.scrollTo(0, 0)
        CompanyModel.getCompanies('last-year-involvement').then((companies) => {
            setLastYearCompanies({
                all: companies,
                isExhibitor: companies.filter((company) => company.isExhibitor),
                isSponsor: companies.filter((company) => company.isSponsor),
                isMainSponsor: companies.filter(
                    (company) => company.isMainSponsor
                ),
                isLecturer: companies.filter(
                    (company) => company.isMainSponsor
                ),
            })
        })
    }, [])

    const scrollToSection = (id: string) => {
        document
            .querySelector(`#${id}`)
            ?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }


    return (
        <div className='homepage'>
            {/* Logo and countdown */}
            <IntroScreen noButton={false}

            >
                <div className='homepage-intro-content'>
                    <AnimatedMBDLogo />
                </div>
            </IntroScreen>
            {/* Introduction page */}
            <ContentSection background={ContentSectionBackground.light}>
                <div id='companypage-who-are-we'>
                    <TextSection>
                        <h1>
                            {TranslationModel.translate(phrases.hello)}!
                        </h1>
                        <MBDDateContext.Consumer>
                            {(mbdDate) =>
                                TranslationModel.translate({
                                    se: (
                                        <span>
                                            Vad kul att just du hittat hit!
                                            Vi är studenter från
                                            civilingenjörsprogrammet i
                                            Medieteknik på KTH och Medias Branschdag
                                            är vår årliga arbetsmarknadsmässa.
                                            Vi medietekniker är förutom grymma
                                            programmerare, också
                                            speciellt bra på att kommunicera
                                            mellan människor och organisationer i hela samhället.
                                            Vi har
                                            masterprogram inom interaktiva
                                            medier, datalogi och
                                            maskininlärning.

                                            <br />
                                            <br />
                                            Välkommen!
                                        </span>
                                    ),
                                    en: (
                                        <span>
                                            We are students from the degree
                                            programme in Media Technology at
                                            KTH. We have master programmes in
                                            interactive media, data science and
                                            machine learning. A lot of our
                                            students are focused on system, web
                                            and app development. Some like IxD,
                                            graphics and game development. Among
                                            our students you can find future
                                            project leaders within the IT sector
                                            and lovers of management. We are
                                            especially good at communicating
                                            between different departments such
                                            as the tech and business. Media
                                            Technology students have a diverse
                                            foundation and endless of
                                            possibilities within the tech
                                            sector. These students will be
                                            present at our job fair {' '}
                                            <b>
                                                {TranslationModel.translate(phrases.months.february)}{' '}
                                                {' '}
                                                {2022}{' '}
                                            </b>
                                            and we want you to join them. To be
                                            seen at Medias Branschdag is a
                                            terrific opportunity to promote your
                                            company to them. For us students, it
                                            is a much appreciated occasion to
                                            network with future employers.
                                            Medias Branschdag is simply the best
                                            way for you to connect with our
                                            students and future employees.
                                            <br />
                                            <br />
                                            Welcome!
                                        </span>
                                    ),
                                })
                            }
                        </MBDDateContext.Consumer>

                    </TextSection>
                </div>
            </ContentSection>
            {/* Read more section */}
            <CenterBackground background={ReadMoreBackground}>
                <ContentSection size={ContentSectionSize.small}>
                    <TextSection align={TextSectionAlignment.center}>
                        <div className='read-more-section'>
                            <div className='read-more'>
                                <CircleIcon imagePath={CompanyIcon} />
                                <br />
                                <h1>
                                    {TranslationModel.translate(
                                        phrases.are_you_company
                                    )}
                                </h1>
                                <MBDDateContext.Consumer>
                                    {(mbdDate) =>
                                        TranslationModel.translate({
                                            se: (
                                                <span>
                                                    Vill ni nå ut till
                                                    hundratals
                                                    civilingenjörsstudenter på
                                                    KTH?
                                                    <br />
                                                    Läs mer om hur ni kan delta
                                                    i Medias Branschdag{' '}
                                                    {2022}.
                                                </span>
                                            ),
                                            en: (
                                                <span>
                                                    Read more about how you can
                                                    participate in Medias
                                                    Branschdag{' '}
                                                    {2022}.
                                                    Your future employees are
                                                    waiting for you!
                                                </span>
                                            ),
                                        })
                                    }

                                </MBDDateContext.Consumer>


                                <br />
                                <br />
                                <div className='intro-screen-scroll-button no-select'>
                                    <Button
                                        onClick={() => scroll.scrollTo(window.innerHeight * 2)}
                                        buttonType={ButtonTypes.icon}
                                    >
                                        <img src={ArrowDownIcon} alt='Down' />
                                    </Button>
                                </div>
                            </div>





                        </div>
                    </TextSection>

                </ContentSection>

            </CenterBackground>
            <ContentSection background={ContentSectionBackground.light}>
                <div id='companypage-package'>
                    <TextSection align={TextSectionAlignment.center}>
                        <SectionTitle>
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
                                            <h4>Huvudsponsor</h4>
                                            <h3>50 000 kr</h3>
                                            <br />
                                            <p>
                                                <ul>
                                                    <li>
                                                        8 m<sup>2</sup> för monter
                                                    </li>
                                                    <li>
                                                        Fyra sittningsbiljetter
                                                    </li>
                                                    <li>
                                                        Tillgång till företagslounge
                                                    </li>
                                                    <li>
                                                        Två ståbord och två stolar
                                                    </li>
                                                    <li>
                                                        Lunch och fika för fyra
                                                    </li>
                                                    <li>
                                                        Två personliga företagsvärdar
                                                    </li>
                                                    <li>
                                                        Exponering på hemsida
                                                        och våra sociala medier
                                                    </li>
                                                    <li>
                                                        <b>Event</b> och <b>Annons</b> ingår
                                                    </li>
                                                </ul>
                                            </p>
                                        </>
                                    ),
                                    en: (
                                        <>
                                            <h4>Standard</h4>
                                            <h3>10 000 SEK</h3>
                                            <br />
                                            <p>
                                                <ul>
                                                    <li>
                                                        A spot on our digital fair platform
                                                    </li>
                                                    <li>
                                                        Active promotion on our
                                                        website and social media
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
                                            <h4>Standard</h4>
                                            <h3>20 000 kr</h3>
                                            <br />
                                            <p>
                                                <ul>
                                                    <li>
                                                        6 m<sup>2</sup> för monter
                                                    </li>
                                                    <li>
                                                        Två sittningsbiljetter
                                                    </li>
                                                    <li>
                                                        Tillgång till företagslounge
                                                    </li>
                                                    <li>
                                                        Ett ståbord och två stolar
                                                    </li>
                                                    <li>
                                                        Lunch och fika för två
                                                    </li>
                                                    <li>
                                                        En personlig företagsvärd
                                                    </li>
                                                    <li>
                                                        Exponering på hemsida
                                                        och våra sociala medier
                                                    </li>
                                                </ul>
                                            </p>
                                        </>
                                    ),
                                    en: (
                                        <>
                                            <h4>Standard</h4>
                                            <h3>10 000 SEK</h3>
                                            <br />
                                            <p>
                                                <ul>
                                                    <li>
                                                        A spot on our digital fair platform
                                                    </li>
                                                    <li>
                                                        Active promotion on our
                                                        website and social media
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
                                                    <h3>7 000 kr</h3>
                                                    <br />
                                                    <p>
                                                        <ul>

                                                            <li>
                                                                Lunchföreläsning
                                                            </li>
                                                            <li>
                                                                CV-workshop
                                                            </li>
                                                            <li>
                                                                Q&A med studenter
                                                            </li>
                                                            <li>
                                                                På eller före branschdagen
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
                                                <h4>Monter i vår sektionslokal</h4>
                                                <h3>5 000 kr</h3>
                                                <br />
                                                <p>
                                                    <ul>
                                                        <li>
                                                            Gäller mellan 11:00 - 14:00
                                                        </li>
                                                        <li>
                                                            Efter klockan 14:00 tillkommer 1000 kr/h
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
                                        Kontakta oss gärna för frågor eller
                                        information om andra paketlösningar!
                                    </span>
                                ),
                                en: (
                                    <span>
                                        Contact us for questions or to get
                                        information about other package
                                        solutions!
                                    </span>
                                ),
                            })}
                        </p>
                        <div

                        >

                            <Button buttonType={ButtonTypes.normalCompact} >
                                <a href="mailto:branschdag@medieteknik.com">{TranslationModel.translate(phrases.contact_us)}</a>
                            </Button>
                        </div>
                    </TextSection>
                </div>
            </ContentSection >
            {lastYearCompanies ? (
                <ContentSection background={ContentSectionBackground.light} >
                    <SectionTitle>
                        {TranslationModel.translate(
                            phrases.previous_year_participants
                        )}
                    </SectionTitle>
                    <CompanyLogoList companies={lastYearCompanies.isExhibitor} />
                </ContentSection>
            ) : (
                <></>
            )}



        </div>
    )
}

export default Temppage
