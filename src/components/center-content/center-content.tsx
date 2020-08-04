import React, { FC } from 'react'

const CenterContent: FC<{}> = (props) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            {props.children}
        </div>
    )
}

export default CenterContent
