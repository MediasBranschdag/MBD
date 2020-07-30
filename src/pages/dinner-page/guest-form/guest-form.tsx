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
import {
    getDinnerParty,
    getCourses,
    CourseType,
    Course,
} from '../../../model/dinnerPartyModel'

const GuestForm = () => {
    const [formStartDate, setFormStartDate] = useState<Date>(
        new Date('2020-01-01')
    )
    const [formEndDate, setFormEndDate] = useState<Date>(new Date('2020-01-01'))

    const [ticketPrice, _setTicketPrice] = useState(0)
    const [ticketBasePrice, setTicketBasePrice] = useState(0)
    const [alcoholPrice, setAlcoholPrice] = useState(0)
    const [helperRebate, setHelperRebate] = useState(0)

    const [courses, setCourses] = useState<{
        starters: Course[]
        mainCourses: Course[]
        desserts: Course[]
        drinks: Course[]
    }>({ starters: [], mainCourses: [], desserts: [], drinks: [] })
    const [nonAlcoholicDrinkIds, setNonAlcoholicDrinkIds] = useState<string[]>(
        []
    )

    const [name, setName] = useState('')
    const [personId, setPersonId] = useState('')
    const [email, setEmail] = useState('')

    const [type, setType] = useState('')
    const [company, setCompany] = useState('')
    const [starter, setStarter] = useState('')
    const [mainCourse, setMainCourse] = useState('')
    const [dessert, setDessert] = useState('')
    const [drinks, setDrinks] = useState('')
    const [allergies, setAllergies] = useState('')
    const [terms, setTerms] = useState(false)
    const [info, setInfo] = useState(false)

    const [sent, setSent] = useState(false)
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState(
        phrases.dinner_page.guest_form.obligatory
    )

    useEffect(() => {
        getCourses().then((c) => {
            setCourses({
                starters: c.filter(
                    (course) => course.type === CourseType.Starter
                ),
                mainCourses: c.filter(
                    (course) => course.type === CourseType.MainCourse
                ),
                desserts: c.filter(
                    (course) => course.type === CourseType.Dessert
                ),
                drinks: [
                    ...c.filter(
                        (course) => course.type === CourseType.NonAlcoholicDrink
                    ),
                    ...c.filter((course) => course.type === CourseType.Drink),
                ],
            })
            setNonAlcoholicDrinkIds(
                c
                    .filter(
                        (course) => course.type === CourseType.NonAlcoholicDrink
                    )
                    .map((course) => course.id.toString())
            )
        })
        getDinnerParty().then((dinnerParty) => {
            setFormStartDate(dinnerParty.registrationStart)
            setFormEndDate(dinnerParty.registrationEnd)
            setTicketBasePrice(dinnerParty.ticketBasePrice)
            setAlcoholPrice(dinnerParty.alcoholPrice)
            setHelperRebate(dinnerParty.helperRebate)
        })
    }, [])

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

            fetch(BACKEND_PATH + `getDinnerParty.php?action=${'add-guest'}`, {
                method: 'POST',
                body: formData,
            })
                .then(() => {
                    setSent(true)
                    if (document) {
                        document
                            .getElementById('dinnerpage-registration-anchor')!
                            .scrollIntoView({
                                behavior: 'smooth',
                            })
                    }
                })
                .catch(() => {
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
                (nonAlcoholicDrinkIds.includes(drinks) ? 0 : alcoholPrice)
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
                        <MenuItem value={drink.id}>
                            {TranslationModel.translate(drink.desc)}
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
                {TranslationModel.translate(message)}
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
                                <br />
                                {TranslationModel.translate(
                                    phrases.dinner_page.guest_form
                                        .signed_up_email
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
                            <div className='guest-form-button'>
                                <Button
                                    onClick={sendGuestForm}
                                    buttonType={ButtonTypes.normalCompact}
                                >
                                    {TranslationModel.translate(phrases.send)}
                                </Button>
                            </div>
                        </>
                    )
                ) : (
                    <></>
                )}
                <TextSection align={TextSectionAlignment.center}>
                    {new Date() > formEndDate ? (
                        <MBDDateContext.Consumer>
                            {(mbdDate) => (
                                <>
                                    {`${TranslationModel.translate(
                                        phrases.dinner_page.guest_form.closed
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
                            <span className='nowrap'>
                                {formEndDate.toLocaleDateString()}.
                            </span>
                        </>
                    )}
                </TextSection>
            </div>
        </>
    )
}

export default GuestForm
