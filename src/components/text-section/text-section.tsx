import React, { FC } from 'react';
import './text-section.css';


const TextSection: FC = (props) => {
    return (
        <div className='text-section'>
            {props.children}
        </div>
    );
}

export default TextSection;
