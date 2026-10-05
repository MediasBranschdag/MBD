import React, { useEffect, useState, useCallback, useRef } from 'react'
import './company-page.css'
import TranslationModel from '../model/translationModel'
import phrases from '../../data/translations.json'

import IntroScreenTitle from '../../components/intro-screen/intro-screen-title/intro-screen-title'
import ContentSection from '../../components/layout/content-section/content-section'
import TextSection, {TextSectionAlignment} from '../../components/text-section/text-section'
import SectionTitle, {TitleSectionAlignment} from '../../components/section-title/section-title'

import Card from '../../components/card/card'
import { ContentPadding } from '../../components/content-padding'
import { ContentPaddingThin } from '../../components/content-padding-thin'
import TextWithContent from '../../components/text-with-content/text-with-content'
import { Button, ButtonTypes } from '../../components/button/button'

import Slider from '../../components/carousel/carousel'
import NavigationCard from '../../components/navigation-card/navigation-card'


import companyBackgroundImage from '../../assets/backgrounds/laptop.png'
import companyIcon from '../../assets/icons/other/company.svg'
import studentBackgroundImage from '../../assets/backgrounds/kth_stone_ground.jpg'
import studentIcon from '../../assets/icons/other/book.png'
import MapBackground from '../../assets/backgrounds/map_nymble.jpg'

import useWindowDimensions from '../../hooks/useWindowDimensions'

import texts from './texts'


const Companypage = () => {

    /* Changing the hash based on scroll position */
    const allSections = useRef<HTMLDivElement[]>([]);   

    // Adds sections to ref array (simply add id to sections to be included)
    const elemRef = useCallback((el: HTMLDivElement | null) => {
        if (el && !allSections.current.includes(el)) {
            allSections.current.push(el);
        }
    }, []);


    useEffect(() => {
        const onScroll = () => {
            if (window.pageYOffset < 150) { // Remove hash at top of page
                window.history.replaceState(null, "", window.location.pathname);
            }

            allSections.current.forEach(section => {
                const rect = section.getBoundingClientRect();
                if (rect.top > 0 && rect.top < 150) {
                    window.history.replaceState(null, "", `#${section.id}`);
                }
            });
        };

        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);



    /* Used for conditionally rendering carousel with sponsor packages */
    const windowDimensions = useWindowDimensions();
    const [onDesktop, _setOnDesktop] = useState(false);

    useEffect(() => {
            _setOnDesktop(windowDimensions.width >= 850)
        }, [windowDimensions.width]);

    
    /* Opening the correct PDF based on app language */
    const openPDF = () => {
        const lang = TranslationModel.getLanguage();
        const link =
        lang === 'se'
        ? './assets/docs/NLG_ProduktKatalog_2526.pdf'
        : './assets/docs/NLG_ProductCatalog_2526.pdf';
        
        window.open(
            link
        )
        
    }

    /* Array of main sponsor packages */
    const mainOffers = [
        {id: 1,
        card: (
        <Card light gold>
            <ContentPaddingThin>
                <Card light className="fill">
                    {TranslationModel.translate({
                    se: texts.gold.se,
                    en: texts.gold.en,
                    })}
                </Card>
            </ContentPaddingThin>
        </Card>)
        },

        {id: 2, 
        card: (
        <Card light silver>
            <ContentPaddingThin>
                <Card light className="fill">
                    {TranslationModel.translate({
                    se: texts.silver.se,
                    en: texts.silver.en,
                    })}
                </Card>
            </ContentPaddingThin>
        </Card>)
        },

        {id: 3,
        card: (
        <Card light bronze>
            <ContentPaddingThin>
                <Card light className="fill">
                    {TranslationModel.translate({
                    se: texts.bronze.se,
                    en: texts.bronze.en,
                    })}
                </Card>
            </ContentPaddingThin>
        </Card>)
        }
    ]

    
    return (
        <div className='companypage'>

            <IntroScreenTitle noGradient = {true}>{TranslationModel.translate(phrases.for_companies)}</IntroScreenTitle>
            <div  className='companypage-fair'>
                
                <ContentSection>
                    {/* About the fair + map */}
                    <TextWithContent
                        text={
                            <TextSection>
                                <h2>
                                    <SectionTitle
                                        align={TitleSectionAlignment.left}
                                    >
                                        {TranslationModel.translate(
                                            phrases.about_the_fair
                                        )}
                                    </SectionTitle>
                                </h2>
                                {TranslationModel.translate({
                                    se: (
                                        <span>
                                            {texts.about_the_fair.se}
                                            <Button buttonType={ButtonTypes.normalCompact} onClick={openPDF}>
                                                {TranslationModel.translate(phrases.product_catalog)}
                                            </Button>
                                        </span>
                                    ),
                                    en: (
                                        <span>
                                            {texts.about_the_fair.en}
                                            <Button buttonType={ButtonTypes.normalCompact} onClick={openPDF}>
                                                {TranslationModel.translate(phrases.product_catalog)}
                                            </Button>
                                        </span>
                                        
                                    ),
                                })
                                }
                            </TextSection>
                        }
                        
                        content={
                            /* Map image */
                            <div style={{width: '350px', height: '350px', overflow: 'hidden', borderRadius: '20px'}}>
                                <img src={MapBackground} style={{width: '250%', height: '250%', objectFit: 'cover', transform: 'translate(-35%, -30%)'}}/>
                            </div>
                            
                        }
                    />
                    
                </ContentSection>
            </div>
            
            <ContentSection>
                <br />
                {/* Package section */}
                <div id='packages' ref={elemRef}>   {/* Allows for scrolling and hash changes */}
                    <SectionTitle align={TitleSectionAlignment.center}>
                        {TranslationModel.translate(
                            phrases.exhibitor_packages
                        )}
                    </SectionTitle>
                    
                    <div className="companypage-offer">
                        {
                            onDesktop ?
                            <Slider activeSlide={0} data={mainOffers}/>
                            :
                            <div className='companypage-offer'>
                                <div className="main-offers">
                                    {mainOffers.map((offer)=>(
                                        <div key={offer.id}>
                                            {offer.card}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        }
                    </div>
                </div>
            
            
            <ContentSection>
                 <br />
                {/* Extras section */}
                <div>
                    <TextSection align={TextSectionAlignment.center}>
                        <SectionTitle align={TitleSectionAlignment.center}>
                            {TranslationModel.translate(
                                phrases.company_addons
                            )}
                        </SectionTitle>
                    </TextSection>
                    
                    <div className="companypage-offer">
                        {/* Something odd happens here between screen width 700 and 715, but I can't find it */}
                        <div className="additional-offers">

                            {texts.extras.map((extra, index) => (
                                <Card light className="offer-card" key={index}>
                                    <ContentPadding>
                                            {TranslationModel.translate({
                                                se: extra.se,
                                                en: extra.en,
                                            })}
                                        </ContentPadding>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </ContentSection>

            {/* Navigation cards to other pages */}
            <ContentSection style={{ marginTop: '0px'}}>

                <div className='navigation-cards-company'>
                    <NavigationCard 
                        backgroundImage={companyBackgroundImage}
                        icon={companyIcon}
                        title= {TranslationModel.translate(
                          {
                                se: (<span>
                                    Vill ni kontakta oss
                                </span>),
                                en: (<span>
                                    Do you want to reach us
                                </span>),
                            })
                        }
                        description={TranslationModel.translate({
                                se: (
                                    <span>
                                        Är du intresserad av att delta i Medias Branschdag? Kontakta oss!
                                    </span>
                                ),
                                en: (
                                    <span>
                                        Are you interested in participating in Medias Branschdag? Contct us!
                                    </span>
                                ),
                            })}
                        buttonText= {TranslationModel.translate(phrases.contact_us)}
                        nav="/contact"
                    />

                    <NavigationCard 
                        backgroundImage={studentBackgroundImage}
                        icon={studentIcon}
                        title={TranslationModel.translate(phrases.we_are_media_technology.what_is_media_technology)}
                        description={TranslationModel.translate({
                                se: (
                                    <span>
                                      Lär mer om vår utbildning här
                                    </span>
                                ),
                                en: (
                                    <span>
                                        Read more about our education here
                                    </span>
                                ),
                            })}
                        buttonText= {TranslationModel.translate(phrases.read_more)}
                        nav="/medieteknik"
                    />
                </div>
            </ContentSection>
            
        </ContentSection>

            

        </div>
    )
}

export default Companypage
