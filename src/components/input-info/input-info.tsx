import React, { FC } from 'react';
import './input-info.css';
import Card from '../card/card';

interface InputInfoProps {
    inputType: 'text' | 'textarea' | 'password',
    name: string,
    placeholder: React.ReactNode;
    onInput: (arg0: string) => void
}
export const InputInfo: FC<InputInfoProps> = (props) => {
    return (
        <Card>
            <div className="input-info-container">
                {
                    props.inputType === 'textarea' 
                    ?
                        <textarea
                            onInput={(event) => props.onInput(event.currentTarget.value)}
                            name=""
                            placeholder={props.placeholder?.toString()}
                            className="input-info-textarea"></textarea>
                    :
                        <input
                            onInput={(event) => props.onInput(event.currentTarget.value)}
                            className="input-info-input"
                            placeholder={props.placeholder?.toString()}
                            type={props.inputType}/>
                }
                <div className="input-info-placeholder-info">
                    {props.placeholder}
                </div>
            </div>
        </Card>
    );
}

