import React, { FC } from 'react';
import './tag.css';

interface TagProps {
    className?: string,
    gold?: boolean,
    silver?: boolean,
    bronze?: boolean,
    gray?: boolean
}

const Tag: FC<TagProps> = (props) => {
    let className = `tag ${props.className ?? ""} `;

    if (props.gold) {
        className += 'tag--gold ';
    }
    if (props.silver) {
        className += 'tag--silver ';
    }
    if (props.bronze) {
        className += 'tag--bronze ';
    }
    if (props.gray) {
        className += 'tag--gray ';
    }

    return (
        <div className={className}>
            {props.children}
        </div>
    );
}

export default Tag;
