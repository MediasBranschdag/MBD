import React, { useEffect, useState, useContext, useCallback, Fragment } from 'react';
import './student-page.css';

import TranslationModel from '../../model/translationModel';
import phrases from '../../data/translations.json';
import Footer from '../../components/footer/footer';
import ContentSection from '../../components/layout/content-section/content-section';
import TextSection, { TextSectionAlignment } from '../../components/text-section/text-section';
import { Button } from '../../components/button/button';

import Close from '../../assets/icons/other/close_outline.svg';
import SectionTitle from '../../components/section-title/section-title';
import { Company } from '../../model/companyModel';
import { MBDCompanyContext } from '../../contexts/mbd-company-provider';
import CompanyCard from '../../components/company-card/company-card';
import LoadingText from '../../components/loading-text';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import Chip from '../../components/chip/chip';


const Studentpage = () => {

    const companiesContext = useContext(MBDCompanyContext);
    const closedDescriptionHeight = 300;

    const windowDimensions = useWindowDimensions();

    const [companyDescriptionRef, _setCompanyDescriptionRef] = useState<HTMLDivElement>();
    const [activeCompany, _setActiveCompany] = useState<Company | null>(null);
    const [descriptionOpen, _setDescriptionOpen] = useState<boolean>(false);
    const [descriptionHeight, _setDescriptionHeight] = useState<number>(closedDescriptionHeight);
    const [showMore, _setShowMore] = useState(true);
    const [onMobile, _setOnMobile] = useState(false);
    const [employments, _setEmployments]: any = useState({});

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        _setOnMobile(windowDimensions.width < 700)
    }, [windowDimensions.width])
    
    useEffect(() => {
        if(!onMobile) _setActiveCompany(companiesContext.isMainSponsor[0] ?? companiesContext.isExhibitor[0]);
    }, [onMobile, companiesContext.isMainSponsor, companiesContext.isExhibitor]);

    const getActiveEmployments = () => {
        return Object.keys(employments).filter((id) => employments[id])
    }

    const onCompanyRefChange = useCallback(node => {
        _setCompanyDescriptionRef(node);
        if (node !== null) { 
            _setShowMore(node.scrollHeight! > (closedDescriptionHeight))
        }
    }, [])

    const changeActiveCompany = (company: Company) => {
        _setActiveCompany(activeCompany === company && onMobile ? null : company)
        if(!onMobile) window.scrollTo({behavior: 'smooth', top: document.getElementById('active-company')?.offsetTop! - 90})
        toggleDescription(true);
    }

    const toggleDescription = (forceClose: boolean = false) => {
        const shouldClose = descriptionOpen || forceClose;
        _setDescriptionOpen(!shouldClose);
        _setDescriptionHeight(
            shouldClose 
            ? closedDescriptionHeight 
            : (companyDescriptionRef?.scrollHeight ?? 200)
        );
    }

    const sortByName = (a: Company, b: Company) => {
        return (a.name === b.name) ? 0 : (a.name < b.name) ? -1 : 1
    }

    const sortByMatchingEmployments = (a: Company, b: Company) => {
        return (b.matchesEmployments ? 1 : 0) - (a.matchesEmployments ? 1 : 0)
    }

    const getActiveCompanyContent = () => {
        if (activeCompany === null || activeCompany === undefined) {
            return <LoadingText/>;
        }
        
        return <div className='student-page'>
            <h2>{activeCompany.name}</h2>
            <div>
                <div className='studentpage-active-company-right'>
                    <div 
                        className='studentpage-active-company-logo' 
                        style={{backgroundImage: `url('/assets/companies/${activeCompany.logo_path}')`}} 
                        />
                        <div className='studentpage-active-company-employments'>
                            { activeCompany.employments.map(employment => <Chip key={'chip_'+employment.id} selected>{TranslationModel.translate(employment.name)}</Chip>) }
                        </div>
                </div>
                
                <div className='studentpage-company-description' dangerouslySetInnerHTML={{
                    __html: TranslationModel.translate(activeCompany.getDescription())?.toString() ?? ''
                }}></div>
            </div>
            {
                showMore && !descriptionOpen
                ? <div className='studentpage-company-description-overflow'></div>
                : <></>
            }
        </div>
    }

    const exhibitors = (<>
        { onMobile ? <></> :
            <div className='studentpage-active-company' id='active-company'>
                <div 
                    key={activeCompany?.id}
                    ref={onCompanyRefChange} 
                    style={{
                        height: `${descriptionHeight}px`
                    }}
                    className='studentpage-company-description'>
                    <TextSection>
                        {getActiveCompanyContent()}
                    </TextSection>
                </div>
                <div className='studentpage-active-company-actions'>
                    { showMore ? <Button onClick={toggleDescription} className='studentpage-show-more-button'>
                        {
                            descriptionOpen
                            ? TranslationModel.translate(phrases.show_less)
                            : TranslationModel.translate(phrases.read_more)
                        }
                    </Button> : <></> }
                    <a href={`http://${activeCompany?.url}`} target='_blank' rel='noopener noreferrer'>
                        <Button>
                            {TranslationModel.translate(phrases.go_to_companies)}
                        </Button>
                    </a>
                </div>
            </div>
        }
        
        <MBDCompanyContext.Consumer>
            {companies => {
                return <div className='studentpage-employments'>
                    {
                        companies.isExhibitor.map(job => job.employments).flat().length > 0 ? <>
                            <div className='filter'>{TranslationModel.translate(phrases.filter)}</div>
                            { companies.isExhibitor.map(job => job.employments).flat()
                                .filter((elem, index, self) => self.findIndex(
                                    (t) => {return (t.id === elem.id)}) === index)
                                .sort(function(a,b) {return a.priority - b.priority})
                                .map(employment => 
                                    <Chip 
                                        key={'chip_select_'+employment.id}
                                        selected={employments['chip_select_'+employment.id]}
                                        onClick={() => _setEmployments({...employments, ['chip_select_'+employment.id]: !employments['chip_select_'+employment.id]})}
                                        clickable >
                                        {TranslationModel.translate(employment.name)}
                                    </Chip>
                                ) 
                            }
                                <div className='employments-clear no-tap-highlight' onClick={() => _setEmployments({})}>
                                    <img src={Close} alt='clear'/>
                                </div> 
                            </> : <></>
                    }
                </div>
            }}
        </MBDCompanyContext.Consumer>

        <div className='studentpage-companies-container'>
            <MBDCompanyContext.Consumer>
                {companies => {
                    companies.isExhibitor.map(company => company.matchesEmployments = company.employments.map(el => 'chip_select_'+el.id).some(r=> getActiveEmployments().includes(r)))
                    return companies.isExhibitor.sort(sortByName).sort(sortByMatchingEmployments).map(company => {
                        return <Fragment key={company.id}> 
                            <CompanyCard
                                key={company.id}
                                onClick={() => {changeActiveCompany(company)}}
                                isActive={company === activeCompany} 
                                company={company}
                                showDesc={company === activeCompany}
                                disabled={getActiveEmployments().length > 0 && !company.matchesEmployments}
                                />
                        </Fragment>
                    });
                }}
            </MBDCompanyContext.Consumer>
        </div>
    </>)

    return (
        <div className='studentpage'>

            {/* Info section */}
            <div id='studentpage-exhibitors'>
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
            <Footer />
        </div>
    );
}

export default Studentpage;