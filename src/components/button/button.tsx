import React, { FC } from 'react';
import './button.css';

export enum ButtonTypes {
    normal = '',
    normalCompact = 'btn--compact',
    icon = 'btn--icon',
    bigIcon = 'btn--icon btn--icon--big'
}

type ButtonProps = {
    buttonType?: ButtonTypes,
}

export const Button: FC<ButtonProps> = (props) => {
    return (
        <div className={`btn ${props.buttonType}`}>
            {props.children}
        </div>
    );
}

