import React, { useState, ChangeEvent, useEffect, FC } from 'react'
import './guest-form.css'

import TranslationModel, { Phrase } from '../../model/translationModel'
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
import TextSection, {
    TextSectionAlignment,
} from '../../../components/text-section/text-section'
import { MBDDateContext } from '../../../contexts/mbd-date-provider'
import {
    getCourses,
    CourseType,
    Course,
    DinnerParty,
    addGuest,
    GuestType,
} from '../../model/dinnerPartyModel'
import Loader from '../../../components/loader/loader'
import Confetti from '../../../components/confetti/confetti'
import CenterContent from '../../../components/center-content/center-content'

export const renderClosedGuestForm = () => (
    <MBDDateContext.Consumer>
        {(mbdDate) => (
            <>
                {`${TranslationModel.translate(
                    phrases.dinner_page.guest_form.closed
                )} ${mbdDate.getStartYear()} ${TranslationModel.translate(
                    phrases.dinner_page.guest_form.closed_continued
                )}`}
            </>
        )}
    </MBDDateContext.Consumer>
)

const GuestForm: FC<DinnerParty> = (props) => {
    const [isLoading, setIsLoading] = useState(false)
    const [courses, setCourses] = useState<{
        starters: Course[]
        mainCourses: Course[]
        desserts: Course[]
        drinks: Course[]
    }>({ starters: [], mainCourses: [], desserts: [], drinks: [] })
    const [nonAlcoholicDrinkIds, setNonAlcoholicDrinkIds] = useState<string[]>(
        []
    )

    const [ticketPrice, setTicketPrice] = useState(0)

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
    const [sending, setSendning] = useState(false)
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState(
        phrases.dinner_page.guest_form.obligatory
    )
    props.bookingEnd.setHours(23, 59, 59, 999)

    useEffect(() => {
        setIsLoading(true)
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
            setIsLoading(false)
        })
    }, [])

    const checkFormFieldError = () => {
        setErrorMessage(phrases.dinner_page.guest_form.obligatory)

        var obligatoryFields = [
            { field: name, desc: phrases.dinner_page.guest_form.full_name },
            { field: personId, desc: phrases.dinner_page.guest_form.person_id },
            { field: email, desc: phrases.email },
            { field: type, desc: phrases.dinner_page.guest_form.what_type },
            { field: drinks, desc: phrases.dinner_page.guest_form.drink },
            { field: starter, desc: phrases.dinner_page.guest_form.starter },
            {
                field: mainCourse,
                desc: phrases.dinner_page.guest_form.main_course,
            },
            { field: dessert, desc: phrases.dinner_page.guest_form.dessert },
            { field: info, desc: phrases.dinner_page.guest_form.agreements },
        ]
        obligatoryFields =
            type !== 'companyRep'
                ? [
                      ...obligatoryFields,
                      {
                          field: terms,
                          desc: phrases.dinner_page.guest_form.agreements,
                      },
                  ]
                : obligatoryFields
        obligatoryFields =
            type === 'companyRep'
                ? [
                      ...obligatoryFields,
                      {
                          field: company,
                          desc: phrases.sign_up.company_name,
                      },
                  ]
                : obligatoryFields

        for (const obligatory of obligatoryFields) {
            const message = {
                se: `Du måste ange ${
                    obligatory.desc.se.charAt(0).toLowerCase() +
                    obligatory.desc.se.slice(1)
                }.`,
                en: `Please enter ${
                    obligatory.desc.en.charAt(0).toLowerCase() +
                    obligatory.desc.en.slice(1)
                }.`,
            }
            if (!obligatory.field) {
                setErrorMessage(message)
                return true
            } else if (typeof obligatory.field === 'string') {
                if (
                    obligatory.field.trim().length === 0 ||
                    obligatory.field === ''
                ) {
                    setErrorMessage(message)
                    return true
                }
            }
        }

        return false
    }

    const _setError = (err: boolean) => {
        const errorElementId = 'guest-form-error'
        const animationClassName = 'slide'
        setError(err)
        if (err && document.getElementById(errorElementId)) {
            document
                .getElementById(errorElementId)!
                .classList.add(animationClassName)
            setTimeout(function () {
                document
                    .getElementById(errorElementId)!
                    .classList.remove(animationClassName)
            }, 1000)
        }
    }

    const sendGuestForm = () => {
        _setError(checkFormFieldError())
        setSendning(true)
        if (!checkFormFieldError()) {
            addGuest({
                date: new Date().toLocaleString(),
                name,
                personId,
                email,
                type,
                company: type === GuestType.CompanyRep ? company : '',
                starter,
                mainCourse,
                dessert,
                drinks,
                allergies,
                ticketPrice,
            })
                .then(() => {
                    setSent(true)
                    if (document) {
                        document
                            .getElementById('dinnerpage-booking')!
                            .scrollIntoView({
                                behavior: 'smooth',
                                block: 'center',
                                inline: 'center',
                            })
                    }
                })
                .catch(() => {
                    _setError(true)
                    setErrorMessage(phrases.dinner_page.guest_form.error)
                })
                .finally(() => setSendning(false))
        } else {
            setSendning(false)
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
                props.ticketBasePrice +
                (nonAlcoholicDrinkIds.includes(drinks) ? 0 : props.alcoholPrice)
            switch (type) {
                case 'student':
                    setTicketPrice(price)
                    break
                case 'companyRep':
                    setTicketPrice(0)
                    break
                case 'helper':
                    setTicketPrice(price - props.helperDiscount)
                    break
                case 'plusOne':
                    setTicketPrice(price)
                    break
                default:
                    setTicketPrice(0)
            }
        }
    }, [
        type,
        drinks,
        props.ticketBasePrice,
        props.alcoholPrice,
        props.helperDiscount,
        nonAlcoholicDrinkIds,
    ])

    const renderGeneralOptions = () => (
        <div>
            <InputInfo
                placeholderHeader
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
                placeholderHeader
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
                placeholderHeader
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
                                                        key={company.id}
                                                        value={company.id}
                                                    >
                                                        {company.name}
                                                    </MenuItem>
                                                )
                                            )}
                                            <MenuItem value='other'>
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
            <div className='flex'>
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
                        <MenuItem value={drink.id} key={drink.id}>
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
                placeholderHeader
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
                        <img src={TicketIcon} alt='' />
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
            <div id='guest-form-error'>
                {TranslationModel.translate(message)}
            </div>
            <br />
        </>
    )

    return isLoading ? (
        <CenterContent>
            <Loader />
        </CenterContent>
    ) : (
        <>
            <div className='guest-form'>
                {props.bookingStart <= new Date() &&
                new Date() <= props.bookingEnd ? (
                    sent ? (
                        <div className='signed-up'>
                            <TextSection align={TextSectionAlignment.center}>
                                <Confetti>
                                    <h3>
                                        {TranslationModel.translate(
                                            phrases.dinner_page.guest_form
                                                .signed_up
                                        )}
                                    </h3>
                                    {TranslationModel.translate(
                                        phrases.dinner_page.guest_form
                                            .signed_up_email
                                    )}
                                </Confetti>
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
                                {sending ? (
                                    <Loader />
                                ) : (
                                    <Button
                                        onClick={sendGuestForm}
                                        buttonType={ButtonTypes.normalCompact}
                                    >
                                        {TranslationModel.translate(
                                            phrases.send
                                        )}
                                    </Button>
                                )}
                            </div>
                        </>
                    )
                ) : (
                    <></>
                )}
                <TextSection align={TextSectionAlignment.center}>
                    {new Date() > props.bookingEnd ? (
                        renderClosedGuestForm()
                    ) : (
                        <>
                            {TranslationModel.translate(
                                phrases.dinner_page.guest_form.open_from
                            )}{' '}
                            {props.bookingStart.toLocaleDateString()}{' '}
                            {TranslationModel.translate(
                                phrases.dinner_page.guest_form.open_until
                            )}{' '}
                            <span className='nowrap'>
                                {props.bookingEnd.toLocaleDateString()}.
                            </span>
                        </>
                    )}
                </TextSection>
            </div>
        </>
    )
}

export default GuestForm
