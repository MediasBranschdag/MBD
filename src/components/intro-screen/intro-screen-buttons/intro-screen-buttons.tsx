import React, { FC, ReactElement } from 'react';
import './intro-screen-buttons.css';
import ButtonBackgroundIcon from '../../button/button-background-icon/button-background-icon';

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
                return <div className="intro-screen-button-item">
                    <ButtonBackgroundIcon
                        iconPath={buttonProps.iconPath}
                    >
                        {buttonProps.title}
                    </ButtonBackgroundIcon>
                </div>
            })}
        </div>
    );
}

export default IntroScreenButtons;
