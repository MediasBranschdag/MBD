import React, { FC, useEffect, useState } from 'react';
import './countdown.css';
import { Line, LineType } from '../lines/line';
import MBDDate from '../../model/MBDDate';
import TranslationModel from '../../model/translationModel';
import phrases from '../../data/translations.json';

type CountdownProps = {
    mbdDate: MBDDate
}

const Countdown: FC<CountdownProps> = (props) => {

    const [timeLeft, setTimeLeft] = useState(props.mbdDate.getTimeLeft())

    useEffect(() => {

        // Update the countdown every secound
        var timeout = setTimeout(() => {
            setTimeLeft(props.mbdDate.getTimeLeft());
        }, 1000);

        // Remove the timer when this compontent is destroyed
        return () => {
            clearTimeout(timeout);
        }
    }, [props.mbdDate, timeLeft]);

    return (
        <div className="countdown-container">
            <CountdownBlock 
                value={timeLeft.days} 
                unit={TranslationModel.translate(phrases.days)}/>
            <Line lineType={LineType.horizontal} />
            <CountdownBlock 
                value={timeLeft.hours} 
                unit={TranslationModel.translate(phrases.hours)}/>
            <Line lineType={LineType.horizontal} />
            <CountdownBlock 
                value={timeLeft.minutes} 
                unit={TranslationModel.translate(phrases.minutes)}/>
            <Line lineType={LineType.horizontal} />
            <CountdownBlock 
                value={timeLeft.secounds} 
                unit={TranslationModel.translate(phrases.seconds)}/>
        </div>
    );
}

const CountdownBlock: FC<{value: number, unit: string}> = (props) => {
    return (
        <div className="countdown-block-container">
            <div className="countdown-time">
                {props.value}
            </div>
            <div className="countdown-time-type">
                {props.unit}
            </div>
        </div>
    )
}


export default Countdown;
