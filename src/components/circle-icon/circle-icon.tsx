import React, { FC } from 'react';
import './circle-icon.css';


const CircleIcon: FC<{imagePath: string}> = (props) => {
    return (
        <div className='circle-icon'>
            <img src={props.imagePath} alt="Icon"/>
            {props.children}
        </div>
    );
}

export default CircleIcon;
