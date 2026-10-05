import React, {
    useEffect,
    useState,
    useContext,
    useCallback,
    Fragment,
} from 'react'
import './student-page.css'

import TranslationModel from '../model/translationModel'
import phrases from '../../data/translations.json'
import ContentSection from '../../components/layout/content-section/content-section'
import TextSection, {
    TextSectionAlignment,
} from '../../components/text-section/text-section'
import { Button } from '../../components/button/button'

import { Company } from '../model/companyModel'
import { MBDCompanyContext } from '../../contexts/mbd-company-provider'
import CompanyCard from '../../components/company-card/company-card'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import Chip from '../../components/chip/chip'

import IntroScreenTitle from '../../components/intro-screen/intro-screen-title/intro-screen-title'
import SectionTitle, {TitleSectionAlignment} from '../../components/section-title/section-title'
import { Card } from '@material-ui/core'
import Tag from '../../components/tag/tag'
import Close from '../../assets/icons/other/close_outline.svg'

import masskarta from '../../assets/masskarta2026.jpg'

const Studentpage = () => {
    //const companiesContext = useContext(MBDCompanyContext) //gets company data from nearest provider (mbd-company-provider.tsx)

    const windowDimensions = useWindowDimensions()

    const [companyDescriptionRef, _setCompanyDescriptionRef] =
        useState<HTMLDivElement>()
    const [activeCompany, _setActiveCompany] = useState<Company | null>(null)
    const [showMore, _setShowMore] = useState(true)
    const [onMobile, _setOnMobile] = useState(false)
    const [employments, _setEmployments]: any = useState({})
    const [mainSponsor, _setMainSponsor] = useState<Company>()
    const [showMapPopup, _setShowMapPopup] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        _setOnMobile(windowDimensions.width < 700)
    }, [windowDimensions.width])

    const getActiveEmployments = () => {
        return Object.keys(employments).filter((id) => employments[id])
    }

    const onCompanyRefChange = useCallback((node) => {
        _setCompanyDescriptionRef(node)
    }, [])

    const changeActiveCompany = (company: Company) => {
        _setActiveCompany(
            activeCompany === company && onMobile ? null : company
        )
        if (!onMobile)
            window.scrollTo({
                behavior: 'smooth',
                top: document.getElementById('active-company')?.offsetTop! - 90,
            })
    }

    const sortByName = (a: Company, b: Company) => {
        return a.name === b.name ? 0 : a.name < b.name ? -1 : 1
    }

    const sortByMatchingEmployments = (a: Company, b: Company) => {
        return (b.matchesEmployments ? 1 : 0) - (a.matchesEmployments ? 1 : 0)
    }

    const getActiveCompanyContent = () => {
        if (activeCompany === null || activeCompany === undefined) {
            return
        }

        return (
            <div className='student-page'>
                <div className='studentpage-active-company-header'>
                    <h2>{activeCompany.name}</h2>
                    {activeCompany.isMainSponsor ? (
                        <Tag gold className='tag'>
                            {TranslationModel.translate(phrases.main_sponsor)}
                        </Tag>
                        ) : activeCompany.isSponsor ? (
                        <Tag silver className='tag'>
                            {TranslationModel.translate(phrases.silver_sponsor)}
                        </Tag>
                        ) : null}

                    {activeCompany.isLecturer && (
                            <Tag gray className='tag'>
                                {TranslationModel.translate(
                                    phrases.lecturers
                                )}
                            </Tag>
                           
                    )}

                    <button
                        type='button'
                        className='studentpage-close-button close no-tap-highlight'
                        onClick={() => _setActiveCompany(null)}
                    >
                         <img src={Close} alt='close' />

                    </button>
                </div>

                <div className='active-company'>
               
                    <div
                        className='studentpage-company-description'
                        dangerouslySetInnerHTML={{
                            __html:
                                TranslationModel.translate(
                                    activeCompany.getDescription()
                                )?.toString() ?? '',
                        }}
                    />
                    <div className='studentpage-active-company-left'>

                        <div
                            className='studentpage-active-company-logo'
                            style={{
                                backgroundImage: `url('/assets/companies/${activeCompany.logo_path}')`,
                            }}
                        />
                        <div className='studentpage-active-company-actions'>
                            <a
                                href={`http://${activeCompany?.url}`}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <Button>
                                    {TranslationModel.translate(
                                        phrases.go_to_companies
                                    )}
                                </Button>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

    // All of the information from the database such as Description, CompanyName, and image (not link to website) AND Buttons
    const exhibitors = (
        <>
            {onMobile ? (
                <></>
            ) : (
                <div className='studentpage-active-company' id='active-company'>
                    <div
                        key={activeCompany?.id}
                        ref={onCompanyRefChange}
                        className='studentpage-company-description'
                    >
                        <TextSection>{getActiveCompanyContent()}</TextSection>
                    </div>
                </div>
            )}

            <MBDCompanyContext.Consumer>
                {(companies) => {
                    return (
                        <div className='studentpage-employments'>
                            {companies.isExhibitor
                                .map((job) => job.employments)
                                .flat().length > 0 ? (
                                <>
                                    <div className='filter'>
                                        {TranslationModel.translate(
                                            phrases.filter
                                        )}
                                    </div>
                                    {companies.isExhibitor
                                        .map((job) => job.employments)
                                        .flat()
                                        .filter(
                                            (elem, index, self) =>
                                                self.findIndex((t) => {
                                                    return t.id === elem.id
                                                }) === index
                                        )
                                        .sort(function (a, b) {
                                            return a.priority - b.priority
                                        })
                                        .map((employment) => (
                                            <Chip
                                                key={
                                                    'chip_select_' +
                                                    employment.id
                                                }
                                                selected={
                                                    employments[
                                                        'chip_select_' +
                                                            employment.id
                                                    ]
                                                }
                                                onClick={() =>
                                                    _setEmployments({
                                                        ...employments,
                                                        ['chip_select_' +
                                                        employment.id]:
                                                            !employments[
                                                                'chip_select_' +
                                                                    employment.id
                                                            ],
                                                    })
                                                }
                                                clickable
                                            >
                                                {TranslationModel.translate(
                                                    employment.name
                                                )}
                                            </Chip>
                                        ))}
                                </>
                            ) : (
                                <></>
                            )}
                        </div>
                    )
                }}
            </MBDCompanyContext.Consumer>

            <div className='studentpage-companies-container'>
                <MBDCompanyContext.Consumer>
                    {(companies) => {
                        companies.isExhibitor.map(
                            (company) =>
                                (company.matchesEmployments =
                                    company.employments
                                        .map((el) => 'chip_select_' + el.id)
                                        .some((r) =>
                                            getActiveEmployments().includes(r)
                                        ))
                        )
                        return companies.isExhibitor
                            .sort(sortByName)
                            .sort(sortByMatchingEmployments)
                            .map((company) => {
                                return (
                                    <Fragment key={company.id}>
                                        <CompanyCard
                                            key={company.id}
                                            onClick={() => {
                                                changeActiveCompany(company)
                                            }}
                                            isActive={company === activeCompany}
                                            company={company}
                                            showDesc={company === activeCompany}
                                            disabled={
                                                getActiveEmployments().length >
                                                    0 &&
                                                !company.matchesEmployments
                                            }
                                        />
                                    </Fragment>
                                )
                            })
                    }}
                </MBDCompanyContext.Consumer>
            </div>
        </>
    )

    return (
        //In preperation- text
        // <CenterContent>
        //     <div style={{color: "white"}}>
        //     {TranslationModel.translate({
        //         se: (
        //             <>
        //                 <h1>Mer information kommer snart...</h1>
        //             </>
        //         ),
        //         en: (
        //             <>
        //                 <h1>More information coming soon...</h1>
        //             </>
        //         ),
        //     })}
        // </div>
        // </CenterContent>

        <div className='studentpage'>
            <div id='studentpage-exhibitors'>
                <IntroScreenTitle noGradient={true} bottomPadding={true}>
                    {TranslationModel.translate(phrases.exhibitors)}
                </IntroScreenTitle>
                <TextSection align={TextSectionAlignment.center}>
                    {TranslationModel.translate({
                        se: (
                            <span>
                                Är du student? Här hittar du information om
                                årets utställare som deltar i branschdagen!
                                Kanske din nästa arbetsplats?
                            </span>
                        ),
                        en: (
                            <span>
                                Are you a student? Here you will find
                                information about this years participants in the
                                career fair! Maybe your next employer will be
                                there?
                            </span>
                        ),
                    })}
                </TextSection>
                <ContentSection>
                    <SectionTitle align={TitleSectionAlignment.center}>
                        {TranslationModel.translate(
                            phrases.this_years_exhibitors
                        )}
                    </SectionTitle>
                    <MBDCompanyContext.Consumer>
                        {(companies) => {
                            return companies.all.length > 0 ? (
                                exhibitors
                            ) : (
                                <TextSection
                                    align={TextSectionAlignment.center}
                                >
                                    {TranslationModel.translate(
                                        phrases.in_preparation
                                    )}
                                </TextSection>
                            )
                        }}
                    </MBDCompanyContext.Consumer>
                </ContentSection>
                <ContentSection>
                    <SectionTitle align={TitleSectionAlignment.center}>
                        {TranslationModel.translate(
                            phrases.map
                        )}
                    </SectionTitle>
                    <div className='map-image-container'>  
                        <img src={masskarta} alt='map' className='map-image'/>
                    </div>
                </ContentSection>
            </div>
        </div>
    )
}

export default Studentpage
