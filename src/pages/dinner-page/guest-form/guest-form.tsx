import React, { useState, ChangeEvent, useEffect } from 'react'
import './guest-form.css'

import TranslationModel, { Phrase } from '../../../model/translationModel'
import phrases from '../../../data/translations.json'
import { InputInfo } from '../../../components/input-info/input-info'
import {
    FormControl,
    Radio,
    FormControlLabel,
    RadioGroup,
    MenuItem,
    Select,
    Checkbox,
} from '@material-ui/core'
import { InputInfoHeader } from '../../../components/input-info/input-info-header/input-info-header'
import { MBDCompanyContext } from '../../../contexts/mbd-company-provider'
import CourseSelect from './course-select/course-select'

import TicketIcon from '../../../assets/icons/other/tickets_black.svg'
import { Button, ButtonTypes } from '../../../components/button/button'
import BACKEND_PATH from '../../../backend-environment'
import TextSection, {
    TextSectionAlignment,
} from '../../../components/text-section/text-section'
import { MBDDateContext } from '../../../contexts/mbd-date-provider'

const GuestForm = () => {
    const formEndDate = new Date('2020-07-31')
    const formStartDate = new Date(formEndDate.getTime())
    formStartDate.setDate(formStartDate.getDate() - 30)

    const [ticketPrice, _setTicketPrice] = useState(0)

    const [name, setName] = useState('EK Test')
    const [personId, setPersonId] = useState('kahdka')
    const [email, setEmail] = useState('asdasd')

    const [type, setType] = useState('student')
    const [company, setCompany] = useState('')
    const [starter, setStarter] = useState('Test')
    const [mainCourse, setMainCourse] = useState('Test')
    const [dessert, setDessert] = useState('Test')
    const [drinks, setDrinks] = useState('Test')
    const [allergies, setAllergies] = useState('aaaa')
    const [terms, setTerms] = useState(true)
    const [info, setInfo] = useState(true)

    const [sent, setSent] = useState(false)
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState(phrases.dinner_page.guest_form.obligatory)

    const nonAlcoholicDrink = {
        se: 'Läsk (alkoholfri)',
        en: 'Soda (non-alcoholic)',
    }

    const ticketBasePrice = 180
    const alcoholPrice = 20
    const helperRebate = 20

    const courses = {
        starters: [
            {
                name: {
                    se:
                        'Toast på surdegsbröd med färskost creme, prosciutto och rostad kronärtskocka',
                    en:
                        'Toast på surdegsbröd med färskost creme, prosciutto och rostad kronärtskocka',
                },
                attributes: {
                    se: 'Nötfri',
                    en: 'Nut-free',
                },
            },
            {
                name: {
                    se:
                        'Rostade rödbetor med solrosfrön, ruccola och örtdressing',
                    en:
                        'Rostade rödbetor med solrosfrön, ruccola och örtdressing',
                },
                attributes: {
                    se: 'Nötfri, vegansk',
                    en: 'Nut-free, vegan',
                },
            },
        ],
        mainCourses: [
            {
                name: {
                    se:
                        'Grillad kycklingfilé med citron- och parmesansås, rostade rotsaker samt örtsallad',
                    en:
                        'Grillad kycklingfilé med citron- och parmesansås, rostade rotsaker samt örtsallad',
                },
                attributes: {
                    se: 'Nötfri',
                    en: 'Nut-free',
                },
            },
            {
                name: {
                    se:
                        'Sojafärsbiff med potatisgratäng, rostade grönsaker och örtsky',
                    en:
                        'Sojafärsbiff med potatisgratäng, rostade grönsaker och örtsky',
                },
                attributes: {
                    se: 'Nötfri, vegansk',
                    en: 'Nut-free, vegan',
                },
            },
        ],
        desserts: [
            {
                name: {
                    se: 'Blåbär- och citronmoussetårta',
                    en: 'Blåbär- och citronmoussetårta',
                },
                attributes: {
                    se: 'Glutenfri',
                    en: 'Gluten-free',
                },
            },
            {
                name: {
                    se: 'Raw chocolate cake',
                    en: 'Raw chocolate cake',
                },
                attributes: {
                    se: 'Vegansk',
                    en: 'Vegan',
                },
            },
        ],
        drinks: [
            nonAlcoholicDrink,
            {
                se: 'Öl',
                en: 'Beer',
            },
            {
                se: 'Vitt vin',
                en: 'White wine',
            },
            {
                se: 'Rött vin',
                en: 'Red wine',
            },
            {
                se: 'Cider',
                en: 'Cider',
            },
        ],
    }

    const checkFormFieldError = () => {
        
        setErrorMessage(phrases.dinner_page.guest_form.obligatory)

        var obligatoryFields = [
            name,
            personId,
            email,
            type,
            starter,
            mainCourse,
            dessert,
            drinks,
            info,
        ]
        obligatoryFields =
            type !== 'companyRep'
                ? [...obligatoryFields, terms]
                : obligatoryFields
        obligatoryFields =
            type === 'companyRep'
                ? [...obligatoryFields, company]
                : obligatoryFields

        for (const field of obligatoryFields) {
            if (!field) {
                return true
            } else if (typeof field === 'string') {
                if (field.trim().length === 0 || field === '') {
                    return true
                }
            }
        }

        return false
    }

    const sendGuestForm = () => {
        setError(checkFormFieldError())
        if (!checkFormFieldError()) {
            let formData = new FormData()
            formData.append('name', name)
            formData.append('personId', personId)
            formData.append('email', email)
            formData.append('type', type)
            formData.append('company', company)
            formData.append('starter', starter)
            formData.append('mainCourse', mainCourse)
            formData.append('dessert', dessert)
            formData.append('drinks', drinks)
            formData.append('allergies', allergies)
            formData.append('ticketPrice', ticketPrice.toString())

            fetch(BACKEND_PATH + `guestForm.php?action=${'add-guest'}`, {
                method: 'POST',
                body: formData,
            }).then(() => {
                setSent(true)
                if (document) {
                    document
                        .getElementById('dinnerpage-registration-anchor')!
                        .scrollIntoView({
                            behavior: 'smooth',
                        })
                }
            }).catch(() => {
                setError(true)
                setErrorMessage(phrases.dinner_page.guest_form.error)
            })
        }
    }

    const handleTypeChange = (event: ChangeEvent<HTMLInputElement>) => {
        setType(event.target.value)
    }
    const handleCompanyChange = (
        event: ChangeEvent<{ value: string | unknown }>
    ) => {
        setCompany(
            typeof event.target.value === 'string' ? event.target.value : ''
        )
    }
    const handleDrinksChange = (
        event: ChangeEvent<{ value: string | unknown }>
    ) => {
        setDrinks(
            typeof event.target.value === 'string' ? event.target.value : ''
        )
    }

    useEffect(() => {
        if (type && drinks) {
            let price =
                ticketBasePrice +
                (drinks === nonAlcoholicDrink.se ? 0 : alcoholPrice)
            switch (type) {
                case 'student':
                    _setTicketPrice(price)
                    break
                case 'companyRep':
                    _setTicketPrice(0)
                    break
                case 'helper':
                    _setTicketPrice(price - helperRebate)
                    break
                case 'plusOne':
                    _setTicketPrice(price)
                    break
                default:
                    _setTicketPrice(0)
            }
        }
    }, [type, drinks])

    const renderGeneralOptions = () => (
        <div>
            <InputInfo
                placeHolderHeader
                noCard
                inputType='text'
                name='fullName'
                obligatory
                onInput={setName}
                placeholder={TranslationModel.translate(
                    phrases.dinner_page.guest_form.full_name
                )}
                defaultValue={name}
            />
            <br />
            <InputInfo
                placeHolderHeader
                noCard
                obligatory
                inputType='text'
                name='personId'
                onInput={setPersonId}
                placeholder={TranslationModel.translate(
                    phrases.dinner_page.guest_form.person_id
                )}
                defaultValue={personId}
            />
            <br />
            <InputInfo
                placeHolderHeader
                noCard
                obligatory
                inputType='text'
                name='email'
                onInput={setEmail}
                placeholder={TranslationModel.translate(phrases.email)}
                defaultValue={email}
            />
            <br />
            <FormControl component='fieldset'>
                <InputInfoHeader obligatory>
                    {TranslationModel.translate(
                        phrases.dinner_page.guest_form.person_type
                    )}
                </InputInfoHeader>
                <RadioGroup
                    aria-label='type'
                    value={type}
                    onChange={handleTypeChange}
                >
                    <FormControlLabel
                        value='student'
                        control={<Radio />}
                        label={TranslationModel.translate(
                            phrases.dinner_page.guest_form.student
                        )}
                    />

                    <div className='company-rep'>
                        <FormControlLabel
                            value='companyRep'
                            control={<Radio />}
                            label={TranslationModel.translate(
                                phrases.dinner_page.guest_form.company_rep
                            )}
                        />
                        {type === 'companyRep' ? (
                            <MBDCompanyContext.Consumer>
                                {(companies) => {
                                    return (
                                        <Select
                                            style={{
                                                margin: '0',
                                                maxWidth: 300,
                                            }}
                                            labelId='label'
                                            displayEmpty
                                            id='company-select'
                                            placeholder='Select a company'
                                            value={company}
                                            onChange={handleCompanyChange}
                                        >
                                            <MenuItem value=''>
                                                <em>
                                                    {TranslationModel.translate(
                                                        phrases.dinner_page
                                                            .guest_form
                                                            .choose_company
                                                    )}
                                                </em>
                                            </MenuItem>
                                            {companies.isExhibitor.map(
                                                (company) => (
                                                    <MenuItem
                                                        value={company.id}
                                                    >
                                                        {company.name}
                                                    </MenuItem>
                                                )
                                            )}
                                            <MenuItem
                                                value={
                                                    TranslationModel.translate(
                                                        phrases.dinner_page
                                                            .guest_form.other
                                                    ) as string
                                                }
                                            >
                                                <em>
                                                    {TranslationModel.translate(
                                                        phrases.dinner_page
                                                            .guest_form.other
                                                    )}
                                                </em>
                                            </MenuItem>
                                        </Select>
                                    )
                                }}
                            </MBDCompanyContext.Consumer>
                        ) : (
                            <></>
                        )}
                    </div>
                    <FormControlLabel
                        value='helper'
                        control={<Radio />}
                        label={TranslationModel.translate(
                            phrases.dinner_page.guest_form.helper
                        )}
                    />
                    <FormControlLabel
                        value='plusOne'
                        control={<Radio />}
                        label={TranslationModel.translate(
                            phrases.dinner_page.guest_form.plus_one
                        )}
                    />
                </RadioGroup>
            </FormControl>
        </div>
    )

    const renderDinnerOptions = () => (
        <>
            <InputInfoHeader obligatory>
                {TranslationModel.translate(
                    phrases.dinner_page.guest_form.drink
                )}
            </InputInfoHeader>
            <div style={{ display: 'flex' }}>
                <Select
                    style={{ margin: 0, flex: 1 }}
                    labelId='label'
                    displayEmpty
                    value={drinks}
                    onChange={handleDrinksChange}
                >
                    <MenuItem value=''>
                        <em>
                            {TranslationModel.translate(
                                phrases.dinner_page.guest_form.choose_drink
                            )}
                        </em>
                    </MenuItem>
                    {courses.drinks.map((drink) => (
                        <MenuItem value={drink.se}>
                            {TranslationModel.translate(drink)}
                        </MenuItem>
                    ))}
                </Select>
            </div>
            <br />
            <CourseSelect
                obligatory
                header={TranslationModel.translate(
                    phrases.dinner_page.guest_form.starter
                )}
                courses={courses.starters}
                courseSelect={starter}
                setCourse={setStarter}
            />
            <CourseSelect
                obligatory
                header={TranslationModel.translate(
                    phrases.dinner_page.guest_form.main_course
                )}
                courses={courses.mainCourses}
                courseSelect={mainCourse}
                setCourse={setMainCourse}
            />
            <CourseSelect
                obligatory
                header={TranslationModel.translate(
                    phrases.dinner_page.guest_form.dessert
                )}
                courses={courses.desserts}
                courseSelect={dessert}
                setCourse={setDessert}
            />
            <br />
            <InputInfo
                placeHolderHeader
                noCard
                inputType='text'
                name='allergies'
                onInput={setAllergies}
                placeholder={TranslationModel.translate(
                    phrases.dinner_page.guest_form.allergies
                )}
                defaultValue={allergies}
            />
        </>
    )

    const renderConfirmationOptions = () => (
        <>
            <InputInfoHeader obligatory>
                {TranslationModel.translate(
                    phrases.dinner_page.guest_form.agreements
                )}
            </InputInfoHeader>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={info}
                        onChange={() => setInfo(!info)}
                        color='primary'
                    />
                }
                label={TranslationModel.translate(
                    phrases.dinner_page.guest_form.info
                )}
            />

            <br />
            {ticketPrice > 0 ? (
                <>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={terms}
                                onChange={() => setTerms(!terms)}
                                color='primary'
                            />
                        }
                        label={TranslationModel.translate(
                            phrases.dinner_page.guest_form.terms
                        )}
                    />
                    <div className='ticket-price'>
                        <img src={TicketIcon} />
                        <p>
                            <b>
                                {TranslationModel.translate({
                                    se: 'Biljettpris',
                                    en: 'Ticket price',
                                })}
                                :
                            </b>{' '}
                            {ticketPrice}{' '}
                            {TranslationModel.translate({
                                se: 'kr',
                                en: 'SEK',
                            })}
                        </p>
                    </div>
                </>
            ) : (
                <></>
            )}
            <br />
            <br />
        </>
    )

    const renderErrorMessage = (message: Phrase) => (
        <>
            <div className='guest-form-error slide'>
                {TranslationModel.translate(
                    message
                )}
            </div>
            <br />
        </>
    )

    return (
        <>
            <div className='guest-form'>
                {formStartDate <= new Date() && new Date() <= formEndDate ? (
                    sent ? (
                        <div className='signed-up'>
                            <TextSection align={TextSectionAlignment.center}>
                                {TranslationModel.translate(
                                    phrases.dinner_page.guest_form.signed_up
                                )}
                            </TextSection>
                        </div>
                    ) : (
                        <>
                            {renderGeneralOptions()}
                            <br />
                            {renderDinnerOptions()}
                            <br />
                            {renderConfirmationOptions()}
                            {error && renderErrorMessage(errorMessage)}
                            <Button
                                onClick={sendGuestForm}
                                buttonType={ButtonTypes.normalCompact}
                            >
                                {TranslationModel.translate(phrases.send)}
                            </Button>
                        </>
                    )
                ) : (
                    <TextSection align={TextSectionAlignment.center}>
                        {new Date() > formEndDate ? (
                            <MBDDateContext.Consumer>
                                {(mbdDate) => (
                                    <>
                                        {`${TranslationModel.translate(
                                            phrases.dinner_page.guest_form
                                                .closed
                                        )} ${mbdDate.getStartYear()} ${TranslationModel.translate(
                                            phrases.dinner_page.guest_form
                                                .closed_continued
                                        )}`}
                                    </>
                                )}
                            </MBDDateContext.Consumer>
                        ) : (
                            <>
                                {TranslationModel.translate(
                                    phrases.dinner_page.guest_form.open_from
                                )}{' '}
                                {formStartDate.toLocaleDateString()}{' '}
                                {TranslationModel.translate(
                                    phrases.dinner_page.guest_form.open_until
                                )}{' '}
                                {formEndDate.toLocaleDateString()}.
                            </>
                        )}
                    </TextSection>
                )}
            </div>
        </>
    )
}

export default GuestForm
