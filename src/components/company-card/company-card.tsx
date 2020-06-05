import React, { FC, useState, useEffect } from 'react';
import './company-card.css';
import Card from '../card/card';
import { Company } from '../../model/companyModel';
import TextSection from '../text-section/text-section';
import { ContentPadding } from '../content-padding';
import TranslationModel from '../../model/translationModel';

import phrases from '../../data/translations.json';
import { Button } from '../button/button';
import useWindowDimensions from '../../hooks/useWindowDimensions';

interface CompanyCardProps {
    company: Company, 
    onClick: () => void, 
    onMouseEnter?: () => void,
    onMouseLeave?: () => void,
    isActive: boolean,
    showDesc?: boolean,
}

const CompanyCard: FC<CompanyCardProps> = (props) => {

    const windowDimensions = useWindowDimensions();
    const [onMobile, setOnMobile] = useState(false);

    useEffect(() => {
        setOnMobile(windowDimensions.width < 700)
    }, [windowDimensions.width])

    useEffect(() => {
        if(props.isActive && onMobile) window.scrollTo({top: document.getElementById(props.company.id)?.offsetTop! - 90})
    }, [props.isActive, onMobile, props.showDesc, props.company.id])

    return (
        <div 
            id={props.company.id}
            onMouseEnter={() => props.onMouseEnter ? props.onMouseEnter() : () => {}} 
            onMouseLeave={() => props.onMouseLeave ? props.onMouseLeave() : () => {}} 
            onClick={props.onClick}
            className='no-tap-highlight'>
            <Card className={props.isActive && !onMobile ? 'company-card-active' : ''} isClickable={true} light={true}>
                <div className={`company-card ${props.isActive ? 'active' : ''}`} >
                    <img 
                        src={"/assets/companies/" + props.company.logo_path}
                        alt={props.company.name}/>
                </div>
                { props.showDesc && onMobile ? 
                    <ContentPadding>
                        <TextSection>
                            {TranslationModel.translate(props.company.getDescription())}
                        </TextSection>
                        <br/>
                        <a href={`http://${props.company?.url}`} target="_blank" rel="noopener noreferrer">
                            <Button>
                                {TranslationModel.translate(phrases.go_to_companies)}
                            </Button>
                        </a>
                    </ContentPadding> : <></>
                }   
            </Card>
        </div>
    );
}

export default CompanyCard;
