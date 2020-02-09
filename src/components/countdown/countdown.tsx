import React, { FC, useEffect, useState } from 'react';
import './countdown.css';
import { Line, LineType } from '../lines/line';
import MBDDate from '../../model/MBDDate';

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
            <CountdownBlock value={timeLeft.days} unit={'Dagar'}/>
            <Line lineType={LineType.horizontal} />
            <CountdownBlock value={timeLeft.hours} unit={'Timmar'}/>
            <Line lineType={LineType.horizontal} />
            <CountdownBlock value={timeLeft.minutes} unit={'Minuter'}/>
            <Line lineType={LineType.horizontal} />
            <CountdownBlock value={timeLeft.secounds} unit={'Sekunder'}/>
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
