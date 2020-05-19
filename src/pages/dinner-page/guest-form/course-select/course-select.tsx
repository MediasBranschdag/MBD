import React, { FC } from 'react';
import '../guest-form.css';
import { InputInfoHeader } from '../../../../components/input-info/input-info-header/input-info-header';
import { ContentPadding } from '../../../../components/content-padding';
import Card from '../../../../components/card/card';
import { Radio } from '@material-ui/core';

const CourseSelect: FC<{header: string, courses: Array<any>, courseSelect: string, setCourse: any}> = (props) => { 
    return (<>
            <InputInfoHeader>{props.header}</InputInfoHeader>
            <div className='course-cont' style={{gridTemplateColumns: `repeat(${props.courses.length}, 1fr)`}}>
                {props.courses.map(course =>
                    <div className='course' key={course.name} onClick={() => props.setCourse(course.name)}>
                        <Card light isClickable>
                            <ContentPadding>
                                <div className='course-name'>{course.name}</div>
                                <div className='course-attributes'>{course.attributes}</div>
                            </ContentPadding>
                            <div style={{textAlign: 'center'}}>
                                <Radio
                                    checked={props.courseSelect === course.name}
                                    onChange={(e) => props.setCourse(e.target.value)}
                                    value={props.courseSelect}
                                />
                            </div>
                        </Card>
                    </div>
                )}
            </div>
    </>)
}

export default CourseSelect;