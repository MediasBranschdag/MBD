import React, { FC, useEffect, useState } from 'react'
import MBDDate, { getNextExhibitDate } from '../pages/model/MBDDate'

export const MBDDateContext = React.createContext(new MBDDate())

const MBDDateProvider: FC = (props) => {
    const [mbdDate, setMbdDate] = useState(new MBDDate())

    useEffect(() => {
        getNextExhibitDate().then((mbdDate) => {
            setMbdDate(mbdDate)
        })
    }, [])

    return (
        <MBDDateContext.Provider value={mbdDate}>
            {props.children}
        </MBDDateContext.Provider>
    )
}

export default MBDDateProvider
