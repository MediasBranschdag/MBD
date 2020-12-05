import React, { FC, Fragment } from 'react'

import Footer from '../../components/footer/footer'

import TranslationModel from '../../model/translationModel'
import phrases from '../../data/translations.json'
import ContentSection, {
    ContentSectionBackground,
    ContentSectionSize,
} from '../../components/layout/content-section/content-section'

import Background from '../../assets/backgrounds/kth_stone_ground.jpg'
import FieldCard from '../../components/field-card/field-card'
import SectionTitle from '../../components/section-title/section-title'

import UndergraduateFields from './undergraduate-fields.json'
import Masters from './master-fields.json'

import TerminalIcon from '../../assets/icons/other/terminal.svg';
import ProfileIcon from '../../assets/icons/other/profileIcon_black.svg';
import MathIcon from '../../assets/icons/other/math.svg';

import AlumniInterviews from '../../components/alumni-interviews/alumni-interviews'
import IntroScreen from '../../components/intro-screen/intro-screen'
import IntroScreenButtons from '../../components/intro-screen/intro-screen-buttons/intro-screen-buttons'

const WeArePage: FC = () => {
    return (
        <div className='what-is-page'>
            <IntroScreen
                backgroundImage={Background}
                title={TranslationModel.translate(phrases.we_are_media_technology)}
            >
                <IntroScreenButtons
                    buttons={[
                        {
                            title: TranslationModel.translate(
                                phrases.we_are_media_technology.alumni_interviews
                            ),
                            iconPath: ProfileIcon,
                            scrollTargetID: 'alumni-interviews',
                        },
                        {
                            title: TranslationModel.translate(
                                phrases.we_are_media_technology.masters
                            ),
                            iconPath: TerminalIcon,
                            scrollTargetID: 'master-programmes',
                        },
                        {
                            title: TranslationModel.translate(
                                phrases.we_are_media_technology.undergraduate_fields
                            ),
                            iconPath: MathIcon,
                            scrollTargetID: 'undergraduate-fields',
                        }
                    ]}
                />
            </IntroScreen>

            <div id='alumni-interviews' />
            <ContentSection size={ContentSectionSize.large}>
                <SectionTitle>
                    {TranslationModel.translate(
                        phrases.we_are_media_technology.alumni_interviews
                    )}
                </SectionTitle>
                <AlumniInterviews />
            </ContentSection>

            <div id='master-programmes' />
            <ContentSection background={ContentSectionBackground.dark}>
                <SectionTitle>
                    {TranslationModel.translate(
                        phrases.we_are_media_technology.masters
                    )}
                </SectionTitle>
                <div className='master-container'>
                    {Masters.map((field) => (
                        <div key={field.title.se}>
                            <FieldCard
                                field={field}
                                key={field.title.se}
                                onClick={() => {}}
                                showDesc
                                background={field.background}
                            />
                        </div>
                    ))}
                </div>
            </ContentSection>
            <div id='undergraduate-fields' />
            <ContentSection>
                <SectionTitle>
                    {TranslationModel.translate(
                        phrases.we_are_media_technology.undergraduate_fields
                    )}
                </SectionTitle>
                {UndergraduateFields.map((field) => (
                    <Fragment key={field.title.se}>
                        <FieldCard
                            field={field}
                            key={field.title.se}
                            onClick={() => {}}
                        />
                    </Fragment>
                ))}
            </ContentSection>

            <Footer />
        </div>
    )
}

export default WeArePage
