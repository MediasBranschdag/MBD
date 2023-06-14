import React, { FC } from 'react'
import './footer.css'
import CompanyLogoList from '../company-logo-list/company-logo-list'
import { MBDCompanyContext } from '../../contexts/mbd-company-provider'
import ContentSection, {
    ContentSectionBackground,
    ContentSectionSize,
} from '../layout/content-section/content-section'
import SectionTitle from '../section-title/section-title'
import TextSection, { TextSectionAlignment } from '../text-section/text-section'
import TranslationModel from '../../pages/model/translationModel'
import phrases from '../../data/translations.json'
import { isMobile, isSafari } from 'react-device-detect'

const Footer: FC<{}> = (props) => {
    const preparing = (
        <ContentSection>
            <SectionTitle>
                {TranslationModel.translate(phrases.in_preparation)}
            </SectionTitle>
        </ContentSection>
    )

    const companyInfo = (
        <>
            <MBDCompanyContext.Consumer>
                {(companies) => {
                    return companies.isMainSponsor.length > 0 ? (
                        <ContentSection>
                            <SectionTitle>
                                {TranslationModel.translate(
                                    phrases.main_sponsor
                                )}
                            </SectionTitle>
                            <div className='footer-main-sponsor'>
                                {companies.isMainSponsor.map((company) => {
                                    return (
                                        <div
                                            key={company.id}
                                            className='footer-main-sponsor-item'
                                        >
                                            <img
                                                src={
                                                    '/assets/companies/' +
                                                    company.logo_path
                                                }
                                                alt=''
                                            />
                                        </div>
                                    )
                                })}
                            </div>
                        </ContentSection>
                    ) : null
                }}
            </MBDCompanyContext.Consumer>

            <ContentSection>
                <SectionTitle>
                    {TranslationModel.translate(phrases.exhibitors)}
                </SectionTitle>
                <MBDCompanyContext.Consumer>
                    {(companies) => (
                        <CompanyLogoList companies={companies.isExhibitor} />
                    )}
                </MBDCompanyContext.Consumer>
            </ContentSection>

            <MBDCompanyContext.Consumer>
                {(companies) => {
                    console.log(companies.isLecturer)
                    return companies.isLecturer.length > 0 ? (
                        <ContentSection>
                            <SectionTitle>
                                {TranslationModel.translate(phrases.lecturers)}
                            </SectionTitle>
                            <MBDCompanyContext.Consumer>
                                {(companies) => (
                                    <CompanyLogoList
                                        companies={companies.isLecturer}
                                    />
                                )}
                            </MBDCompanyContext.Consumer>
                        </ContentSection>
                    ) : null
                }}
            </MBDCompanyContext.Consumer>

            <ContentSection>
                <SectionTitle>
                    {TranslationModel.translate(phrases.thankyou_sponsor)}
                </SectionTitle>
                <MBDCompanyContext.Consumer>
                    {(companies) => (
                        <CompanyLogoList companies={companies.isSponsor} />
                    )}
                </MBDCompanyContext.Consumer>
            </ContentSection>
        </>
    )

    return (
        <MBDCompanyContext.Consumer>
            {(companies) => {
                return (
                    <div className='footer'>
                        {/*{companies.all.length > 0 ? companyInfo : preparing}*/}

                        <ContentSection
                            background={ContentSectionBackground.dark}
                            size={ContentSectionSize.large}
                        >
                            <div className='footer-bottom-background'></div>
                            <TextSection
                                align={
                                    isMobile
                                        ? TextSectionAlignment.center
                                        : TextSectionAlignment.left
                                }
                            >
                                Sektionen för Medieteknik, KTH
                                <br />
                                <a href='https://medieteknik.com'>
                                    www.medieteknik.com
                                </a>
                                {isMobile && isSafari ? (
                                    <></>
                                ) : (
                                    <>
                                        <br />
                                        <br />
                                    </>
                                )}
                            </TextSection>
                        </ContentSection>
                    </div>
                )
            }}
        </MBDCompanyContext.Consumer>
    )
}

export default Footer
