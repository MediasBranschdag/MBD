import React, { FC, useState, ReactNode } from 'react'
import './half-half-card.css'
import Card from '../card/card'

interface CardProps {
    left_width?: string,
    right_width?: string,
    left_max_h?: string,
    right_max_h?: string,
    left_content: ReactNode,
    right_content: ReactNode
}

const HalfHalfCard: FC<CardProps> = (props) => {

    return (
        <div className='half-card'>
            <Card transparent>
                <div className='half-card-container'>
                    <div className='left' style={{width: props.left_width, height:props.left_max_h}}>
                        {props.left_content}
                    </div>
                    <div className='right' style={{width:props.right_width, height:props.right_max_h}}>
                        {props.right_content}
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default HalfHalfCard
