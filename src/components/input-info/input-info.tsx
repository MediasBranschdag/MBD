import React, { FC, ReactNode } from 'react';
import './input-info.css';
import Card from '../card/card';
import { InputInfoHeader } from './input-info-header/input-info-header';

interface InputInfoProps {
    inputType: 'text' | 'textarea' | 'number' | 'date'
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
    onKeyDown?: (e: KeyboardEvent) => void
}
export const InputInfo: FC<InputInfoProps> = (props) => {

    let input;
    switch(props.inputType){
        case 'textarea':
            input = <textarea
            onInput={(event) => props.onInput(event.currentTarget.value)}
            name=""
            placeholder={props.placeholder?.toString()}
            className="input-info-textarea"
            value={props.value}></textarea>
            break;
        default:
            input = <input
            onInput={(event) => props.onInput(event.currentTarget.value)}
            className="input-info-input"
            placeholder={props.placeholder?.toString()}
            type={props.inputType}
            defaultValue={props.defaultValue}
            value={props.value}
            max={props.max}
            min={props.min}
            />
            break;
    }

    const cont = (
        <div className="input-info-container">
            {
                input
            }
            { 
                props.placeholderHeader ? <></> : 
                <div className="input-info-placeholder-info">
                    {props.placeholder}
                </div> 
            }
        </div>
    )

    return (<>
        { props.placeholderHeader ? 
            <InputInfoHeader obligatory={props.obligatory}>
                {props.placeholder}
            </InputInfoHeader>
        : <></> }
        {props.noCard ? cont : <Card>{cont}</Card>}           
    </>);
}

