import React, { FC } from 'react';
import './intro-screen.css';

import {Button, ButtonTypes} from '../../components/button/button';
import ArrowDownIcon from '../../assets/icons/arrows/down_black.svg';
import IntroScreenTitle from './intro-screen-title/intro-screen-title';

import { animateScroll as scroll } from 'react-scroll'

type IntroScreenProps = {
    backgroundImage?: string,
    backgroundVideo?: string
    title?: React.ReactNode
}

const IntroScreen: FC<IntroScreenProps> = (props) => {

    return (
        <div style={{
            backgroundImage: 
                props.backgroundImage 
                    ? `url('${props.backgroundImage}')`
                    : 'none'
        }} className='intro-screen'>

            {
                props.title !== undefined
                ? <IntroScreenTitle>{props.title}</IntroScreenTitle>
                : <></>
            }

            {
                props.backgroundVideo ? 
                <div className='intro-screen-video'>   
                    <video autoPlay={true} playsInline loop muted>
                        <source src={`${props.backgroundVideo}#t=1`} type='video/mp4'/> 
                    </video>
                </div> : <></>
            }

            <div className='intro-screen-content'>
                {props.children}
            </div>

            <div className='intro-screen-scroll-button no-select'>
                <Button onClick={() => scroll.scrollTo(window.innerHeight - 66)} buttonType={ButtonTypes.icon}>
                    <img src={ArrowDownIcon} alt='Down'/>
                </Button>
            </div>
        </div>
    );
}

export default IntroScreen;
