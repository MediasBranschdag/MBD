import React, { FC } from 'react';
import './section-title.css';


const SectionTitle: FC = (props) => {
    return (
        <div className='section-title-container'>
            <div className='section-title'>
                {props.children}
                <div className='section-title-underline'>
                    <div className='section-title-underline-color'></div>
                </div>
            </div>
        </div>
    );
}

export default SectionTitle;
