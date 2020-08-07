import React, { FC } from 'react';
import './intro-screen-title.css';

const IntroScreenTitle: FC<{noGradient?: boolean, bottomPadding?: boolean}> = (props) => {

    return (
        <div className={`intro-screen-title ${props.noGradient ? 'no-gradient' : ''} ${props.bottomPadding ? 'bottom-padding' : ''}`}>
            {props.children}
        </div>
    );
}

export default IntroScreenTitle;
