import React, { FC } from 'react';
import './footer.css';
import CompanyLogoList from '../company-logo-list/company-logo-list';
import { MBDCompanyContext } from '../../contexts/mbd-company-provider';
import ContentSection, { ContentSectionBackground, ContentSectionSize } from '../layout/content-section/content-section';
import SectionTitle from '../section-title/section-title';
import TextSection, { TextSectionAlignment } from '../text-section/text-section';
import TranslationModel from '../../model/translationModel';
import phrases from '../../data/translations.json';
import { isMobile, isMobileSafari } from 'react-device-detect';

const Footer: FC<{}> = (props) => {
    
    const preparing = (
        <ContentSection>
            <SectionTitle>
                {TranslationModel.translate(phrases.in_preparation)}
            </SectionTitle>
        </ContentSection>)

    const companyInfo = (<>
        <ContentSection>
            <SectionTitle>{TranslationModel.translate(phrases.main_sponsor)}</SectionTitle>
            <div className="footer-main-sponsor">
                <MBDCompanyContext.Consumer>
                    {companies => {
                        return companies.isMainSponsor.map(company => {
                            return <div key={company.id} className='footer-main-sponsor-item'>
                                <img src={"/assets/companies/" + company.logo_path} alt=""/>
                            </div>
                        })
                    }}
                </MBDCompanyContext.Consumer>
            </div>
        </ContentSection>

        <ContentSection>
            <SectionTitle>{TranslationModel.translate(phrases.exhibitors)}</SectionTitle>
            <MBDCompanyContext.Consumer>
                {companies => <CompanyLogoList companies={companies.isExhibitor}/>}
            </MBDCompanyContext.Consumer>
        </ContentSection>

        <ContentSection>
            <SectionTitle>{TranslationModel.translate(phrases.thankyou_sponsor)}</SectionTitle>
            <MBDCompanyContext.Consumer>
                {companies => <CompanyLogoList companies={companies.isSponsor}/>}
            </MBDCompanyContext.Consumer>
        </ContentSection>
    </>);

    return (
        <MBDCompanyContext.Consumer>
            {companies => {
                return <div className='footer'>
                    {companies.all.length > 0 ? companyInfo : preparing}
                    <ContentSection background={ContentSectionBackground.dark} size={ContentSectionSize.large}>
                        <div className='footer-bottom-background'></div>
                        <TextSection align={isMobile ? TextSectionAlignment.center : TextSectionAlignment.left}>
                            Sektionen för Medieteknik, KTH
                            <br />
                            <a href='https://medieteknik.com'>
                                www.medieteknik.com
                            </a>
                            {isMobileSafari ? <></> :
                                <>
                                    <br/><br/>
                                    <i>{TranslationModel.translate(phrases.intro_movie_credit)}</i>
                                </>
                            }
                        </TextSection>
                    </ContentSection>
                </div>
            }}
        </MBDCompanyContext.Consumer>
    );
}

export default Footer;