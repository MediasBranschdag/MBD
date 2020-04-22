import React, { FC } from 'react';
import './line.css';

export enum LineType {
    vertical = 'vertical',
    horizontal = 'horizontal'
}

type LineProps = {
    lineType: LineType,
}

export const Line: FC<LineProps> = (props) => {
    return (
        <div className={`line ${props.lineType || LineType.vertical}`}>
        </div>
    );
}

