import React, { FC, useEffect, useState } from 'react'
import './contact-page.css'

import Footer from '../../components/footer/footer'

import TranslationModel from '../../model/translationModel'
import phrases from '../../data/translations.json'
import ContentSection, {
    ContentSectionBackground,
} from '../../components/layout/content-section/content-section'
import { TeamMember, getAllTeamMembers } from '../../model/teamModel'
import ProfileCard from '../../components/profile-card/profile-card'
import TextSection from '../../components/text-section/text-section'
import ContactForm from './contact-form/contact-form'

import Background from '../../assets/backgrounds/team.jpg'
import IntroScreen from '../../components/intro-screen/intro-screen'
import SectionTitle from '../../components/section-title/section-title'

const Contactpage: FC = () => {
    const [pgMembers, setPgMembers] = useState<TeamMember[]>([])

    useEffect(() => {
        window.scrollTo(0, 0)
        getAllTeamMembers().then(setPgMembers)
    }, [])

    return (
        <div className='contactpage'>
            <IntroScreen
                title={TranslationModel.translate(phrases.the_project_group)}
            >
                <div
                    style={{ backgroundImage: `url(${Background})` }}
                    className='contactpage-background'
                ></div>
            </IntroScreen>

            {/* List of every memeber in PG */}
            <ContentSection>
                <div className='contactpage-pg-members'>
                    {pgMembers.map((member) => {
                        return (
                            <ProfileCard
                                key={member.name}
                                imagePath={member.imagePath}
                                email={member.email}
                                linkedinLink={member.linkedInURL}
                                name={member.name}
                                role={TranslationModel.translate(
                                    member.position
                                )}
                            />
                        )
                    })}
                </div>

                <div className='photographer-thanks'>
                    {TranslationModel.translate(phrases.photo_thanks_start)}{' '}
                    <a
                        href='https://www.instagram.com/fotogruppen_medieteknik/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Johan Wangärd
                    </a>{' '}
                    {TranslationModel.translate(phrases.photo_thanks_end)}!
                </div>
            </ContentSection>
            {/* Contact form*/}
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

export default Contactpage
