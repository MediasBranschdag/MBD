import React, { FC } from 'react';
import './center-background.css';


const CenterBackground: FC<{backgroundURL: string, isBright?: boolean}> = (props) => {
    return (
        <div 
            style={{backgroundImage: `url('${props.backgroundURL}')`}} 
            className={'center-background ' + (props.isBright ? 'center-background-light' : '')}>
            {props.children}
        </div>
    );
}

export default CenterBackground;