import React, { FC, useEffect } from 'react';
import './footer.css';
import CompanyLogoList from '../company-logo-list/company-logo-list';
import { MBDCompanyContext } from '../../contexts/mbd-company-provider';
import ContentSection, { ContentSectionBackground } from '../layout/content-section/content-section';
import SectionTitle from '../section-title/section-title';
import TextSection, { TextSectionAlignment } from '../text-section/text-section';

const Footer: FC = (props) => {
    return (
        <div className='footer'>

            <ContentSection>
                <SectionTitle>Huvudsponsor</SectionTitle>
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
                <SectionTitle>Utställare</SectionTitle>
                <MBDCompanyContext.Consumer>
                    {companies => <CompanyLogoList companies={companies.isExhibitor}/>}
                </MBDCompanyContext.Consumer>
            </ContentSection>

            <ContentSection>
                <SectionTitle>Sponsorer</SectionTitle>
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
        </div>
    );
}

export default Footer;