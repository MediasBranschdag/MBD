import React, { FC, useEffect, useState } from 'react'
import './intro-screen.css'

import { Button, ButtonTypes } from '../../components/button/button'
import ArrowDownIcon from '../../assets/icons/arrows/down_black.svg'
import IntroScreenTitle from './intro-screen-title/intro-screen-title'

import { animateScroll as scroll } from 'react-scroll'
import useWindowDimensions from '../../hooks/useWindowDimensions'

type IntroScreenProps = {
    backgroundImage?: string
    backgroundVideo?: string
    title?: React.ReactNode
    noButton?: boolean
}

const IntroScreen: FC<IntroScreenProps> = (props) => {
    const windowDimensions = useWindowDimensions()

    const navbarHeight = parseInt(
        getComputedStyle(document.documentElement)
            .getPropertyValue('--shared-navbar-height')
            .replace(/\D/g, '')
    )
    const [minHeight, setMinHeight] = useState(
        `${windowDimensions.height - navbarHeight}px`
    )

    useEffect(() => {
        setMinHeight(`${windowDimensions.height - navbarHeight}px`)
    }, [windowDimensions.height, navbarHeight])

    return (
        <div
            style={{
                minHeight: minHeight,
                backgroundImage: props.backgroundImage
                    ? `url('${props.backgroundImage}')`
                    : 'none',
            }}
            className='intro-screen'
        >
            {props.title !== undefined ? (
                <IntroScreenTitle>{props.title}</IntroScreenTitle>
            ) : (
                <></>
            )}

            {props.backgroundVideo ? (
                <div className='intro-screen-video'>
                    <video autoPlay={true} playsInline loop muted>
                        <source
                            src={`${props.backgroundVideo}#t=1`}
                            type='video/mp4'
                        />
                    </video>
                </div>
            ) : (
                <></>
            )}

            <div className='intro-screen-content'>{props.children}</div>

            <div className='intro-screen-scroll-button no-select'>
                {!props.noButton ? (
                    <Button
                        onClick={() => scroll.scrollTo(window.innerHeight - 66)}
                        buttonType={ButtonTypes.icon}
                    >
                        <img src={ArrowDownIcon} alt='Down' />
                    </Button>
                ) : (
                    <></>
                )}
            </div>
        </div>
    )
}

export default IntroScreen
