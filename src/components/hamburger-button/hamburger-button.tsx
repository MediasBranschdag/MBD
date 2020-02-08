import React, { FC, useState } from 'react';
import './hamburger-button.css';

type HamburgerButtonProp = {
    onClick: Function,
    isActive: boolean
}

const HamburgerButton: FC<HamburgerButtonProp> = (props) => {

    return (
        <div className="hamburger-button-container">
            <div 
                onClick={() => props.onClick()} 
                className={`hamburger-button ${props.isActive ? ' active' : ''}`}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default HamburgerButton;
