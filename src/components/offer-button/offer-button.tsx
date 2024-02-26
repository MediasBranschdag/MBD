import React, { FC } from 'react';
import './offer-button.css';

type OfferButtonProp = {
    onClick: Function,
    isActive: boolean
}

const OfferButton: FC<OfferButtonProp> = (props) => {

    return (
        <div className="offer-button-container">
            <div 
                onClick={() => props.onClick()} 
                className={`offer-button ${props.isActive ? ' active' : ''}`}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default OfferButton;
