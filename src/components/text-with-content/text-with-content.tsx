import React, { FC, ReactNode } from 'react';
import './text-with-content.css';


const TextWithContent: FC<{text: ReactNode, content: ReactNode, reverse?: Boolean }> = (props) => {
    return (
        <div className={`text-with-content ${props.reverse ? 'reverse' : ''}`}>
            <div className="text-with-content-text">
                {props.text}
            </div>
            <div className="text-with-content-content">
                {props.content}
            </div>
        </div>
    );
}

export default TextWithContent;
