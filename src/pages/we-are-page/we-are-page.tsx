import React, { FC, Fragment } from 'react'

//import IntroScreen from '../../components/intro-screen/intro-screen';

import Footer from '../../components/footer/footer'

import TranslationModel from '../../model/translationModel'
import phrases from '../../data/translations.json'
import ContentSection, {
    ContentSectionSize,
} from '../../components/layout/content-section/content-section'

import Background from '../../assets/backgrounds/kth_library.jpg'
import FieldCard from '../../components/field-card/field-card'
import SectionTitle from '../../components/section-title/section-title'

import UndergraduateFields from './undergraduate-fields.json'
import Masters from './master-fields.json'

import IntroScreenTitle from '../../components/intro-screen/intro-screen-title/intro-screen-title'
import CenterBackground from '../../components/center-background/center-background'

const WeArePage: FC = () => {
    return (
        <div className='what-is-page'>
            <CenterBackground background={Background}>
                <IntroScreenTitle noGradient bottomPadding>
                    {TranslationModel.translate(
                        phrases.we_are_media_technology
                    )}
                </IntroScreenTitle>
            </CenterBackground>

            <div id='master-programmes' />
            <ContentSection size={ContentSectionSize.normal}>
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
                <br />
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
