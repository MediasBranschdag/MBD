import React, { useState, ChangeEvent, useEffect } from 'react';
import './guest-form.css';

import TranslationModel from '../../../model/translationModel';
import phrases from '../../../data/translations.json';
import { InputInfo } from '../../../components/input-info/input-info';
import { FormControl, Radio, FormControlLabel, RadioGroup, MenuItem, Select, Checkbox } from '@material-ui/core';
import { InputInfoHeader } from '../../../components/input-info/input-info-header/input-info-header';
import { MBDCompanyContext } from '../../../contexts/mbd-company-provider';
import CourseSelect from './course-select/course-select';

import TicketIcon from '../../../assets/icons/other/tickets_black.svg';
import { Button, ButtonTypes } from '../../../components/button/button';

const GuestForm = () => {
    const [ticketPrice, _setTicketPrice] = useState(0);

    const [name, setName] = useState('');
    const [personId, setPersonId] = useState('');
    const [email, setEmail] = useState('');

    const [type, setType] = useState('');
    const [company, setCompany] = useState('');
    const [starter, setStarter] = useState('');
    const [mainCourse, setMainCourse] = useState('');
    const [dessert, setDessert] = useState('');
    const [drinks, setDrinks] = useState('');
    const [allergies, setAllergies] = useState('');
    const [terms, setTerms] = useState(false);
    const [info, setInfo] = useState(false);

    const [error, setError] = useState(false);

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
                    se: 'Toast på surdegsbröd med färskost creme, prosciutto och rostad kronärtskocka',
                    en: 'Toast på surdegsbröd med färskost creme, prosciutto och rostad kronärtskocka',
                },
                attributes: {
                    se: 'Nötfri',
                    en: 'Nut-free',
                }
            },
            {
                name: {
                    se: 'Rostade rödbetor med solrosfrön, ruccola och örtdressing',
                    en: 'Rostade rödbetor med solrosfrön, ruccola och örtdressing',
                },
                attributes: {
                    se: 'Nötfri, vegansk',
                    en: 'Nut-free, vegan',
                }
            }
        ],
        mainCourses: [
            {
                name: {
                    se: 'Grillad kycklingfilé med citron- och parmesansås, rostade rotsaker samt örtsallad',
                    en: 'Grillad kycklingfilé med citron- och parmesansås, rostade rotsaker samt örtsallad',
                },
                attributes: {
                    se: 'Nötfri',
                    en: 'Nut-free',
                }
            },
            {
                name: {
                    se: 'Sojafärsbiff med potatisgratäng, rostade grönsaker och örtsky',
                    en: 'Sojafärsbiff med potatisgratäng, rostade grönsaker och örtsky',
                },
                attributes: {
                    se: 'Nötfri, vegansk',
                    en: 'Nut-free, vegan',
                }
            }
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
                }
            },
            {
                name: {
                    se: 'Raw chocolate cake',
                    en: 'Raw chocolate cake',
                },
                attributes: {
                    se: 'Vegansk',
                    en: 'Vegan',
                }
            }
        ],
        drinks : [
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
            }
        ]
    }

    const checkFormFieldError = () => {

        var obligatoryFields = [
            name,
            personId,
            email,
            type,
            starter,
            mainCourse,
            dessert,
            drinks,
            info
        ]
        obligatoryFields = type !== 'companyRep' ? [...obligatoryFields, terms] : obligatoryFields
        obligatoryFields = type === 'companyRep' ? [...obligatoryFields, company] : obligatoryFields

        for (const field of obligatoryFields) {
            if (!field) {
                return true
            } 
            else if (typeof field === 'string') {
                if(field.trim().length === 0 || field === '') {
                    return true
                }
            }
        }

        return false
    
    }

    const sendGuestForm = () => {
        setError(checkFormFieldError())
        if(!checkFormFieldError()) {
            console.log({
                name,
                personId,
                email,
                type,
                company,
                starter,
                mainCourse,
                dessert,
                drinks,
                allergies,
                terms,
                info,
                ticketPrice
            })
        }
    }

    const handleTypeChange = (event: ChangeEvent<HTMLInputElement>) => {
        setType(event.target.value);
    };
    const handleCompanyChange = (event: ChangeEvent<{ value: string | unknown }>) => {
        setCompany(typeof event.target.value === 'string' ? event.target.value : '');
    };
    const handleDrinksChange = (event: ChangeEvent<{ value: string | unknown }>) => {
        setDrinks(typeof event.target.value === 'string' ? event.target.value : '');
    };

    useEffect(() => {
        if(type && drinks) {
            let price = ticketBasePrice + (drinks === nonAlcoholicDrink.se ? 0 : alcoholPrice)
            switch(type) {
                case 'student':
                    _setTicketPrice(price)
                  break;
                case 'companyRep':
                    _setTicketPrice(0)
                    break;            
                case 'helper':
                  _setTicketPrice(price - helperRebate)
                    break;
                case 'plusOne':
                    _setTicketPrice(price)
                    break;
                default:
                    _setTicketPrice(0)
              }
        }
    }, [type, drinks])

    const renderGeneralOptions = () => (<div>
        <InputInfo 
            placeHolderHeader noCard 
            inputType='text' 
            name='fullName' 
            obligatory
            onInput={setName} 
            placeholder={TranslationModel.translate(phrases.dinner_page.guest_form.full_name)} 
            defaultValue={name} />
        <br/>
        <InputInfo 
            placeHolderHeader noCard 
            obligatory
            inputType='text' 
            name='personId' 
            onInput={setPersonId} 
            placeholder={TranslationModel.translate(phrases.dinner_page.guest_form.person_id)} 
            defaultValue={personId}/>
        <br/> 
        <InputInfo 
            placeHolderHeader noCard 
            obligatory
            inputType='text' 
            name='email' 
            onInput={setEmail} 
            placeholder={TranslationModel.translate(phrases.email)}
            defaultValue={email} />
        <br/>   
        <FormControl component='fieldset'>
            <InputInfoHeader obligatory>{TranslationModel.translate(phrases.dinner_page.guest_form.person_type)}</InputInfoHeader>
            <RadioGroup aria-label='type' value={type} onChange={handleTypeChange}>
                <FormControlLabel value='student' control={<Radio/>} label={TranslationModel.translate(phrases.dinner_page.guest_form.student)} />
                
                <div className='company-rep'>
                <FormControlLabel value='companyRep' control={<Radio />} label={TranslationModel.translate(phrases.dinner_page.guest_form.company_rep)} />
                {
                    type === 'companyRep' ? 
                    
                    <MBDCompanyContext.Consumer>
                        {companies => {
                            return (
                                <Select
                                    style={{ margin: '0', maxWidth: 300}} 
                                    labelId='label' displayEmpty id='company-select' placeholder='Select a company' value={company} onChange={handleCompanyChange}>
                                    <MenuItem value=''>
                                        <em>{TranslationModel.translate(phrases.dinner_page.guest_form.choose_company)}</em>
                                    </MenuItem>
                                    {companies.isExhibitor.map(company => 
                                        <MenuItem value={company.name}>{company.name}</MenuItem>
                                    )}
                                    <MenuItem value={TranslationModel.translate(phrases.dinner_page.guest_form.other) as string}>
                                        <em>{TranslationModel.translate(phrases.dinner_page.guest_form.other)}</em>
                                    </MenuItem>
                                </Select>
                            )
                        }}
                    </MBDCompanyContext.Consumer>: <></>
                }</div>
                <FormControlLabel value='helper' control={<Radio/>} label={TranslationModel.translate(phrases.dinner_page.guest_form.helper)}  />
                <FormControlLabel value='plusOne' control={<Radio />} label={TranslationModel.translate(phrases.dinner_page.guest_form.plus_one)} />
            </RadioGroup>
        </FormControl>
    </div>);

    const renderDinnerOptions = () => (<>        
        <InputInfoHeader obligatory>{TranslationModel.translate(phrases.dinner_page.guest_form.drink)}</InputInfoHeader>  
        <div style={{display: 'flex'}}>
            <Select 
                style={{ margin: 0, flex: 1}} 
                labelId='label' 
                displayEmpty  
                value={drinks} 
                onChange={handleDrinksChange}>
                <MenuItem value=''>
                    <em>{TranslationModel.translate(phrases.dinner_page.guest_form.choose_drink)}</em>
                </MenuItem>
                {courses.drinks.map(drink => <MenuItem value={drink.se}>{TranslationModel.translate(drink)}</MenuItem>)}
            </Select>
        </div>
        <br/>
        <CourseSelect
            obligatory
            header={TranslationModel.translate(phrases.dinner_page.guest_form.starter)}
            courses={courses.starters}
            courseSelect={starter}
            setCourse={setStarter}
        />
        <CourseSelect
            obligatory
            header={TranslationModel.translate(phrases.dinner_page.guest_form.main_course)}
            courses={courses.mainCourses}
            courseSelect={mainCourse}
            setCourse={setMainCourse}
        />
        <CourseSelect
            obligatory
            header={TranslationModel.translate(phrases.dinner_page.guest_form.dessert)}
            courses={courses.desserts}
            courseSelect={dessert}
            setCourse={setDessert}
        />
        <br/>
        <InputInfo 
            placeHolderHeader noCard 
            inputType='text' 
            name='allergies' 
            onInput={setAllergies} 
            placeholder={TranslationModel.translate(phrases.dinner_page.guest_form.allergies)} 
            defaultValue={allergies}/>
    </>);

    const renderConfirmationOptions = () => (<>
        <InputInfoHeader obligatory>{TranslationModel.translate(phrases.dinner_page.guest_form.agreements)}</InputInfoHeader>  
        <FormControlLabel
            control={
                <Checkbox
                    checked={info}
                    onChange={() => setInfo(!info)}
                    color='primary'/>
            }
            label={TranslationModel.translate(phrases.dinner_page.guest_form.info)}/>

        <br/>
        { 
            ticketPrice > 0 ? <>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={terms}
                            onChange={() => setTerms(!terms)}
                            color='primary'/>
                    }
                    label={TranslationModel.translate(phrases.dinner_page.guest_form.terms)}/>
                <div className='ticket-price'>
                    <img src={TicketIcon}/>
                    <p>
                        <b>{TranslationModel.translate({se: 'Biljettpris', en: 'Ticket price'})}:</b> {ticketPrice} {TranslationModel.translate({se: 'kr', en: 'SEK'})}
                    </p>
                </div>
            </>
            : <></>
        }
        <br/>
        <br/></>);

    const renderErrorMessage = () => (<>
        <div className='guest-form-error slide'>
            {TranslationModel.translate(phrases.dinner_page.guest_form.obligatory)}
        </div>
        <br/>
    </>);
      
    return (
            <>
                <div className='guest-form'>
                    {renderGeneralOptions()}
                    <br/>
                    {renderDinnerOptions()}
                    <br/>
                    {renderConfirmationOptions()}
                    {error && renderErrorMessage()}
                    <Button 
                        onClick={sendGuestForm}
                        buttonType={ButtonTypes.normalCompact} >
                        {TranslationModel.translate(phrases.send)}
                    </Button>
                </div>
    </>);
}

export default GuestForm;