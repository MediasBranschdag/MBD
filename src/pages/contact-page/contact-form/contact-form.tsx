import React, { FC, useState } from 'react'
import { InputInfo } from '../../../components/input-info/input-info'
import TranslationModel from '../../model/translationModel'
import phrases from '../../../data/translations.json'
import { Button, ButtonTypes } from '../../../components/button/button'

import './contact-form.css'
import BACKEND_PATH from '../../../backend-environment'
import LoadingText from '../../../components/loading-text'

const ContactForm: FC = () => {
    const [companyName, setCompanyName] = useState('')
    const [contactPerson, setContactPerson] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [doneMessage, setDoneMessage] = useState<React.ReactNode>('')
    const [loading, setLoading] = useState(false)
    const [messageSent, setMessageSent] = useState(false)

    const sendEmail = () => {
        let formData = new FormData()
        formData.append('companyName', companyName)
        formData.append('contactPerson', contactPerson)
        formData.append('email', email)
        formData.append('subject', "Mejl från Kontaktformulär") //pre-created subject for email
        formData.append('message', message)

        setLoading(true)
        fetch(BACKEND_PATH + 'sendMail.php', {
            method: 'POST',
            body: formData,
        }) 
            .then(async (res) => {
                const text = await res.text();
                if(text.trim() ==='1') {
                    setDoneMessage(
                        TranslationModel.translate({
                            se: 'Ditt meddelande är skickat.',
                            en: 'Your message is sent.',
                        })
                    );
                    setMessageSent(true);
                } else {
                    throw new Error('Mail failed')
                }
            })
            .catch( () => {
                setDoneMessage(
                    TranslationModel.translate({
                        se: 'Något gick fel, testa gärna igen.',
                        en: 'Something went wrong, please try again.',
                    })
                )
            })
            .finally( () => setLoading(false))
    }

    return (
        <div>
            {/* Conditional rendering: shows form iv messageSent is false, shows the other div if true*/}
            { messageSent ? 
                <div className='message-sent'>
                    <p>{TranslationModel.translate(phrases.contact_form.message_sent)}</p>
                    <Button
                            buttonType={ButtonTypes.normalCompact}
                            onClick= {() => setMessageSent(false)}
                        >
                            {loading ? (
                                <LoadingText />
                            ) : (
                                TranslationModel.translate(phrases.contact_form.send_again)
                            )}
                    </Button>
                </div>
                :
                <form className='contactform' onSubmit={(e) => {
                e.preventDefault(); 
                sendEmail();       
            }}
            >
                <div className='contact-input-info'>
                    <div>
                        {/* InputInfo = input fields */}
                        <InputInfo
                            name='företagsnamn'
                            onInput={setCompanyName}
                            inputType='text'
                            placeholder={TranslationModel.translate(
                                phrases.sign_up.company_name
                            )}
                            placeholderHeader = {true}
                            obligatory = {true}
                            required = {true}
                        />
                    </div>
                    <br />
                    <div>
                        <InputInfo
                            name='kontaktperson'
                            onInput={setContactPerson}
                            inputType='text'
                            placeholder={TranslationModel.translate(
                                phrases.contact_form.contact_person
                            )}
                            placeholderHeader = {true}
                            obligatory = {true}
                            required = {true}

                        />
                    </div>
                    <br />
                    <div>
                        <InputInfo
                            name='email'
                            onInput={setEmail}
                            inputType='email'
                            placeholder={TranslationModel.translate(
                                phrases.contact_form.email
                            )}
                            placeholderHeader = {true}
                            obligatory = {true}
                            required = {true}

                        />
                    </div>
                </div>
                {/* Message text  */}
                <div className='contact-input-message'>
                    <InputInfo
                        name='message'
                        onInput={setMessage}
                        inputType='textarea'
                        placeholder={TranslationModel.translate(
                            phrases.contact_form.message
                        )}
                        placeholderHeader = {true}
                        obligatory = {true}
                        required = {true}

                    />
                </div>
                {/* Submit button */}
                <div>
                    <button className='submit-form-button'>
                       <Button
                         buttonType={ButtonTypes.normalCompact}
                       >
                        {loading ? (
                            <LoadingText />
                        ) : (
                            TranslationModel.translate(phrases.contact_form.send)
                        )}
                       </Button>
                    </button>
                </div>
            </form>
            }
            {doneMessage ? <p>{doneMessage}</p> : ''} 
        </div>
    )
}   

export default ContactForm
