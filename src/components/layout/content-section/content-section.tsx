import React, { FC } from 'react';
import './content-section.css';


const ContentSection: FC = (props) => {
    return (
        <div className='content-section'>
            {props.children}
        </div>
    );
}

export default ContentSection;
