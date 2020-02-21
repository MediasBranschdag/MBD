import React, { FC } from 'react';
import './button.css';

export enum ButtonTypes {
    normal = '',
    normalCompact = 'btn--compact',
    icon = 'btn--icon',
    bigIcon = 'btn--icon btn--icon--big'
}

type ButtonProps = {
    onClick?: Function,
    buttonType?: ButtonTypes,
}

export const Button: FC<ButtonProps> = (props) => {
    return (
        <div onClick={() => props.onClick === undefined ? {} : props.onClick()} className={`btn ${props.buttonType}`}>
            {props.children}
        </div>
    );
}

