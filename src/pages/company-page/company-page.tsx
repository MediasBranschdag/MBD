import React, { useEffect, useState } from 'react'
import './company-page.css'

import { MBDDateContext } from '../../contexts/mbd-date-provider'
import TranslationModel from '../../model/translationModel'
import phrases from '../../data/translations.json'
import Footer from '../../components/footer/footer'
import IntroScreen from '../../components/intro-screen/intro-screen'
import IntroScreenButtons from '../../components/intro-screen/intro-screen-buttons/intro-screen-buttons'
import ContentSection, {
    ContentSectionSize,
} from '../../components/layout/content-section/content-section'
import TextSection, {
    TextSectionAlignment,
} from '../../components/text-section/text-section'
import { Button, ButtonTypes } from '../../components/button/button'
//import TextWithContent from '../../components/text-with-content/text-with-content'

import TicketIcon from '../../assets/icons/other/tickets_black.svg'
import BoothIcon from '../../assets/icons/other/booth_black.svg'
import QuestionIcon from '../../assets/icons/other/question_mark_black.svg'
import MBDLogoBlack from '../../assets/mbd-logo/mbd-logo-black.svg'

import IntroScreenBackground from '../../assets/backgrounds/red_flower_dark_blur.jpg'
//import MapBackground from '../../assets/backgrounds/map_nymble.jpg'
import { getSalesTeamMemebers, TeamMember } from '../../model/teamModel'
import SectionTitle from '../../components/section-title/section-title'
import ProfileCard from '../../components/profile-card/profile-card'
import { NavLink } from 'react-router-dom'
import CompanyModel from '../../model/companyModel'
import { CompanyInvolment } from '../../contexts/mbd-company-provider'
import CompanyLogoList from '../../components/company-logo-list/company-logo-list'
import SignUpForm from './sign-up-form/sign-up-form'
import Card from '../../components/card/card'
import { ContentPadding } from '../../components/content-padding'

const Companypage = () => {
    const [salesMembers, setSalesMembers] = useState<TeamMember[]>([])
    const [lastYearCompanies, setLastYearCompanies] = useState<
        CompanyInvolment
    >()

    useEffect(() => {
        window.scrollTo(0, 0)
        getSalesTeamMemebers().then(setSalesMembers)
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
        <div className='companypage'>
            <IntroScreen
                backgroundImage={IntroScreenBackground}
                title={TranslationModel.translate(phrases.for_companies)}
            >
                <IntroScreenButtons
                    buttons={[
                        {
                            title: TranslationModel.translate(phrases.about_us),
                            iconPath: QuestionIcon,
                            scrollTargetID: 'companypage-who-are-we',
                        },
                        {
                            title: TranslationModel.translate(
                                phrases.exhibitor_packages
                            ),
                            iconPath: BoothIcon,
                            scrollTargetID: 'companypage-package',
                        },
                        {
                            title: TranslationModel.translate(
                                phrases.interest_form
                            ),
                            iconPath: TicketIcon,
                            scrollTargetID: 'companypage-sign-up',
                        },
                        {
                            title: TranslationModel.translate(phrases.sales_team),
                            iconPath: MBDLogoBlack,
                            scrollTargetID: 'companypage-contact',
                        },
                    ]}
                />
            </IntroScreen>

            {/* Info section */}
            <ContentSection>
                <div id='companypage-who-are-we'>
                    <TextSection>
                        <h1>
                            {TranslationModel.translate(phrases.who_are_we)}?
                        </h1>
                        <MBDDateContext.Consumer>
                            {(mbdDate) =>
                                TranslationModel.translate({
                                    se: (
                                        <span>
                                            Vi är studenter från
                                            civilingenjörsprogrammet i
                                            Medieteknik på KTH. Vi har
                                            masterprogram inom interaktiva
                                            medier, datalogi och
                                            maskininlärning. Många av oss
                                            sysslar med bland annat system-
                                            webb- och apputveckling.
                                            Interaktionsdesigners, grafiker och
                                            till och med spelutvecklare. Hos oss
                                            hittar ni blivande projektledare
                                            inom IT och studenter som älskar
                                            management. Vi medietekniker är
                                            speciellt bra på att kommunicera
                                            mellan teknik- och
                                            business-avdelningen. Medietekniker
                                            har en bred bas och oändligt med
                                            möjligheter inom teknik-sektorn.
                                            Alla de här studenterna, kommer att
                                            vara på vår branschdag den{' '}
                                            <b>
                                                {mbdDate.getStartDate()}e{' '}
                                                {mbdDate.getStartMonth()}{' '}
                                                {mbdDate.getStartYear()}{' '}
                                            </b>
                                            där vi vill att ni deltar. Att synas
                                            på Medias Branschdag är en otroligt
                                            bra möjlighet för er att
                                            marknadsföra ert företag och för oss
                                            studenter är branschdagen ett
                                            uppskattat tillfälle kunna nätverka
                                            med morgondagens arbetsgivare.
                                            Medias branschdag är årets bästa
                                            tillfälle för er att visa upp er
                                            verksamhet mot potentiella
                                            medarbetare.
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
                                            present at our job fair the{' '}
                                            <b>
                                                {mbdDate.getStartDate()}th{' '}
                                                {mbdDate.getStartMonth()}{' '}
                                                {mbdDate.getStartYear()}{' '}
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
                <br />
                {/* Package section */}
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
                                            <h4>Standard</h4>
                                            <h3>10 000 kr</h3>
                                            <br />
                                            <p>
                                                <ul>
                                                    <li>
                                                        Utställningsplats på vår digitala platform
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
                                                    <h3>5 000 kr</h3>
                                                    <br />
                                                    <p>
                                                        <ul>
                                                            <li>
                                                                Exempelvis en liveföreläsning, CV-workshop eller Q&A med studenter
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
                                                    <h3>5 000 SEK</h3>
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
                            onClick={() =>
                                scrollToSection('companypage-contact')
                            }
                        >
                            <Button buttonType={ButtonTypes.normalCompact}>
                                {TranslationModel.translate(phrases.contact)}
                            </Button>
                        </div>
                    </TextSection>
                </div>

                {/* Sign up section */}
                <div id='companypage-sign-up'>
                    <TextSection>
                        <h1>
                            {TranslationModel.translate(phrases.interest_form)}
                        </h1>
                        <SignUpForm />
                    </TextSection>
                </div>
            </ContentSection>

            {/* Fair section
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
                                    {TranslationModel.translate(
                                        phrases.the_fair
                                    )}
                                </h1>
                                <MBDDateContext.Consumer>
                                    {(mbdDate) =>
                                        TranslationModel.translate({
                                            se: (
                                                <span>
                                                    Mässan startar den{' '}
                                                    <b>
                                                        {mbdDate.getStartDate()}
                                                        e{' '}
                                                        {mbdDate.getStartMonth()}{' '}
                                                        {mbdDate.getStartYear()}
                                                        ,{' '}
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
                                                        {mbdDate.getStartDate()}
                                                        th{' '}
                                                        {mbdDate.getStartMonth()}{' '}
                                                        {mbdDate.getStartYear()}
                                                        ,{' '}
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
            </div> */}

            {/* Company contact section */}
            <div id='companypage-contact'>
                <br />
                <ContentSection size={ContentSectionSize.large}>
                    <SectionTitle>
                        {TranslationModel.translate(phrases.sales_team)}
                    </SectionTitle>
                    <div
                        style={{
                            gridTemplateColumns: `repeat(${salesMembers.length > 4
                                ? 3
                                : salesMembers.length
                                }, 1fr)`,
                        }}
                        className='companypage-sales-members'
                    >
                        {salesMembers.map((member) => {
                            return (
                                <ProfileCard
                                    key={member.name}
                                    imagePath={member.imagePath}
                                    linkedinLink={member.linkedInURL}
                                    email={member.email}
                                    name={member.name}
                                    role={TranslationModel.translate(
                                        member.position
                                    )}
                                />
                            )
                        })}
                    </div>
                    <br />
                    <TextSection align={TextSectionAlignment.center}>
                        {TranslationModel.translate(phrases.search_other)}
                        <br />
                        <br />
                        <NavLink to='/contact'>
                            <Button buttonType={ButtonTypes.normalCompact}>
                                {TranslationModel.translate(phrases.click_here)}
                            </Button>
                        </NavLink>
                    </TextSection>
                </ContentSection>

                {lastYearCompanies ? (
                    <ContentSection>
                        <SectionTitle>
                            {TranslationModel.translate(
                                phrases.last_year_participants
                            )}
                        </SectionTitle>
                        <CompanyLogoList companies={lastYearCompanies.all} />
                    </ContentSection>
                ) : (
                        <></>
                    )}
            </div>
            <Footer />
        </div>
    )
}

export default Companypage
