import React, { FC } from 'react';
import './center-background.css';


const CenterBackground: FC<{backgroundURL: string}> = (props) => {
    return (
        <div style={{backgroundImage: `url('${props.backgroundURL}')`}} className='center-background'>
            {props.children}
        </div>
    );
}
