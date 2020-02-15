import React, { FC } from 'react';
import './text-with-content.css';


const TextWithContent: FC<{text: React.ReactNode, content: React.ReactNode}> = (props) => {
    return (
        <div className='text-with-content'>
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
