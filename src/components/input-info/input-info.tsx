import React, { FC, ReactNode, useState } from 'react';
import './input-info.css';
import { InputInfoHeader } from './input-info-header/input-info-header';

interface InputInfoProps {
    inputType: 'text' | 'textarea' | 'number' | 'date' | 'email'
    name: string,
    placeholder: ReactNode;
    onInput: (arg0: string) => void,
    placeholderHeader?: boolean,
    obligatory?: boolean,
    noCard?: boolean,
    defaultValue?: string | number,
    value?: string | number,
    max?: string,
    min?: string,
    required?: boolean,
    onKeyDown?: (e: KeyboardEvent) => void
}

export const InputInfo: FC<InputInfoProps> = (props) => {
    let input;
    switch(props.inputType){
        // Input for big text area
        case 'textarea':
            input = <textarea
            onInput={(event) => props.onInput(event.currentTarget.value)}
            name=""
            placeholder={""}
            className="input-info-textarea"
            value={props.value}
            required = {props.required}
            >
            </textarea>
            break;
        // Email input field
        case 'email':
            input = (
                <input
                    onInput={(event) => props.onInput(event.currentTarget.value)}
                    className="input-info-input"
                    placeholder=""
                    type="email" 
                    defaultValue={props.defaultValue}
                    value={props.value}
                    max={props.max}
                    min={props.min}
                    required={props.required}
                />
            );
            break;
        // Degault input field
        default:
            input = <input
            onInput={(event) => props.onInput(event.currentTarget.value)}
            className="input-info-input"
            placeholder={""}
            type={props.inputType}
            defaultValue={props.defaultValue}
            value={props.value}
            max={props.max}
            min={props.min}
            required = {props.required}
            />
            break;
    }

    return (<>
        {/* Title for input fields */}
        { props.placeholderHeader ? 
            <InputInfoHeader obligatory={props.obligatory}>
                {props.placeholder}
            </InputInfoHeader>
        : <></> }
        {/* Input fields */}
        <div className="input-info-container">
            {input}
        </div>
    </>);
}

