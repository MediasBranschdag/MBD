import React, { FC, ReactNode } from 'react';
import './course-select.css';
import { InputInfoHeader } from '../../../../components/input-info/input-info-header/input-info-header';
import { ContentPadding } from '../../../../components/content-padding';
import Card from '../../../../components/card/card';
import { Radio } from '@material-ui/core';

const CourseSelect: FC<{header: string | ReactNode, courses: Array<any>, courseSelect: string, setCourse: any, obligatory?: boolean}> = (props) => { 
    return (<>
            <InputInfoHeader obligatory={props.obligatory}>{props.header}</InputInfoHeader>
            <div className='course-cont' style={{gridTemplateColumns: `repeat(${props.courses.length}, 1fr)`}}>
                {props.courses.map(course =>
                    <div className='course' key={course.name} onClick={() => props.setCourse(course.name)}>
                        <Card isClickable unselected={props.courseSelect !== course.name}>
                            <ContentPadding>
                                <div className='course-name'>{course.name}</div>
                                <div className='course-attributes'>{course.attributes}</div>
                            </ContentPadding>
                        </Card>
                    </div>
                )}
            </div>
    </>)
}

export default CourseSelect;