import React, { FC } from 'react';
import './intro-screen-title.css';

const IntroScreenTitle: FC = (props) => {

    return (
        <div className="intro-screen-title">
            {props.children}
        </div>
    );
}

export default IntroScreenTitle;
