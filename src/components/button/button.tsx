import React, { FC } from 'react'
import './button.css'

export enum ButtonTypes {
    normal = '',
    normalCompact = 'btn--compact',
    inline = 'btn--inline',
    icon = 'btn--icon',
    bigIcon = 'btn--icon btn--icon--big',
    inlineIcon = 'btn--inline--icon',
}

type ButtonProps = {
    onClick?: Function
    buttonType?: ButtonTypes
    className?: string
    iconSrc?: string
}

export const Button: FC<ButtonProps> = (props) => {
    return (
        <div
            onClick={() => (props.onClick === undefined ? {} : props.onClick())}
            className={`btn ${props.buttonType ?? ''} ${props.className ?? ''}`}
        >
            {props.buttonType === ButtonTypes.inlineIcon ? (
                <div className='inline-cont'>
                    <img src={props.iconSrc} alt='' />
                    <span>{props.children}</span>
                </div>
            ) : (
                props.children
            )}
        </div>
    )
}
