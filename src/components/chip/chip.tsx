import React, { FC } from 'react';
import './chip.css';

interface CompanyCardProps {
    selected?: boolean,
    clickable?: boolean,
    onClick?: () => void,
}

const Chip: FC<CompanyCardProps> = (props) => {

    return (
        <div className={`chip no-select ${props.selected ? 'selected' : ''} ${props.clickable ? 'clickable' : ''}`} onClick={props.onClick}>
            {props.children}
        </div>
    );
}

export default Chip;
