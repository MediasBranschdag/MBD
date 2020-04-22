import React, { FC } from 'react';
import './button-background-icon.css';
import { Button, ButtonTypes } from '../button';

const ButtonBackgroundIcon: FC<{iconPath: string}> = (props) => {

    return (
        <div className="button-background-icon">
            <Button buttonType={ButtonTypes.normalCompact}>
                <div className="button-background-icon-content">
                    {props.children}
                    <div className="button-background-icon-icon">
                        <img src={props.iconPath} alt=""/>
                    </div>
                </div>
            </Button>
        </div>
    );
}

export default ButtonBackgroundIcon;
