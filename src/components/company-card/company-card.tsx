import React, { FC, useState, useEffect } from 'react'
import './company-card.css'
import Card from '../card/card'
import { Company } from '../../pages/model/companyModel'
import TextSection from '../text-section/text-section'
import { ContentPadding } from '../content-padding'
import TranslationModel from '../../pages/model/translationModel'

import phrases from '../../data/translations.json'
import { Button } from '../button/button'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import Chip from '../chip/chip'

interface CompanyCardProps {
    company: Company
    onClick: () => void
    onMouseEnter?: () => void
    onMouseLeave?: () => void
    isActive: boolean
    showDesc?: boolean
    disabled?: boolean
}

const CompanyCard: FC<CompanyCardProps> = (props) => {
    const windowDimensions = useWindowDimensions()
    const [onMobile, setOnMobile] = useState(false)

    useEffect(() => {
        setOnMobile(windowDimensions.width < 700)
    }, [windowDimensions.width])

    useEffect(() => {
        if (props.isActive && onMobile)
            window.scrollTo({
                top: document.getElementById(props.company.id)?.offsetTop! - 90,
            })
    }, [props.isActive, onMobile, props.showDesc, props.company.id])

    return (
        <div
            id={props.company.id}
            onMouseEnter={() =>
                props.onMouseEnter ? props.onMouseEnter() : () => {}
            }
            onMouseLeave={() =>
                props.onMouseLeave ? props.onMouseLeave() : () => {}
            }
            className='no-tap-highlight'
        >
            <Card
                className={`company-card-container ${
                    props.isActive && !onMobile ? 'active' : ''
                }`}
                isClickable={true}
                light={true}
            >
                <div
                    className={`company-card ${
                        props.company.id === 'eyevinn' ? 'eyevinn' : ''
                    } ${props.isActive ? 'active' : ''} ${
                        props.disabled ? 'disabled' : ''
                    } `}
                    onClick={props.onClick}
                >
                    <img
                        src={'/assets/companies/' + props.company.logo_path}
                        alt={props.company.name}
                    />
                </div>
                {props.showDesc && onMobile ? (
                    <ContentPadding>
                        <TextSection>
                            <h2>{props.company.name}</h2>
                            <div className='company-card-employments'>
                                {props.company.employments.map((employment) => (
                                    <Chip key={employment.id} selected>
                                        {TranslationModel.translate(
                                            employment.name
                                        )}
                                    </Chip>
                                ))}
                            </div>
                            {TranslationModel.translate(
                                props.company.getDescription()
                            )}
                        </TextSection>
                        <br />
                        <a
                            href={`http://${props.company?.url}`}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <Button>
                                <div className='company-card-website'>
                                    {TranslationModel.translate(
                                        phrases.go_to_companies
                                    )}
                                </div>
                            </Button>
                        </a>
                    </ContentPadding>
                ) : (
                    <></>
                )}
            </Card>
        </div>
    )
}

export default CompanyCard
