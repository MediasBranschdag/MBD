import React, { FC } from 'react';

export const ContentPadding: FC = (props) => {
    return (
        <div style={{
            padding: '15px'
        }}>
            {props.children}
        </div>
    );
}

