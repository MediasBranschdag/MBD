import React, { useState, ChangeEvent } from 'react';
import './guest-form.css';

import TranslationModel from '../../../model/translationModel';
import phrases from '../../../data/translations.json';
import Card from '../../../components/card/card';
import ContentSection, { ContentSectionBackground } from '../../../components/layout/content-section/content-section';
import TextSection from '../../../components/text-section/text-section';
import { InputInfo } from '../../../components/input-info/input-info';
import { FormControl, Radio, FormControlLabel, RadioGroup, MenuItem, Select, Checkbox } from '@material-ui/core';
import { ContentPadding } from '../../../components/content-padding';
import { InputInfoHeader } from '../../../components/input-info/input-info-header/input-info-header';
import { MBDCompanyContext } from '../../../contexts/mbd-company-provider';
import CourseSelect from './course-select/course-select';

import TicketIcon from '../../../assets/icons/other/tickets_black.svg';
import { Button, ButtonTypes } from '../../../components/button/button';

const GuestForm = () => {

    const [type, setType] = useState('');
    const [company, setCompany] = useState('');
    const [starter, setStarter] = useState('');
    const [mainCourse, setMainCourse] = useState('');
    const [dessert, setDessert] = useState('');
    const [drinks, setDrinks] = useState('');
    const [terms, setTerms] = useState(false);
    const [info, setInfo] = useState(false);

    const courses = {
        starters: [
            {
                name: 'Toast på surdegsbröd med färskost creme, prosciutto och rostad kronärtskocka.',
                attributes: 'Nötfri'
            },
            {
                name: 'Rostade rödbetor med solrosfrön, ruccola och örtdressing.',
                attributes: 'Nötfri, Vegan'
            }
        ],
        mainCourses: [
            {
                name: 'Grillad kycklingfilé med citron- och parmesansås, rostade rotsaker samt örtsallad.',
                attributes: 'Nötfri'
            },
            {
                name: 'Sojafärsbiff med potatisgratäng, rostade grönsaker och örtsky.',
                attributes: 'Nötfri, Vegan'
            }
        ],
        desserts: [
            {
                name: 'Blåbär- och citronmoussetårta',
                attributes: 'Glutenfri'
            },
            {
                name: 'Raw chocolate cake.',
                attributes: 'Vegan'
            }
        ],
        drinks : [
            'Läsk',
            'Öl',
            'Vitt vin',
            'Rött vin',
            'Cider',
        ]
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
      
    return (<Card>
        <ContentSection>
        
            <TextSection color='#000'>
                <InputInfo 
                    placeHolderHeader noCard 
                    inputType='text' 
                    name='fullName' 
                    obligatory
                    onInput={()=>{}} 
                    placeholder={TranslationModel.translate(phrases.dinner_page.guest_form.full_name)} />
                <br/>
                <InputInfo 
                    placeHolderHeader noCard 
                    obligatory
                    inputType='text' 
                    name='personId' 
                    onInput={()=>{}} 
                    placeholder={TranslationModel.translate(phrases.dinner_page.guest_form.person_id)} />
                <br/> 
                <InputInfo 
                    placeHolderHeader noCard 
                    obligatory
                    inputType='text' 
                    name='email' 
                    onInput={()=>{}} 
                    placeholder={TranslationModel.translate(phrases.email)} />
                <br/>   
                <FormControl component='fieldset'>
                    <InputInfoHeader obligatory>{TranslationModel.translate(phrases.dinner_page.guest_form.person_type)}</InputInfoHeader>
                    <RadioGroup aria-label='gender' name='gender1' value={type} onChange={handleTypeChange}>
                        <FormControlLabel value='student' control={<Radio/>} label={TranslationModel.translate(phrases.dinner_page.guest_form.student)} />
                        
                        <div className='company-rep'>
                        <FormControlLabel value='companyRep' control={<Radio />} label={TranslationModel.translate(phrases.dinner_page.guest_form.company_rep)} />
                        {
                            type === 'companyRep' ? 
                            
                            <MBDCompanyContext.Consumer>
                                {companies => {
                                    return (
                                        <Select
                                        style={{ margin: '0'}} 
                                        labelId='label' displayEmpty id='company-select' placeholder='Select a company' value={company} onChange={handleCompanyChange}>
                                            <MenuItem value=''>
                                                <em>{TranslationModel.translate(phrases.dinner_page.guest_form.choose_company)}</em>
                                            </MenuItem>
                                            {companies.isExhibitor.map(company => 
                                                <MenuItem value={company.name}>{company.name}</MenuItem>
                                            )}
                                        </Select>
                                    )
                                }}
                            </MBDCompanyContext.Consumer>: <></>
                        }</div>
                        <FormControlLabel value='plusOne' control={<Radio />} label={TranslationModel.translate(phrases.dinner_page.guest_form.plus_one)} />
                    </RadioGroup>
                </FormControl>
                <br/> 
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
                <InputInfoHeader obligatory>{TranslationModel.translate(phrases.dinner_page.guest_form.drink)}</InputInfoHeader>  
                <div style={{display: 'flex'}}>
                <Select 
                    id='company-select'
                    style={{ margin: 0, flex: 1}} 
                    labelId='label' 
                    displayEmpty  
                    value={drinks} 
                    onChange={handleDrinksChange}>
                    <MenuItem value=''>
                        <em>{TranslationModel.translate(phrases.dinner_page.guest_form.choose_drink)}</em>
                    </MenuItem>
                    {courses.drinks.map(drink => <MenuItem value={drink}>{drink}</MenuItem>)}
                </Select>
                </div>
                <br/>
                <InputInfo 
                    placeHolderHeader noCard 
                    inputType='text' 
                    name='allergies' 
                    onInput={()=>{}} 
                    placeholder={TranslationModel.translate(phrases.dinner_page.guest_form.allergies)} />
                <br/>
                <InputInfoHeader obligatory>{TranslationModel.translate(phrases.dinner_page.guest_form.agreements)}</InputInfoHeader>  
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={terms}
                            onChange={() => setTerms(!terms)}
                            color='primary'/>
                    }
                    label={TranslationModel.translate(phrases.dinner_page.guest_form.terms)}/>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={info}
                            onChange={() => setInfo(!info)}
                            color='primary'/>
                    }
                    label={TranslationModel.translate(phrases.dinner_page.guest_form.info)}/>
                <br/>
                <br/>
                <Button  buttonType={ButtonTypes.normalCompact}>
                    {TranslationModel.translate(phrases.send)}
                </Button>
            </TextSection>
        </ContentSection>
    </Card>)
}

export default GuestForm;