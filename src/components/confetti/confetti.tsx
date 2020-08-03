import React, { FC } from 'react'
import './confetti.css'

const Confetti: FC<{}> = (props) => {
    return (
        <div className='confetti'>
            <div className='confetti-piece'></div>
            <div className='confetti-piece'></div>
            <div className='confetti-piece'></div>
            <div className='confetti-piece'></div>
            <div className='confetti-piece'></div>
            <div className='confetti-piece'></div>
            <div className='confetti-piece'></div>
            <div className='confetti-piece'></div>
            <div className='confetti-piece'></div>
            <div className='confetti-piece'></div>
            <div className='confetti-piece'></div>
            <div className='confetti-piece'></div>
            <div className='confetti-piece'></div>
            <span>{props.children}</span>
        </div>
    )
}

export default Confetti
