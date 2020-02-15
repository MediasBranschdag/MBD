import React, { FC } from 'react';
import './card.css';



const Card: FC<{isClickable?: boolean}> = (props) => {
    let className = 'card ';
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
