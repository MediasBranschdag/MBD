import React, { FC } from 'react';
import './footer.css';
import CompanyLogoList from '../company-logo-list/company-logo-list';
import { MBDCompanyContext } from '../../contexts/mbd-company-provider';
import ContentSection, { ContentSectionBackground } from '../layout/content-section/content-section';
import SectionTitle from '../section-title/section-title';
import TextSection, { TextSectionAlignment } from '../text-section/text-section';
import TranslationModel from '../../model/translationModel';
import phrases from '../../data/translations.json';

const Footer: FC = (props) => {
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
                        
                        console.log(companies)
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

        <ContentSection background={ContentSectionBackground.dark}>
            <div className='footer-bottom-background'></div>
            <TextSection align={TextSectionAlignment.center}>
                Sektionen för Medieteknik, KTH
                <br />
                <a href='https://medieteknik.com'>
                    www.medieteknik.com
                </a>
            </TextSection>
        </ContentSection>
    </>);

    return (
        <MBDCompanyContext.Consumer>
            {companies => {
                return <div className='footer'>{companies.all.length > 0 ? companyInfo : preparing}</div>
            }}
        </MBDCompanyContext.Consumer>
    );
}

export default Footer;