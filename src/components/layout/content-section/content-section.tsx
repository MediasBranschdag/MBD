import React, { FC } from 'react';
import './content-section.css';

export enum ContentSectionSize {
    small = 'content-section-small',
    large = 'content-section-large',
    normal = '',
}

export enum ContentSectionBackground {
    light = 'content-section-background-light',
    dark = 'content-section-background-dark',
}

const ContentSection: FC<{size?: ContentSectionSize, background?: ContentSectionBackground}> = (props) => {
    return (
        <div className={'content-section-background ' + props.background ?? ''}>
            <div className={'content-section ' + props.size}>
                {props.children}
            </div>
        </div>
    );
}

export default ContentSection;
