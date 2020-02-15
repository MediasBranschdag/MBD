import React, { FC } from 'react';
import './section-title.css';


const SectionTitle: FC = (props) => {
    return (
        <div className='section-title-container'>
            <div className='section-title'>
                <span className='section-title-text'>
                    {props.children}
                </span>
            </div>
        </div>
    );
}

export default SectionTitle;
