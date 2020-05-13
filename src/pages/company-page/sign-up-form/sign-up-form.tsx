import React, { FC, useState, ReactNode, Fragment } from 'react';
import _ from 'lodash';
import { InputInfo } from '../../../components/input-info/input-info';
import TranslationModel from '../../../model/translationModel'
import phrases from '../../../data/translations.json';
import { Button, ButtonTypes } from '../../../components/button/button';

import './sign-up-form.css';
import BACKEND_PATH from '../../../backend-environment';
import LoadingText from '../../../components/loading-text';
import { InputInfoHeader } from '../../../components/input-info/input-info-header/input-info-header';

const SignUpForm: FC = () => {

    const [formRef, setFormRef]: any = useState(null);
    const [disableSend, setDisableSend] = useState(false);

    const [companyName, setCompanyName] = useState('');
    const [companyId, setCompanyId] = useState('');
    const [contactPerson, setContactPerson] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [invoiceAddress, setInvoiceAddress] = useState('');
    const [invoiceMail, setInvoiceMail] = useState('');
    const [comment, setComment] = useState('');
    
    const [holdEvents, setHoldEvents]: any = useState(null);

    const [errorMessage, setErrorMessage] = useState<ReactNode>('');
    const [error, setError] = useState(false);

    const [doneMessage, setDoneMessage] = useState<ReactNode>('');
    const [loading, setLoading] = useState(false);

    const opportunities: string[] = [
        (TranslationModel.translate(phrases.sign_up.opportunities.full_time) as string),
        (TranslationModel.translate(phrases.sign_up.opportunities.part_time) as string),
        (TranslationModel.translate(phrases.sign_up.opportunities.summer_jobs) as string),
        (TranslationModel.translate(phrases.sign_up.opportunities.master_thesis) as string),
        (TranslationModel.translate(phrases.sign_up.opportunities.internships) as string),
        (TranslationModel.translate(phrases.sign_up.opportunities.trainee_program) as string),
        (TranslationModel.translate(phrases.sign_up.opportunities.events) as string)
    ]
    let initialOppState: Record<string, boolean> = {}
    for (const opp of opportunities) {
        initialOppState = ({...initialOppState, ...{[opp]: false}});
    }
    const [oppSelect, setOppSelect] = useState(initialOppState);

    const textInputs = [
        {
            name: 'companyName',
            placeholder: TranslationModel.translate(phrases.sign_up.company_name),
            inputState: companyName,
            onInput: setCompanyName,
            obligatory: true,
        },
        {
            name: 'companyId',
            placeholder: TranslationModel.translate(phrases.sign_up.organization_number),
            inputState: companyId,
            onInput: setCompanyId,
            obligatory: true,
        },
        {
            name: 'contactPerson',
            placeholder: TranslationModel.translate(phrases.sign_up.contact_person),
            inputState: contactPerson,
            onInput: setContactPerson,
            obligatory: true,
        },
        {
            name: 'email',
            placeholder: TranslationModel.translate(phrases.sign_up.contact_email),
            inputState: email,
            onInput: setEmail,
            obligatory: true,
        },
        {
            name: 'phone',
            placeholder: TranslationModel.translate(phrases.sign_up.phone),
            inputState: phone,
            onInput: setPhone,
            obligatory: true,
        },
        {
            name: 'invoiceAddress',
            placeholder: TranslationModel.translate(phrases.sign_up.invoice_address),
            inputState: invoiceAddress,
            onInput: setInvoiceAddress,
            obligatory: true,
        },
        {
            name: 'invoiceMail',
            placeholder: TranslationModel.translate(phrases.sign_up.invoice_email),
            inputState: invoiceMail,
            onInput: setInvoiceMail,
            obligatory: false,
        },
        {
            name: 'comment',
            placeholder: TranslationModel.translate(phrases.sign_up.comment),
            inputState: comment,
            onInput: setComment,
            obligatory: false,
        }
    ]

    const sendEmail = () => {        
        for (const input of textInputs) {
            if(input.obligatory && input.inputState === '') {
                setError(true)
                setErrorMessage(TranslationModel.translate({
                    se: 'Du måste ange ' + (input.placeholder as string).toLowerCase() + '.',
                    en: input.placeholder + ' must be supplied.'
                }))
                return
            }
        }
        if(holdEvents === null) {
            setError(true)
            setErrorMessage(TranslationModel.translate({
                se: 'Du måste ange om ni är intresserade av att hålla evenemang.',
                en: 'You have to select if you are intrested in holding events.'
            }))
            return
        }
        let formData = new FormData();

        //Compile message
        let message = '';
        //Text input
        for (const input of textInputs) {
            message += `<b>${input.placeholder}</b>:\n${input.inputState}\n\n`
        }
        //Hold events
        message += `<b>${TranslationModel.translate(phrases.sign_up.hold_events)}</b>:\n${TranslationModel.translate(holdEvents ? phrases.sign_up.yes : phrases.sign_up.no)}\n\n`
        //Opportunities
        let opps: string[] = [];
        for (const opp in _.pickBy(oppSelect)) {
            opps = [...opps, opp]
        };
        message += `<b>${TranslationModel.translate(phrases.sign_up.opportunities_header)}</b>:\n${opps.join(', ')}\n\n`;
        //Subject
        formData.append('subject', `${TranslationModel.translate(phrases.interest_form) as string} - ${companyName}`);
        formData.append('message', message);
        setError(false);

        setLoading(true);
        fetch(BACKEND_PATH + 'signUp.php', {
            method: 'POST',
            body: formData
        }).then(
            () => {
                setDoneMessage(TranslationModel.translate({
                se: 'Intresseanmälan är skickad.',
                en: 'Your application has been sent.'}))  
                formRef.reset()
                setHoldEvents(null)
                setOppSelect(initialOppState)
                setDisableSend(true)
            }
        ).catch(
            () => {
                setErrorMessage(TranslationModel.translate({
                se: 'Något gick fel, testa gärna igen.',
                en: 'Something went wrong, please try again.'}))
                setError(true)
            }
        ).finally(
            () => setLoading(false)
        );
    }

    return (
        <div>
            <form className='sign-up-form' onSubmit={() => sendEmail()} ref={(el) => setFormRef(el)}>
                {textInputs.map(input =>
                    <Fragment key={input.name}>
                        <InputInfo
                            noCard
                            obligatory={input.obligatory}
                            placeHolderHeader
                            name={input.name}
                            onInput={input.onInput}
                            inputType='text'
                            placeholder={input.placeholder} />
                        <br />
                    </Fragment>
                )}
                <InputInfoHeader obligatory>
                    {TranslationModel.translate(phrases.sign_up.hold_events)}
                </InputInfoHeader>
                <span onClick={() => setHoldEvents(true)}>
                    <input type={'radio'} checked={holdEvents ?? false} onChange={() => {}}/>
                    <label className='no-select'>{TranslationModel.translate(phrases.sign_up.yes)}</label>
                </span>
                <span onClick={() => setHoldEvents(false)}>
                    <input type={'radio'} checked={(holdEvents === null) ? false : !holdEvents} onChange={() => {}}/>
                    <label className='no-select'>{TranslationModel.translate(phrases.sign_up.no)}</label>
                </span>
                <br />
                <br />
                <InputInfoHeader>
                    {TranslationModel.translate(phrases.sign_up.opportunities_header)}
                </InputInfoHeader>
                <div className='sign-up-opportunities'>
                    { opportunities.map(opportunity =>
                        <span key={opportunity} onClick={() => setOppSelect({...oppSelect, [opportunity]: !oppSelect[opportunity]})} >
                            <input type={'checkbox'} checked={oppSelect[opportunity]} onChange={() => {}}/>
                            <label className='no-select'>{opportunity}</label>
                        </span>
                    )}
                </div>
                <br />
            </form>
            {
                error ? <p className='sign-up-error-message'>{errorMessage}</p> : <></>
            }
            {
                doneMessage ? <p className='sign-up-message'>{doneMessage}</p> : <></>
            }
            { disableSend ? <></> :
                <Button onClick={() => sendEmail()} buttonType={ButtonTypes.normalCompact}>
                {
                    loading
                    ? <LoadingText/>
                    : TranslationModel.translate(phrases.send)
                }
                </Button>
            }
        </div>
    )
}

export default SignUpForm;