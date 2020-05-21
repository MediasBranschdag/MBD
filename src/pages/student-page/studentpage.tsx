import React, { useEffect, useState, useContext, useRef } from 'react';
import './studentpage.css';

import TranslationModel from '../../model/translationModel';
import phrases from '../../data/translations.json';
import Footer from '../../components/footer/footer';
import IntroScreen from '../../components/intro-screen/intro-screen';
import IntroScreenButtons from '../../components/intro-screen/intro-screen-buttons/intro-screen-buttons';
import ContentSection, { ContentSectionSize } from '../../components/layout/content-section/content-section';
import TextSection, { TextSectionAlignment } from '../../components/text-section/text-section';
import CenterBackground from '../../components/center-background/center-background';
import { Button, ButtonTypes } from '../../components/button/button';

import TicketIcon from '../../assets/icons/other/tickets_black.svg';
import BoothIcon from '../../assets/icons/other/booth_black.svg';

import IntroScreenBackground from '../../assets/backgrounds/kth_stone_ground.jpg';
import DinnerBackground from '../../assets/backgrounds/dinner_background.png';
import SectionTitle from '../../components/section-title/section-title';
import { Company } from '../../model/companyModel';
import { MBDCompanyContext } from '../../contexts/mbd-company-provider';
import CompanyCard from '../../components/company-card/company-card';
import LoadingText from '../../components/loading-text';


const Studentpage = () => {

    const companiesContext = useContext(MBDCompanyContext);
    const companyDescriptionRef = useRef<HTMLDivElement>(null);
    const closedDescriptionHeight = 250;

    const [activeCompany, _setActiveCompany] = useState<Company | null>(null);
    const [descriptionOpen, _setDescriptionOpen] = useState<boolean>(false);
    const [descriptionHeight, _setDescriptionHeight] = useState<number>(closedDescriptionHeight);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    useEffect(() => {
        _setActiveCompany(companiesContext.isMainSponsor[0] ?? companiesContext.all[0]);
    }, [companiesContext.isMainSponsor]);

    const changeActiveCompany = (company: Company) => {
        _setActiveCompany(company);
        toggleDescription(true);
    }

    const toggleDescription = (forceClose: boolean = false) => {
        const shouldClose = descriptionOpen || forceClose;
        _setDescriptionOpen(!shouldClose);
        _setDescriptionHeight(
            shouldClose 
            ? closedDescriptionHeight 
            : (companyDescriptionRef.current?.scrollHeight ?? 200)
        );
    }

    const getActiveCompanyContent = () => {
        if (activeCompany === null || activeCompany === undefined) {
            return <LoadingText/>;
        }
        
        return <div>
            <h2>{activeCompany.name}</h2>
            <div>
                <img 
                    className="studentpage-active-company-logo" 
                    src={"/assets/companies/" + activeCompany.logo_path} 
                    alt=""/>
                <div dangerouslySetInnerHTML={{
                    __html: TranslationModel.translate(activeCompany.getDescription())?.toString() ?? ''
                }}></div>
            </div>
            {
                descriptionOpen
                ? <></>
                : <div className="studentpage-company-description-overflow"></div>
            }
        </div>
    }

    const exhibitors = (<>
        <div className="studentpage-active-company">
            <div 
                ref={companyDescriptionRef} 
                style={{
                    height: `${descriptionHeight}px`
                }}
                className="studentpage-company-description">
                <TextSection>
                    {getActiveCompanyContent()}
                </TextSection>
            </div>
            <div className="studentpage-active-company-actions">
                <Button onClick={toggleDescription}>
                    {
                        descriptionOpen
                        ? TranslationModel.translate(phrases.show_less)
                        : TranslationModel.translate(phrases.read_more)
                    }
                </Button>
                <a href={`http://${activeCompany?.url}`} target="_blank" rel="noopener noreferrer">
                    <Button 
                        className={"studentpage-active-company-website-button"}>
                        {TranslationModel.translate(phrases.go_to_companies)}
                    </Button>
                </a>
            </div>
        </div>

        <div className="studentpage-companies-container">
            <MBDCompanyContext.Consumer>
                {companies => {
                    return companies.isExhibitor.map(company => {
                        return <CompanyCard
                            key={company.id}
                            onClick={() => {changeActiveCompany(company)}}
                            isActive={company === activeCompany} 
                            company={company}/>
                    });
                }}
            </MBDCompanyContext.Consumer>
        </div>
    </>)

    return (
        <div className="studentpage">
            <IntroScreen
                backgroundImage={IntroScreenBackground}
                title={TranslationModel.translate(phrases.for_students)}
            >
                <IntroScreenButtons
                    buttons={[
                        {
                            title: TranslationModel.translate(
                                phrases.dinner_party
                            ),
                            iconPath: TicketIcon,
                            scrollTargetID: "studentpage-dinner",
                        },
                        {
                            title: TranslationModel.translate(
                                phrases.exhibitors
                            ),
                            iconPath: BoothIcon,
                            scrollTargetID: "studentpage-exhibitors",
                        },
                    ]}
                />
            </IntroScreen>

            {/* Info section */}
            <div id="studentpage-exhibitors">
                <ContentSection>
                    <SectionTitle>
                        {TranslationModel.translate(phrases.exhibitors)}
                    </SectionTitle>
                    <MBDCompanyContext.Consumer>
                        {companies => {
                            return companies.all.length > 0 ? exhibitors : <TextSection align={TextSectionAlignment.center}>{TranslationModel.translate(phrases.in_preparation)}</TextSection>
                        }}
                    </MBDCompanyContext.Consumer>
                </ContentSection>
            </div>

            {/* Info section */}
            <div id="studentpage-dinner">
                <CenterBackground backgroundURL={DinnerBackground}>
                    <ContentSection size={ContentSectionSize.small}>
                        <SectionTitle>
                            {TranslationModel.translate(phrases.dinner_party)}
                        </SectionTitle>
                        <TextSection align={TextSectionAlignment.center}>
                            {
                                TranslationModel.translate({
                                    "se":
                                        <span>
                                            Medias Branschdag kommer att avslutas med en sittning där företag och studenter 
                                            får chansen att utveckla samtal om framtiden mer på djupet. Detta är en utmärkt 
                                            möjlighet för företag att ta del av Medietekniks många traditioner och lära känna 
                                            potentiella framtida kollegor på ett mer avslappnat plan.
                                            <br /><br />
                                            Sittningen kommer 
                                            även vara ett ypperligt tillfälle för studenter att få marknadsföra sig själva 
                                            som civilingenjörer. Vi ser fram emot att få anordna en spektakulär kväll och 
                                            vi hoppas att ni är lika upprymda som vi är!
                                            <br /><br />
                                            Sittningen börjar 18:00 i Restaurang Q. Mer detaljerad information kommer upp 
                                            allt eftersom på vår Facebook-sida.
                                        </span>,
                                    "en":
                                        <span>
                                            At the end of Medias Branschdag, a dinner party is held where companies and 
                                            students have the chance to connect on a deeper level. This is a great 
                                            oppurtunity for companies to take part in the many traditions of the Media Technology 
                                            programme and get to know their potential future peers in a more relaxed setting.
                                            <br /><br />
                                            The dinner party is also  a perfect way for students to promote themselves as 
                                            future engineers. We are really excited to arrange this spectacular evening and 
                                            hope you are just as exhilarated as us!
                                            <br /><br />
                                            The dinner party will start at 18:00 in Restaurang Q. More details can be found at 
                                            our Facebook-page closer to the event.
                                        </span>,
                                })
                            }
                            <br /><br />
                            <a href="https://www.facebook.com/mediasbranschdag/" target="_blank" rel="noopener noreferrer">
                                <Button buttonType={ButtonTypes.normalCompact}>
                                    {TranslationModel.translate(phrases.read_more)}
                                </Button>
                            </a>
                        </TextSection>
                    </ContentSection>
                </CenterBackground>
            </div>
            <Footer />
        </div>
    );
}

export default Studentpage;