import React, { FC, Fragment } from 'react'
import './alumni-interviews.css'
import TextSection from '../text-section/text-section'
import TranslationModel, { Phrase } from '../../model/translationModel'
import TextWithContent from '../text-with-content/text-with-content'
import ProfileCard from '../profile-card/profile-card'
import interviews from './alumni-interviews.json'

export interface AlumniInterview {
    name: string
    master: Phrase
    picture: string
    job: Phrase
    linkedIn?: string
    questions: Array<{ question: Phrase; answer: Phrase }>
}

const AlumniInterviews: FC<{}> = (props) => {
    return (
        <div className='alumni-interviews'>
            {interviews.map((alumni: AlumniInterview, i) => (
                <Fragment key={alumni.name}>
                    <TextWithContent
                        text={
                            <TextSection>
                                <h1>
                                    {alumni.name},{' '}
                                    {TranslationModel.translate(alumni.master)}
                                </h1>
                                {alumni.questions.map((q) => (
                                    <>
                                        <h4 style={{ marginBottom: 0 }}>
                                            {TranslationModel.translate(
                                                q.question
                                            )}
                                        </h4>
                                        <p style={{ marginTop: 0 }}>
                                            {TranslationModel.translate(
                                                q.answer
                                            )}
                                        </p>
                                    </>
                                ))}
                            </TextSection>
                        }
                        content={
                            <ProfileCard
                                imagePath={alumni.picture}
                                name={alumni.name}
                                linkedinLink={alumni.linkedIn ?? undefined}
                                role={TranslationModel.translate(alumni.job)}
                            />
                        }
                        reverse={!!(i % 2)}
                    />
                </Fragment>
            ))}
        </div>
    )
}

export default AlumniInterviews
