import React, { FC } from 'react';
import './intro-screen-buttons.css';
import ButtonBackgroundIcon from '../../button/button-background-icon/button-background-icon';

import { Link } from 'react-scroll';

type IntroScreenButtonsProps = {
    buttons: {
        title: React.ReactNode,
        iconPath: string,
        idRef: string
    }[]
}

const IntroScreenButtons: FC<IntroScreenButtonsProps> = (props) => {

    return (
        <div className="intro-screen-button-container">
            {props.buttons.map(buttonProps => {
                return <div key={buttonProps.idRef} className="intro-screen-button-item">
                    <Link offset={-66} to={buttonProps.idRef} spy={true} smooth={true} duration={500}>
                        <ButtonBackgroundIcon iconPath={buttonProps.iconPath}>
                            {buttonProps.title}
                        </ButtonBackgroundIcon>
                    </Link>
                </div>
            })}
        </div>
    );
}

export default IntroScreenButtons;
