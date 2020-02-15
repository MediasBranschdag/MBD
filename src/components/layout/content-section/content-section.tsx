import React, { FC } from 'react';
import './content-section.css';

export enum ContentSectionSize {
    small = 'content-section-small',
    normal = '',
}

const ContentSection: FC<{size?: ContentSectionSize}> = (props) => {
    return (
        <div className={'content-section ' + props.size}>
            {props.children}
        </div>
    );
}

export default ContentSection;
