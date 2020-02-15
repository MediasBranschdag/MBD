import React, { FC } from 'react';
import './card.css';


const Card: FC<{}> = (props) => {
    return (
        <div className='card'>
            {props.children}
        </div>
    );
}

export default Card;
