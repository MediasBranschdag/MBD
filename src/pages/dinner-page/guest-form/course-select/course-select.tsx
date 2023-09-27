import React, { FC, ReactNode } from 'react'
import './course-select.css'
import { InputInfoHeader } from '../../../../components/input-info/input-info-header/input-info-header'
import { ContentPadding } from '../../../../components/content-padding'
import TranslationModel from '../../../model/translationModel'
import { Course } from '../../../model/dinnerPartyModel'

const CourseSelect: FC<{
    header: string | ReactNode
    courses: Course[]
    courseSelect: string
    setCourse: any
    obligatory?: boolean
}> = (props) => {
    return (
        <>
            <InputInfoHeader obligatory={props.obligatory}>
                {props.header}
            </InputInfoHeader>
            <div
                className='course-cont'
                style={{
                    gridTemplateColumns: `repeat(${props.courses.length}, 1fr)`,
                }}
            >
                {props.courses.map((course) => (
                    <div
                        className={`course ${
                            props.courseSelect === course.id.toString()
                                ? 'selected'
                                : ''
                        }`}
                        key={course.id}
                        onClick={() => props.setCourse(course.id)}
                    >
                        <ContentPadding>
                            <div className='course-details'>
                                <div className='course-name'>
                                    {TranslationModel.translate(course.desc)}
                                </div>
                                <div className='course-attributes'>
                                    {TranslationModel.translate(
                                        course.attributes
                                    )}
                                </div>
                            </div>
                        </ContentPadding>
                    </div>
                ))}
            </div>
        </>
    )
}

export default CourseSelect
