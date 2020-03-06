import React, { FC, useEffect, useState } from 'react';
import './contact-page.css';

import IntroScreen from '../../components/intro-screen/intro-screen';

import Footer from '../../components/footer/fotter';

import TranslationModel from '../../model/translationModel';
import phrases from '../../data/translations.json';
import { url } from 'inspector';
import ContentSection from '../../components/layout/content-section/content-section';
import { TeamMember, getAllTeamMemebers } from '../../model/teamModel';
import ProfileCard from '../../components/profile-card/profile-card';

const Contactpage: FC = () => {

    const [pgMembers, setPgMembers] = useState<TeamMember[]>([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        getAllTeamMemebers().then(setPgMembers);
    }, []);

    return (
        <div className="contactpage">

            {/* Logo and countdown */}
            <IntroScreen 
                title={TranslationModel.translate(phrases.the_project_group)}>
                <div
                    style={{backgroundImage: `url("/assets/team/PG20.jpg")`}}
                    className="contactpage-background"></div>
            </IntroScreen>

            <ContentSection>
                <div className="contactpage-pg-members">
                    {pgMembers.map(member => {
                        return <ProfileCard
                            key={member.name}
                            imagePath={member.imagePath}
                            email={member.email}
                            linkedinLink={member.linkedInURL}
                            name={member.name}
                            roll={TranslationModel.translate(member.position)}/>
                    })}
                </div>
            </ContentSection>

            <Footer/>
        </div>
    );
}

export default Contactpage;
