import React, { FC } from 'react'
import { CourseQuanitity } from '../../pages/model/dinnerPartyModel'
import { Phrase } from '../../pages/model/translationModel'
import QuantityTable from '../quantity-table/quantity-table'

interface CourseTableProps {
    header: Phrase
    courses: CourseQuanitity[]
}

const CourseStats: FC<CourseTableProps> = (props) => {
    return (
        <QuantityTable
            header={props.header}
            items={props.courses.map((course) => {
                return { desc: course.desc, quantity: course.quantity }
            })}
        />
    )
}

export default CourseStats
