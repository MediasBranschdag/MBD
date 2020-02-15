import React, { FC } from 'react';
import './text-section.css';

export enum TextSectionAlignment {
    left = 'text-section-left',
    center = 'text-section-center',
    right = 'text-section-right',
}

const TextSection: FC<{align?: TextSectionAlignment}> = (props) => {
    return (
        <div className={'text-section ' + props.align}>
            {props.children}
        </div>
    );
}

export default TextSection;
