import React, { FC, useState } from 'react'
import './footer.css'

import ContentSection, {
    ContentSectionBackground,
    ContentSectionSize,
} from '../layout/content-section/content-section'

import TranslationModel from '../../pages/model/translationModel'
import phrases from '../../data/translations.json'
import { NavLink } from 'react-router-dom'

/* Social Media Logos */
import InstagramIconWhite from '../../assets/icons/other/instagram_white.png'
import FacebookIconWhite from '../../assets/icons/other/facebook_white.png'
import LinkedIconWhite from '../../assets/icons/other/linked_in_white.png'
import TiktokIconWhite from '../../assets/icons/other/tiktok_icon_white.png'
import InstagramIconYellow from '../../assets/icons/other/instagram_icon_yellow.png'
import FacebookIconYellow from '../../assets/icons/other/facebook_icon_yellow.png'
import LinkedinIconYellow from '../../assets/icons/other/linkedin_icon_yellow.png'
import TiktokIconYellow from '../../assets/icons/other/tiktok_icon_yellow.png'


const Footer: FC<{}> = (props) => {

    /* useState allows to switch between white and yellow logo upon hovering*/
    const [instagramIcon, setInstagramIcon] = useState(InstagramIconWhite)
    const [FacebookIcon, setFacebookIcon] = useState(FacebookIconWhite)
    const [LinkedInIcon, setLinkedInIcon] = useState(LinkedIconWhite)
    const [TiktokIcon, setTiktokIcon] = useState(TiktokIconWhite)

    const openFacebook = () => {
        window.open(
            'https://www.facebook.com/mediasbranschdag',
            'Medias Branschdag Facebook'
        )
    }
    const openInstagram = () => {
        window.open(
            'https://www.instagram.com/mediasbranschdag/',
            'Medias Branschdag Instagram'
        )
    }
    const openLinkedin = () => {
        window.open(
            'https://www.linkedin.com/company/medias-branschdag/',
            'Medias Branschdag LinkedIn'
        )
    }
    const openTiktok = () => {
        window.open(
            'https://www.tiktok.com/@nlg_medieteknik',
            'NLG TikTok'
        )
    }

    return (
        <div>
            <ContentSection
                background={ContentSectionBackground.dark}
                size={ContentSectionSize.large}
            >
                <div className='footer-container'>
                    {/* Chapter Logo */}
                    <div className='footer-logo'>
                        
                        <img
                            src='https://storage.googleapis.com/medieteknik-static/static/dark_logobig.webp'
                            width={320}
                            height={128}
                            loading={'lazy'}
                        />

                    </div>
            
                    <ul className='footer-list'>
                        
                        {/* Sponsored Logo */}
                        <li className='footer-item center-sponsor'>
                            <p>
                                {TranslationModel.translate(
                                phrases.sponsored_by)}
                            </p>
                            
                            <a 
                                href="https://www.eyevinn.se/"
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <img
                                    src='./assets/companies/eyevinn.png'
                                    width={240}
                                />
                            </a>
                        </li>
                        
                        {/* Location */}
                        <li className='footer-item'>
                            <h4>
                                {TranslationModel.translate(
                                phrases.location)}
                            </h4>

                            <p>
                                Drotting Kristinas väg 15 <br /> 100 44 Stockholm <br />{' '}
                                <span>
                                    c/o THSMEDIES
                                </span>
                            </p>
                        </li>

                        {/* Contact */}
                        <li className='footer-item contact'>
                            <h4>
                                <NavLink
                                    exact to='/contact'
                                >
                                    <span className='contact-link'>
                                        {TranslationModel.translate(
                                        phrases.contact)}
                                    </span>
                            
                                </NavLink>
                            </h4>

                            <div className='contact-details'>
                                <a
                                    href='mailto:foretag@nlg.medieteknik.com'
                                >
                                    <p>foretag@nlg.medieteknik.com</p>
                                </a>
                            </div>

                            <h4>
                                {TranslationModel.translate(
                                phrases.follow_social_media)}
                            </h4>

                            <div>
                                <img
                                    className='social-logo'
                                    src={instagramIcon}
                                    onMouseEnter={() => setInstagramIcon(InstagramIconYellow)}
                                    onMouseOut={() => setInstagramIcon(InstagramIconWhite)}
                                    alt=''
                                    onClick={openInstagram}
                                />
                                <img
                                    className='social-logo'
                                    src={FacebookIcon}
                                    onMouseEnter={() => setFacebookIcon(FacebookIconYellow)}
                                    onMouseOut={() => setFacebookIcon(FacebookIconWhite)}
                                    alt=''
                                    onClick={openFacebook}
                                />
                                <img
                                    className='social-logo'
                                    src={LinkedInIcon}
                                    onMouseEnter={() => setLinkedInIcon(LinkedinIconYellow)}
                                    onMouseOut={() => setLinkedInIcon(LinkedIconWhite)}
                                    alt=''
                                    onClick={openLinkedin}
                                />
                                <img
                                    className='social-logo'
                                    src={TiktokIcon}
                                    onMouseEnter={() => setTiktokIcon(TiktokIconYellow)}
                                    onMouseOut={() => setTiktokIcon(TiktokIconWhite)}
                                    alt=''
                                    onClick={openTiktok}
                                />
                            </div>

                        </li>
                    </ul>
                </div>
            </ContentSection>
        </div>
    )

}

export default Footer

/* Older code used for conditionally rendering sponsors in the footer. Does not work anymore due to a redesign of the footer. 
Same logic has not been used above, rather, the main sponsor is hard-coded into the footer.*/

/* 
import { isMobile, isSafari } from 'react-device-detect'
import SectionTitle from '../section-title/section-title'
import TextSection, { TextSectionAlignment } from '../text-section/text-section'
import CompanyLogoList from '../company-logo-list/company-logo-list'
import { MBDCompanyContext } from '../../contexts/mbd-company-provider'
*/

/*
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
                //console.log(companies.isLecturer)
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
*/