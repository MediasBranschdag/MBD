import React, { FC } from 'react';
import './card.css';



const Card: FC<{isClickable?: boolean, className?: string}> = (props) => {
    let className = `card ${props.className ?? ""} `;
    if (props.isClickable) {
        className += 'card--clickable ';
    }

    return (
        <div className={className}>
            {props.children}
        </div>
    );
}

export default Card;
