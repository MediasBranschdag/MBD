import React, { FC } from 'react';
import './section-title.css';

export enum TitleSectionAlignment {
    left = 'title-section-left',
    center = 'title-section-center',
    right = 'title-section-right',

}

const SectionTitle: FC<{ align?: TitleSectionAlignment }> = (props) => {
    return (
        <div className={'title-section ' + props.align}>
            <div className='section-title'>
                <span className='section-title-text'>
                    {props.children}
                </span>
            </div>
        </div>
    );
}

export default SectionTitle;



