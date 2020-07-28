import React, { FC, ReactNode } from 'react';
import './course-select.css';
import { InputInfoHeader } from '../../../../components/input-info/input-info-header/input-info-header';
import { ContentPadding } from '../../../../components/content-padding';
import TranslationModel from '../../../../model/translationModel';

const CourseSelect: FC<{header: string | ReactNode, courses: Array<any>, courseSelect: string, setCourse: any, obligatory?: boolean}> = (props) => { 
    return (<>
            <InputInfoHeader obligatory={props.obligatory}>{props.header}</InputInfoHeader>
            <div className='course-cont' style={{gridTemplateColumns: `repeat(${props.courses.length}, 1fr)`}}>
                {props.courses.map((course) =>
                    <div className={`course ${props.courseSelect === course.name.se ? 'selected' : ''}`} key={course.name.se} onClick={() => props.setCourse(course.name.se)}>
                            <ContentPadding>
                                <div className='course-name'>{TranslationModel.translate(course.name)}</div>
                                <div className='course-attributes'>{TranslationModel.translate(course.attributes)}</div>
                            </ContentPadding>
                    </div>
                )}
            </div>
    </>)
}

export default CourseSelect;