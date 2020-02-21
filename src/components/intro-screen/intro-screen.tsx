import React, { FC } from 'react';
import './intro-screen.css';


import {Button, ButtonTypes} from '../../components/button/button';
import ArrowDownIcon from '../../assets/icons/arrows/down_black.svg';
import IntroScreenTitle from './intro-screen-title/intro-screen-title';

type IntroScreenProps = {
    backgroundImage: string
    title?: React.ReactNode
}

const IntroScreen: FC<IntroScreenProps> = (props) => {

    return (
        <div style={{
            backgroundImage: `url("${props.backgroundImage}")`
        }} className="intro-screen">

            {
                props.title !== undefined
                ? <IntroScreenTitle>{props.title}</IntroScreenTitle>
                : <></>
            }

            <div className="intro-screen-content">
                {props.children}
            </div>

            <div className="intro-screen-scroll-button">
                <Button buttonType={ButtonTypes.icon}>
                    <img src={ArrowDownIcon} alt="Down"/>
                </Button>
            </div>
        </div>
    );
}

export default IntroScreen;
