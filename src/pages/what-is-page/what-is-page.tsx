import React, { FC, Fragment, useEffect, useState } from 'react'
import './what-is-page.css'

//import IntroScreen from '../../components/intro-screen/intro-screen';

import Footer from '../../components/footer/footer'

import TranslationModel from '../../model/translationModel'
import phrases from '../../data/translations.json'
import ContentSection, { ContentSectionSize } from '../../components/layout/content-section/content-section'
import TicketIcon from '../../assets/icons/other/tickets_black.svg';
import BoothIcon from '../../assets/icons/other/booth_black.svg';
import QuestionIcon from '../../assets/icons/other/question_mark_black.svg';
import MBDLogoBlack from '../../assets/mbd-logo/mbd-logo-black.svg';

import Background from '../../assets/backgrounds/kth_library.jpg'
import IntroScreen from '../../components/intro-screen/intro-screen'
import IntroScreenButtons from '../../components/intro-screen/intro-screen-buttons/intro-screen-buttons'
import CompanyCard from '../../components/company-card/company-card'
import FieldCard from '../../components/field-card/field-card'
import SectionTitle from '../../components/section-title/section-title'

import UndergraduateFields from './undergraduate-fields.json'
import Masters from './master-fields.json'

import Test from '../../assets/masters/interactive_media_technology.jpg'

const WhatIsPage: FC = () => {

  
    return (
        <div className='what-is-page'>

            <IntroScreen
                backgroundImage={Background}
                title={TranslationModel.translate(phrases.what_is_media_technology)}
            >
                <IntroScreenButtons
                    buttons={[
                        {
                            title: TranslationModel.translate(
                                phrases.about_us
                            ),
                            iconPath: QuestionIcon,
                            scrollTargetID: 'master-programmes',
                        },
                        {
                            title: TranslationModel.translate(
                                phrases.exhibitor_package
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
                            title: TranslationModel.translate(
                                phrases.the_fair
                            ),
                            iconPath: MBDLogoBlack,
                            scrollTargetID: 'companypage-fair',
                        },
                    ]}
                />
            </IntroScreen>
            <div id='master-programmes'>
                <ContentSection size={ContentSectionSize.large}>
                    <SectionTitle>Masterprogram</SectionTitle>
                    {Masters.map(field => <div key={field.title.se}><FieldCard
                    field={field}
                                    key={field.title.se}
                                    onClick={() => {}}
                                    showDesc
                                    background={field.background}
                                    /></div>)}
                </ContentSection>
            </div>
            <ContentSection >
                <SectionTitle>Kandidatområden</SectionTitle>
                {UndergraduateFields.map(field => <Fragment key={field.title.se}><FieldCard
                field={field}
                                key={field.title.se}
                                onClick={() => {}}
                                /></Fragment>)}
            </ContentSection>

            <Footer />
        </div>
    )
}

export default WhatIsPage
