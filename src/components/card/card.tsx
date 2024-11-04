import React, { FC } from 'react';
import './card.css';

interface CardProps {
    isClickable?: boolean, 
    className?: string,
    light?: boolean,
    unselected?: boolean,
    gold?: boolean,
    silver?: boolean,
    bronze?: boolean
}

const Card: FC<CardProps> = (props) => {
    let className = `card ${props.className ?? ""} `;
    if (props.isClickable) {
        className += 'card--clickable ';
    }
    if (props.light) {
        className += 'card--light ';
    }
    if (props.gold) {
        className += 'card--gold ';
    }
    if (props.silver) {
        className += 'card--silver ';
    }
    if (props.bronze) {
        className += 'card--bronze ';
    }
    if (props.unselected) {
        className += 'card--unselected ';
    }

    return (
        <div className={className}>
            {props.children}
        </div>
    );
}

export default Card;
