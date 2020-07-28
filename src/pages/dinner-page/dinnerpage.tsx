import React, { useEffect, useState, useContext, useRef } from 'react';
import './dinnerpage.css';

import TranslationModel from '../../model/translationModel';
import phrases from '../../data/translations.json';
import Footer from '../../components/footer/footer';
import IntroScreen from '../../components/intro-screen/intro-screen';
import IntroScreenButtons from '../../components/intro-screen/intro-screen-buttons/intro-screen-buttons';
import ContentSection, { ContentSectionBackground, ContentSectionSize } from '../../components/layout/content-section/content-section';
import TextSection, { TextSectionAlignment } from '../../components/text-section/text-section';
import CenterBackground from '../../components/center-background/center-background';
import { Button, ButtonTypes } from '../../components/button/button';

import TicketIcon from '../../assets/icons/other/tickets_black.svg';
import BoothIcon from '../../assets/icons/other/booth_black.svg';

import IntroScreenBackground from '../../assets/backgrounds/kth_stone_ground.jpg';
import DinnerBackground from '../../assets/backgrounds/dinner_background.png';
import DinnerPgBackground from '../../assets/backgrounds/dinner_pg_background.png';
import SectionTitle from '../../components/section-title/section-title';
import { Company } from '../../model/companyModel';
import { MBDCompanyContext } from '../../contexts/mbd-company-provider';
import CompanyCard from '../../components/company-card/company-card';
import LoadingText from '../../components/loading-text';
import Card from '../../components/card/card';
import { ContentPadding } from '../../components/content-padding';
import { InputInfoHeader } from '../../components/input-info/input-info-header/input-info-header';
import { InputInfo } from '../../components/input-info/input-info';

import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, InputLabel, Select, MenuItem } from '@material-ui/core'
import GuestForm from './guest-form/guest-form';
import IntroScreenTitle from '../../components/intro-screen/intro-screen-title/intro-screen-title';



const Dinnerpage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);



    return (
        <div className='dinnerpage'>
            <div id='dinnerpage-about'>
                <CenterBackground background={DinnerPgBackground}>
                    <ContentSection>
                        <IntroScreenTitle noGradient>
                            {TranslationModel.translate(phrases.dinner_party)}
                        </IntroScreenTitle>
                        <TextSection align={TextSectionAlignment.center}>
                            {
                                TranslationModel.translate({
                                    'se':
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
                                    'en':
                                        <span>
                                            At the end of Medias Branschdag a dinner party is held where companies and 
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
                        </TextSection>
                        </ContentSection>
                </CenterBackground>
            </div>
            <div id='dinnerpage-registration'>
                    <ContentSection>     
                        <SectionTitle>
                            {TranslationModel.translate(phrases.dinner_page.registration)}
                        </SectionTitle>
                        <GuestForm/>
                    </ContentSection>
            </div>
            <Footer />
        </div>
    );
}

export default Dinnerpage;