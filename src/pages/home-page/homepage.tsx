import React, { FC, useEffect, useState } from 'react';
import './homepage.css';

import IntroScreen from '../../components/intro-screen/intro-screen';

import IntroScreenBackground from '../../assets/backgrounds/nymble_beach_flag.jpg';
import StudentInfoBackground from '../../assets/backgrounds/purple_chives_blur.jpg';
import AnimatedMBDLogo from '../../components/animated-mbd-logo/animated-mbd-logo';
import BookIcon from '../../assets/icons/other/book.png';
import FacebookIcon from '../../assets/icons/other/facebook.svg';
import InstagramIcon from '../../assets/icons/other/instagram.svg';
import LinkedinIcon from '../../assets/icons/other/linkedin.svg';

import Countdown from '../../components/countdown/countdown';
import { MBDDateContext } from '../../contexts/mbd-date-provider';
import ContentSection, { ContentSectionSize, ContentSectionBackground } from '../../components/layout/content-section/content-section';
import TextSection, { TextSectionAlignment } from '../../components/text-section/text-section';

import TranslationModel from '../../model/translationModel';
import phrases from '../../data/translations.json';
import TextWithContent from '../../components/text-with-content/text-with-content';
import ProfileCard from '../../components/profile-card/profile-card';
import CenterBackground from '../../components/center-background/center-background';
import CircleIcon from '../../components/circle-icon/circle-icon';
import { Button, ButtonTypes } from '../../components/button/button';
import { InstagramModel, InstagramPost } from '../../model/instagramModel';
import InstagramCard from '../../components/instagram-post/instagram-card';
import SectionTitle from '../../components/section-title/section-title';
import Footer from '../../components/footer/footer';
import { getProjectLeaders, TeamMember } from '../../model/teamModel';
import { NavLink } from 'react-router-dom';
import { isMobile, isSafari } from 'react-device-detect';

const Homepage: FC = () => {
    
    const [instagramPosts, setInstagramPosts] = useState<InstagramPost[]>([]);
    const [projectLeaders, setProjectLeaders] = useState<TeamMember[]>([]);
    
    useEffect(() => {
        window.scrollTo(0, 0);

        // Should only be loaded once
        InstagramModel.getInstagramImages().then(posts => {
            setInstagramPosts(posts);
        });
        getProjectLeaders().then(setProjectLeaders);
    }, []);

    return (
        <div className="homepage">

            {/* Logo and countdown */}
            <IntroScreen backgroundImage={isMobile && isSafari ? IntroScreenBackground : undefined} backgroundVideo={isMobile && isSafari ? undefined : require( '../../assets/backgrounds/header_video_s.mp4')}>
                <div className="homepage-intro-content">
                    <AnimatedMBDLogo />
                    <MBDDateContext.Consumer>
                        {mbdDate => <Countdown mbdDate={mbdDate} />}
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
                                {mbdDate =>
                                    TranslationModel.translate({
                                        "se":
                                            <span>
                                                Inspiration och framtidstro. Det kommer kårhuset Nymble genomsyras
                                                av den {mbdDate.getStartDate()}e {mbdDate.getStartMonth()} {mbdDate.getStartYear()} när
                                                dörrarna öppnas till Medias Branschdag!
                                                Vår årliga branschdagsmässa hålls för att studenter och företag ska
                                                kunna mötas för utbyten - oavsett om det som söks är ett eventuellt
                                                sommarjobb eller insikt i vad det egentligen innebär att jobba som
                                                medietekniker i praktiken. Branschdagen ger inte bara studenter ett
                                                smakprov på vad arbetslivet har att ge, utan bidrar likväl till att
                                                företagen får ett smakprov av vad framtida medieteknologer har att
                                                bidra med.
                                                <br /><br />
                                                Vi ses på branschdagen i {mbdDate.getStartMonth()}!
                                            </span>,

                                        "en":
                                            <span>
                                                The student union building Nymble will be filled with inspiration on
                                                the {mbdDate.getStartDate()}th of {mbdDate.getStartMonth()} {mbdDate.getStartYear()} when
                                                the doors to Medias Branschdag are
                                                opened! Our annual job fair is held to connect students with
                                                companies, whether students might be searching for their future
                                                employer or just want to see what a career as a Media Technology
                                                graduate will entail. The job fair not only gives the students
                                                knowledge of their future, but also serves to show the companies what
                                                future media engineers have to offer.
                                                <br /><br />
                                                We can’t wait to meet you at the fair in {mbdDate.getStartMonth()}!
                                            </span>
                                    })
                                }
                            </MBDDateContext.Consumer>
                        </TextSection>
                    }
                    content={
                        <ProfileCard
                            imagePath="assets/team/placeholder.png"
                            name={`${projectLeaders.map((leader, i) => {
                                return leader.name;
                            }).join(', ')}`}
                            role={TranslationModel.translate({se: 'Projektledare', en: 'Project Leaders'})} />
                    }
                />
            </ContentSection>

            {/* "Are you a student" section */}
            <CenterBackground background={StudentInfoBackground}>
                <ContentSection size={ContentSectionSize.small}>
                    <TextSection align={TextSectionAlignment.center}>

                        <CircleIcon imagePath={BookIcon}/>
                        <br />
                        <h1>
                            {TranslationModel.translate(phrases.are_you_student)}
                        </h1>
                        <MBDDateContext.Consumer>
                            {mbdDate =>
                                TranslationModel.translate({
                                    "se":
                                        <span>
                                            Läs mer om vilka företag som ställer ut på Medias Branschdag {mbdDate.getStartYear()}. Kanske
                                            hittar du din framtida arbetsgivare redan nu.
                                        </span>,
                                    "en":
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
                    </TextSection>
                </ContentSection>
            </CenterBackground>

            {/* Instagram section */}
            <ContentSection>
                <SectionTitle>
                    Medias branschdag {TranslationModel.translate(phrases.on_instagram)?.toString().toLowerCase()}
                </SectionTitle>
                <div className="homepage-instagram-section">
                    {instagramPosts ? instagramPosts.slice(0, 6).map(post => {
                        return <InstagramCard
                            key={post.id}
                            imageUrl={post.imageUrl}
                            linkToPost={post.linkToPost}
                            likes={post.numberOfLikes}
                        />
                    }) : <></>}
                </div>
            </ContentSection>

            {/* Social media section */}
            <ContentSection size={ContentSectionSize.small} background={ContentSectionBackground.dark}>
                <SectionTitle>
                    {TranslationModel.translate(phrases.follow_social_media)}
                </SectionTitle>
                <div className="homepage-social-buttons">
                    <a href="https://www.facebook.com/mediasbranschdag/" target="_blank" rel="noopener noreferrer">
                        <Button buttonType={ButtonTypes.bigIcon}>
                            <img src={FacebookIcon} alt=""/>
                        </Button>
                    </a>
                    <a href="https://www.instagram.com/mediasbranschdag/" target="_blank" rel="noopener noreferrer">
                        <Button buttonType={ButtonTypes.bigIcon}>
                            <img src={InstagramIcon} alt=""/>
                        </Button>
                    </a>

                    <a href="https://www.linkedin.com/company/medias-branschdag/" target="_blank" rel="noopener noreferrer">
                        <Button buttonType={ButtonTypes.bigIcon}>
                            <img src={LinkedinIcon} alt=""/>
                        </Button>
                    </a>


                </div>
            </ContentSection>
            <Footer/>
        </div>
    );
}

export default Homepage;
