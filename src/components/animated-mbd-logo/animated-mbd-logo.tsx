import React, { FC, useEffect, useState } from 'react'
import './animated-mbd-logo.css'
import { Line, LineType } from '../lines/line'

import CalendarIcon from '../../assets/icons/other/calendar_white.svg'
import MapIcon from '../../assets/icons/other/map_location_white.svg'
import { MBDDateContext } from '../../contexts/mbd-date-provider'
import MailIcon from '../../assets/icons/other/mail-white-material.svg'
import phrases from '../../data/translations.json'
import TranslationModel from '../../pages/model/translationModel'

const AnimatedMBDLogo: FC = () => {
    const logoParts = 3
    const [logoPartActiveStep, setLogoPartActiveStop] = useState(0)

    useEffect(() => {
        // Active a logo part every half second
        var timeout = setTimeout(() => {
            if (logoPartActiveStep < logoParts) {
                setLogoPartActiveStop(logoPartActiveStep + 1)
            }
        }, 500)

        return () => {
            clearTimeout(timeout)
        }
    }, [logoPartActiveStep])

    return (
        <>
            <div className='animated-logo-container'>
                <svg
                    className={`animated-logo-part ${
                        logoPartActiveStep > 0 ? 'active' : ''
                    }`}
                    viewBox='0 0 499 467'
                    version='1.1'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <g transform='matrix(1,0,0,1,-141.408,-59.336)'>
                        <path d='M271.89,501.55C287,516.45 298.16,508.45 286.11,492.34C210.33,391 153.45,244.59 194,222.33C221.33,207.33 267.33,280.33 282.49,275.29C303.01,268.47 282.33,147.33 321.07,140.17C366.66,131.75 407.75,306.72 369.55,502.33C363.58,532.91 381.24,533.66 387.77,506.33C461.4,198.03 395.72,66.62 322.99,73.66C242.27,81.49 260.67,211 260.67,211C260.67,211 221.09,151.84 171.92,176.53C80,222.67 220.18,450.57 271.89,501.55Z' />
                    </g>
                </svg>
                <svg
                    className={`animated-logo-part ${
                        logoPartActiveStep > 1 ? 'active' : ''
                    }`}
                    viewBox='0 0 499 467'
                    version='1.1'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <g transform='matrix(1,0,0,1,-141.408,-59.336)'>
                        <path d='M425.08,106.5C439.64,100.35 502.75,77.83 510.13,93.94C518.76,112.77 469.75,128.34 476.67,153.17C482.33,173.51 582.34,129 593.59,170.06C604.42,209.58 547.39,222.25 487.57,242.12C445.63,256.05 463.33,303.48 506,294C578.78,277.83 662.33,231.67 634.01,157.79C613.1,103.27 537.91,123.23 537.91,123.23C537.91,123.23 554.34,101.44 542.74,79.41C517.66,31.78 435.17,82.08 419.09,95.67C412.44,101.28 418.59,109.24 425.08,106.5Z' />
                    </g>
                </svg>
                <svg
                    className={`animated-logo-part ${
                        logoPartActiveStep > 2 ? 'active' : ''
                    }`}
                    viewBox='0 0 499 467'
                    version='1.1'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <g transform='matrix(1,0,0,1,-141.408,-59.336)'>
                        <path d='M461.16,358.11C449.5,299.76 640.35,285 640.34,394.77C640.33,478.55 460.91,522.29 429.39,522.29C418,522.29 414.69,514.66 432.22,510.55C564,479.67 603.56,437 599.33,406.33C588.63,328.58 473.56,420.15 461.16,358.11Z' />
                    </g>
                </svg>
            </div>
            <div>
                <div className='animated-logo-title'>
                    <div
                        className={`animated-logo-title-part ${
                            logoPartActiveStep > 0 ? 'active' : ''
                        }`}
                    >
                        MEDIAS{' '}
                    </div>
                    <div
                        className={`animated-logo-title-part ${
                            logoPartActiveStep > 1 ? 'active' : ''
                        }`}
                    >
                        BRANSCH
                    </div>
                    <div
                        className={`animated-logo-title-part ${
                            logoPartActiveStep > 2 ? 'active' : ''
                        }`}
                    >
                        DAG
                    </div>
                </div>

                <div className='animated-logo-info'>
                    <div className='animated-logo-info-section'>
                        <img src={CalendarIcon} alt='' />
                        <Line lineType={LineType.horizontal} />
                        <MBDDateContext.Consumer>
                            {(mbdDate) => (
                                <div>
                                    {17}{' '}
                                    {TranslationModel.translate(
                                        phrases.months.february
                                    )}{' '}
                                    {2026}
                                </div>
                            )}
                        </MBDDateContext.Consumer>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AnimatedMBDLogo
