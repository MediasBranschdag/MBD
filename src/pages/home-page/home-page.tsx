import React, { FC, useEffect, useState } from 'react'
import './home-page.css'

import IntroScreen from '../../components/intro-screen/intro-screen'

import IntroScreenBackground from '../../assets/backgrounds/nymble_beach_flag.jpg'
import ReadMoreBackground from '../../assets/backgrounds/laptop.png'
import AnimatedMBDLogo from '../../components/animated-mbd-logo/animated-mbd-logo'
import CompanyIcon from '../../assets/icons/other/company.svg'
import FacebookIcon from '../../assets/icons/other/facebook.svg'
import InstagramIcon from '../../assets/icons/other/instagram_white.svg'
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

import TranslationModel from '../model/translationModel'
import phrases from '../../data/translations.json'
import TextWithContent from '../../components/text-with-content/text-with-content'
import ProfileCard from '../../components/profile-card/profile-card'
import CenterBackground from '../../components/center-background/center-background'
import CircleIcon from '../../components/circle-icon/circle-icon'
import { Button, ButtonTypes } from '../../components/button/button'
import { InstagramModel, InstagramPost } from '../model/instagramModel'
import InstagramCard from '../../components/instagram-post/instagram-card'
import SectionTitle from '../../components/section-title/section-title'
import Footer from '../../components/footer/footer'
import { getProjectLeaders, TeamMember } from '../model/teamModel'
import { NavLink } from 'react-router-dom'
import { isMobile, isSafari } from 'react-device-detect'

import NicoleSignature from '../../assets/signatures/nicole_nordlund.png'
import JohnSignature from '../../assets/signatures/john_brink.png'

const Homepage: FC = () => {
    const [instagramPosts, setInstagramPosts] = useState<InstagramPost[]>([])
    const [projectLeaders, setProjectLeaders] = useState<TeamMember[]>([])

    useEffect(() => {
        window.scrollTo(0, 0)

        // Should only be loaded once
        InstagramModel.getInstagramImages().then((posts) => {
            setInstagramPosts(posts)
        })
        getProjectLeaders().then(setProjectLeaders)
    }, [])

    return (
        <div className='homepage'>
            {/* Logo and countdown */}
            <IntroScreen noButton={false}>
                <div className='homepage-intro-content'>
                    <AnimatedMBDLogo />
                </div>
            </IntroScreen>

            {/* Introduction page */}
            <ContentSection background={ContentSectionBackground.light}>
                <TextWithContent
                    text={
                        <TextSection>
                            <h1>
                                {TranslationModel.translate(phrases.hello)}!
                            </h1>
                            <MBDDateContext.Consumer>
                                {(mbdDate) =>
                                    TranslationModel.translate({
                                        se: (
                                            <span>
                                            Vad kul att just du hittat hit! Medias Branschdag äger rum under våren 2024 i kårhuset Nymble på KTH campus Valhallavägen.
                                                <br />
                                                <br />
                                                Studerar du medieteknik,
                                                datateknik eller maskininlärning
                                                och letar efter din framtida
                                                arbetsplats eller är ett företag
                                                som söker din framtida kollega
                                                är Medias Branschdag dagen för
                                                dig. Mässan ger dig som student
                                                möjlighet att hitta extrajobb,
                                                examensjobb eller helt enkelt
                                                bara knyta värdefulla kontakter
                                                inför framtiden. Till
                                                utställande företag garanterar
                                                vi en maxad dag med allt vad
                                                medieteknik har att erbjuda.
                                                Helt enkelt något du inte vill
                                                missa!
                                                <br />
                                                <br />
                                                Ses vi där? Klart vi gör!
                                            </span>
                                        ),

                                        en: (
                                            <span>
                                                Fancy seeing you here! The fair
                                               takes place in spring {2024} in the student union
                                                house Nymble at KTH campus
                                                Valhallavägen.
                                                <br />
                                                <br />
                                                If you are a media technology,
                                                computer science or machine
                                                learning student looking for a
                                                future employer or a company
                                                looking for your future employee
                                                Media Branchday is the place to
                                                be. The fair gives students the
                                                opportunity to find a part-time
                                                job, thises job or valuable
                                                contact for the future. For
                                                companies, we are guaranteeing a
                                                full day with everything Media
                                                technology has to offer. You
                                                don't want to miss this!
                                                <br />
                                                <br />
                                                Will we see you there? Of course
                                                we will!
                                            </span>
                                        ),
                                    })
                                }
                            </MBDDateContext.Consumer>
                        </TextSection>
                    }
                    content={
                        <>
                            <ProfileCard
                                imagePath='assets/team/PM.jpg'
                                name={`${projectLeaders
                                    .map((leader, i) => {
                                        return leader.name
                                    })
                                    .join('')}`}
                                role={TranslationModel.translate({
                                    se: 'Projektledare',
                                    en: 'Project Leaders',
                                })}
                            />
                            <div className='photographer-info'>
                                <img src={CameraIcon} alt='' />
                                <a
                                    href='https://www.instagram.com/fotogruppen_medieteknik/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    Johan Wangärd
                                </a>
                            </div>
                        </>
                    }
                />
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
                                                    {
                                                        /*mbdDate.getStartYear()*/ 2023 // Need to hardcode as server connection is not working
                                                    }
                                                    .
                                                </span>
                                            ),
                                            en: (
                                                <span>
                                                    Read more about how you can
                                                    participate in Medias
                                                    Branschdag{' '}
                                                    {
                                                        /*mbdDate.getStartYear()*/ 2023 // Need to hardcode as server connection is not working
                                                    }
                                                    . Your future employees are
                                                    waiting for you!
                                                </span>
                                            ),
                                        })
                                    }
                                </MBDDateContext.Consumer>
                                <br />
                                <br />
                                <NavLink to='/company'>
                                    <Button
                                        buttonType={ButtonTypes.normalCompact}
                                    >
                                        {TranslationModel.translate(
                                            phrases.read_more
                                        )}
                                    </Button>
                                </NavLink>
                            </div>
                            {/*
                            <div className='read-more'>
                                <CircleIcon imagePath={BookIcon}/>
                                <br />
                                <h1>
                                    {TranslationModel.translate(phrases.are_you_student)}
                                </h1>
                                <MBDDateContext.Consumer>
                                    {mbdDate =>
                                        TranslationModel.translate({
                                            'se':
                                                <span>
                                                    Läs mer om vilka företag som ställer ut på Medias Branschdag {mbdDate.getStartYear()}. Kanske
                                                    hittar du din framtida arbetsgivare redan nu.
                                                </span>,
                                            'en':
                                                <span>
                                                    Read more about what companies are participating in Medias Branschdag {mbdDate.getStartYear()}.
                                                    Maybe you’ll find your future employer there.
                                                </span>,
                                        })
                                    }
                                </MBDDateContext.Consumer>
                                <br />
                                <br />
                                <NavLink to='/student'>
                                    <Button buttonType={ButtonTypes.normalCompact}>
                                        {TranslationModel.translate(phrases.read_more)}
                                    </Button>
                                </NavLink>
                            </div>*/}
                        </div>
                    </TextSection>
                </ContentSection>
            </CenterBackground>

            {/* Instagram section */}
            {instagramPosts.length > 0 ? (
                <ContentSection>
                    <SectionTitle>
                        Medias branschdag{' '}
                        {TranslationModel.translate(phrases.on_instagram)}
                    </SectionTitle>
                    <div className='homepage-instagram-section'>
                        {instagramPosts ? (
                            instagramPosts.slice(0, 6).map((post) => {
                                return (
                                    <InstagramCard
                                        key={post.id}
                                        imageUrl={post.imageUrl}
                                        linkToPost={post.linkToPost}
                                    />
                                )
                            })
                        ) : (
                            <></>
                        )}
                    </div>
                </ContentSection>
            ) : (
                <></>
            )}

            <Footer />
        </div>
    )
}

export default Homepage
