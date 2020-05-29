import React, { FC, useEffect, useState } from 'react';
import './contact-page.css';

import IntroScreen from '../../components/intro-screen/intro-screen';

import Footer from '../../components/footer/footer';

import TranslationModel from '../../model/translationModel';
import phrases from '../../data/translations.json';
import ContentSection, { ContentSectionBackground } from '../../components/layout/content-section/content-section';
import { TeamMember, getAllTeamMemebers } from '../../model/teamModel';
import ProfileCard from '../../components/profile-card/profile-card';
import TextSection from '../../components/text-section/text-section';
import ContactForm from '../company-page/contact-form/contact-form';

import Background from '../../assets/backgrounds/branches_buds.jpg';
import IntroScreenTitle from '../../components/intro-screen/intro-screen-title/intro-screen-title';
import CenterBackground from '../../components/center-background/center-background';

const Contactpage: FC = () => {

    const [pgMembers, setPgMembers] = useState<TeamMember[]>([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        getAllTeamMemebers().then(setPgMembers);
    }, []);

    return (
        <div className="contactpage">

            {/* Image on PG, TODO add when we have a picture of the whole group
            <IntroScreen 
                title={TranslationModel.translate(phrases.the_project_group)}>
                <div
                    style={{backgroundImage: `url(${Background})`}}
                    className="contactpage-background"></div>
            </IntroScreen>*/}

            <CenterBackground background={Background}>
                <IntroScreenTitle>{TranslationModel.translate(phrases.the_project_group)}</IntroScreenTitle>
            </CenterBackground>
            
            {/* List of every memeber in PG */}
            <ContentSection>
                <div className="contactpage-pg-members" >
                    {pgMembers.map(member => {
                        return <ProfileCard
                            key={member.name}
                            imagePath={member.imagePath}
                            email={member.email}
                            linkedinLink={member.linkedInURL}
                            name={member.name}
                            role={TranslationModel.translate(member.position)}/>
                    })}
                </div>
            </ContentSection>

            {/* Contact form*/}
            <ContentSection background={ContentSectionBackground.dark}>
              
                <TextSection>
                    <h1>
                        {TranslationModel.translate(phrases.contact_us)}!
                    </h1>
                    
                    <ContactForm/>
                    
                    <h4>
                    {"branschdag@medieteknik.com"}
                    </h4>
                </TextSection>
            </ContentSection>

            <Footer/>
        </div>
    );
}

export default Contactpage;
