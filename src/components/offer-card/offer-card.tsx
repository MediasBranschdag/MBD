import React, { FC } from 'react';
import './offer-card.css';
import Card from '../card/card';

const OfferCard: FC<{text: React.ReactNode, img: string, altImage: string}> = (props) => {
    return (
        <Card>
            <div className="offer-card">
                <img src={props.img} alt={props.altImage}/>
                {props.text}
            </div>
        </Card>
    );
}

export default OfferCard;
