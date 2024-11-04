import React, { FC } from 'react';

export const ContentPaddingThin: FC = (props) => {
    return (
        <div style={{
            padding: '5px'
        }}>
            {props.children}
        </div>
    );
}

