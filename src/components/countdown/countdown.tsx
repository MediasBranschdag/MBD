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
        var timeout = setTimeout(() => {
            setTimeLeft(props.mbdDate.getTimeLeft());
        }, 1000);
        return () => {
            clearTimeout(timeout);
        }
    }, [props.mbdDate, timeLeft]);

    return (
        <div className="countdown-container">
            <div className="countdown-block-container days-container">
                <div className="days countdown-time">
                    {timeLeft.days}
                </div>
                <div className="countdown-time-type">
                    Dagar
                </div>
            </div>
            <Line lineType={LineType.horizontal} />
            <div className="countdown-block-container hours-container">
                <div className="hours countdown-time">
                    {timeLeft.hours}
                </div>
                <div className="countdown-time-type">Timmar</div>
            </div>
            <Line lineType={LineType.horizontal} />
            <div className="countdown-block-container minutes-container">
                <div className="minutes countdown-time">
                    {timeLeft.minutes}
                </div>
                <div className="countdown-time-type">
                    Minuter
                </div>
            </div>
            <Line lineType={LineType.horizontal} />
            <div className="countdown-block-container seconds-container">
                <div className="seconds countdown-time">
                    {timeLeft.secounds}
                </div>
                <div className="countdown-time-type">
                    Sekunder
                </div>
            </div>
        </div>
    );
}

export default Countdown;
