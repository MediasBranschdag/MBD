import React, { FC, useState } from 'react'
import './navigation-card.css'
import Card from '../card/card'
import TextSection from '../text-section/text-section'
import { ContentPadding } from '../content-padding'
import TranslationModel from '../../pages/model/translationModel'

import phrases from '../../data/translations.json'
import { Button, ButtonTypes } from '../button/button'

import { isMobile } from 'react-device-detect'

import { NavLink } from 'react-router-dom'



interface NavigationCardProps {
    backgroundImage: string,
    icon: string,
    title: React.ReactNode,
    description: React.ReactNode,
    buttonText: React.ReactNode,
    nav: string
}

const NavigationCard: FC<NavigationCardProps> = (props) => {

    return (
            <Card className='nav-card'>
                <div style={{backgroundImage: `url(${props.backgroundImage})`}} className='nav-card-image'>  
                    <div className='nav-card-info-container'>       
                        <img src={props.icon} alt='' className='nav-card-icon'/>
                        <h3 className='nav-card-title'> {props.title}? </h3>
                        <p className='nav-card-description'> 
                            {props.description}
                        </p>
                        <NavLink to={props.nav} className='nav-card-button'>
                            <Button buttonType={ButtonTypes.normalCompact}> {props.buttonText}</Button>
                        </NavLink>
                    </div>
                </div>
       
            </Card>
    )
}

export default NavigationCard
