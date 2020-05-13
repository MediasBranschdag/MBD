import React, { FC } from 'react';
import './input-info-header.css';

export const InputInfoHeader: FC<{obligatory?: boolean}> = (props) => {
    return (<div className={`input-info-header ${props.obligatory ? 'obligatory' : ''}`}>
                {props.children}
        </div>);
}

