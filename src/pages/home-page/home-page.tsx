import React, { FC, useEffect, useState } from 'react'
import './home-page.css'

import IntroScreen from '../../components/intro-screen/intro-screen'

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
            <IntroScreen
                backgroundImage={
                    isMobile && isSafari ? IntroScreenBackground : undefined
                }
                backgroundVideo={
                    isMobile && isSafari
                        ? undefined
                        : require('../../assets/backgrounds/header_video_s.mp4')
                }
            >
                <div className='homepage-intro-content'>
                    <AnimatedMBDLogo />
                    <div className='digital-button'>
                        <a href='https://digital.mediasbranschdag.com'>
                            <Button className={'btn--white'}>
                                {TranslationModel.translate({
                                    se:
                                        'Klicka här för att gå till den digitala mässan',
                                    en: 'Register for the online fair here',
                                })}
                            </Button>
                        </a>
                    </div>
                    <MBDDateContext.Consumer>
                        {(mbdDate) => <Countdown mbdDate={mbdDate} />}
                    </MBDDateContext.Consumer>
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
                                                Nu är det inte långt kvar till
                                                Medias Branschdag, den årliga
                                                arbetsmarknadsmässan för
                                                Medietekniksektionen på KTH. I
                                                år kommer branschdagen gå av
                                                stapeln den{' '}
                                                {mbdDate.getStartDate()}:e{' '}
                                                {mbdDate.getStartMonth()} och
                                                för första gången någonsin -
                                                digitalt på plattformen
                                                Graduateland!
                                                <br />
                                                <br />
                                                Studerar du medieteknik och
                                                letar efter din framtida
                                                arbetsplats, extrajobb eller
                                                examensjobb? Eller är du
                                                istället i behov av kompetent
                                                personal med en
                                                civilingenjörsutbildning?
                                                Härligt, för oavsett är Medias
                                                Branschdag lösningen!
                                                <br />
                                                <br />
                                                Det kommer bli en dag fylld av
                                                nya lärdomar, utbyten och
                                                inspiration - allting samlat
                                                under ett moln av
                                                medieteknikanda. Ses vi där?😏
                                            </span>
                                        ),

                                        en: (
                                            <span>
                                                It's not much time left until
                                                Medias Branschdag, the annual
                                                job fair for the Media
                                                Technology chapter at KTH. This
                                                year the fair takes place on the{' '}
                                                {mbdDate.getStartDate()}th{' '}
                                                {mbdDate.getStartMonth()} and
                                                for the first time ever - online
                                                on the platform Graduateland!
                                                <br />
                                                <br />
                                                Do you work in the Media
                                                Technology field and are in need
                                                of skilled employees? Are you
                                                studying Media Technology and
                                                searching for a job or a place
                                                to write a thesis? Are you new
                                                to Media Technology? No matter
                                                who you are - Medias Branschdag
                                                is here for you!
                                                <br />
                                                <br />
                                                Will we see you there?😏
                                            </span>
                                        ),
                                    })
                                }
                            </MBDDateContext.Consumer>
                            <div className='signature-cont'>
                                <img src={NicoleSignature} alt='' />
                                <img src={JohnSignature} alt='' />
                            </div>
                        </TextSection>
                    }
                    content={
                        <>
                            <ProfileCard
                                imagePath='assets/team/project_leaders.jpg'
                                name={`${projectLeaders
                                    .map((leader, i) => {
                                        return leader.name
                                    })
                                    .join(', ')}`}
                                role={TranslationModel.translate({
                                    se: 'Projektledare',
                                    en: 'Project Leaders',
                                })}
                            />
                            <div className='photographer-info'>
                                <img src={CameraIcon} alt='' />
                                <a
                                    href='https://www.instagram.com/mikaelaphoto/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    Mikaela Gärde
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
                                                    {mbdDate.getStartYear()}.
                                                </span>
                                            ),
                                            en: (
                                                <span>
                                                    Read more about how you can
                                                    participate in Medias
                                                    Branschdag{' '}
                                                    {mbdDate.getStartYear()}.
                                                    Your future employees are
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

            {/* Social media section */}
            <ContentSection
                size={ContentSectionSize.small}
                background={ContentSectionBackground.dark}
            >
                <SectionTitle>
                    {TranslationModel.translate(phrases.follow_social_media)}
                </SectionTitle>
                <div className='homepage-social-buttons'>
                    <a
                        href='https://www.facebook.com/mediasbranschdag/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <Button buttonType={ButtonTypes.bigIcon}>
                            <img src={FacebookIcon} alt='' />
                        </Button>
                    </a>
                    <a
                        href='https://www.instagram.com/mediasbranschdag/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <Button buttonType={ButtonTypes.bigIcon}>
                            <img src={InstagramIcon} alt='' />
                        </Button>
                    </a>

                    <a
                        href='https://www.linkedin.com/company/medias-branschdag/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <Button buttonType={ButtonTypes.bigIcon}>
                            <img src={LinkedinIcon} alt='' />
                        </Button>
                    </a>
                </div>
            </ContentSection>
            <Footer />
        </div>
    )
}

export default Homepage
