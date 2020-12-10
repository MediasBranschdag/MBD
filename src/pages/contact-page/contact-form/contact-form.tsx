import React, { FC, useState } from 'react'
import { InputInfo } from '../../../components/input-info/input-info'
import TranslationModel from '../../../model/translationModel'
import phrases from '../../../data/translations.json'
import { Button, ButtonTypes } from '../../../components/button/button'

import './contact-form.css'
import BACKEND_PATH from '../../../backend-environment'
import LoadingText from '../../../components/loading-text'

const ContactForm: FC = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const [doneMessage, setDoneMessage] = useState<React.ReactNode>('')
    const [loading, setLoading] = useState(false)

    const sendEmail = () => {
        let formData = new FormData()
        formData.append('name', name)
        formData.append('email', email)
        formData.append('subject', subject)
        formData.append('message', message)

        setLoading(true)
        fetch(BACKEND_PATH + 'sendMail.php', {
            method: 'POST',
            body: formData,
        })
            .then(() =>
                setDoneMessage(
                    TranslationModel.translate({
                        se: 'Ditt meddelande är skickat.',
                        en: 'Your message is sent.',
                    })
                )
            )
            .catch(() =>
                setDoneMessage(
                    TranslationModel.translate({
                        se: 'Något gick fel, testa gärna igen.',
                        en: 'Something went wrong, pls test again.',
                    })
                )
            )
            .finally(() => setLoading(false))
    }

    return (
        <div>
            <form className='contactform' onSubmit={() => sendEmail()}>
                <div className='contact-input-info'>
                    <div>
                        <InputInfo
                            name='name'
                            onInput={setName}
                            inputType='text'
                            placeholder={TranslationModel.translate(
                                phrases.name
                            )}
                        />
                    </div>
                    <br />
                    <div>
                        <InputInfo
                            name='email'
                            onInput={setEmail}
                            inputType='text'
                            placeholder={TranslationModel.translate(
                                phrases.email
                            )}
                        />
                    </div>
                    <br />
                    <div>
                        <InputInfo
                            name='subject'
                            onInput={setSubject}
                            inputType='text'
                            placeholder={TranslationModel.translate(
                                phrases.subject
                            )}
                        />
                    </div>
                </div>
                <div className='contact-input-message'>
                    <InputInfo
                        name='message'
                        onInput={setMessage}
                        inputType='textarea'
                        placeholder={TranslationModel.translate(
                            phrases.message
                        )}
                    />
                </div>
            </form>
            {doneMessage ? <p>{doneMessage}</p> : ''}
            <br />
            <Button
                onClick={() => sendEmail()}
                buttonType={ButtonTypes.normalCompact}
            >
                {loading ? (
                    <LoadingText />
                ) : (
                    TranslationModel.translate(phrases.send)
                )}
            </Button>

            <a href='mailto:branschdag@medieteknik.com'>
                <h4>branschdag@medieteknik.com</h4>
            </a>
        </div>
    )
}

export default ContactForm
