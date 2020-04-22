import React, { FC } from 'react';
import './card.css';

interface CardProps {
    isClickable?: boolean, 
    className?: string,
    light?: boolean
}

const Card: FC<CardProps> = (props) => {
    let className = `card ${props.className ?? ""} `;
    if (props.isClickable) {
        className += 'card--clickable ';
    }
    if (props.light) {
        className += 'card--light ';
    }

    return (
        <div className={className}>
            {props.children}
        </div>
    );
}

export default Card;
