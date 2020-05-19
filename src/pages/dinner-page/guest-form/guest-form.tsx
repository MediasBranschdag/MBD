import React, { useState } from 'react';
import './guest-form.css';

import TranslationModel from '../../../model/translationModel';
import phrases from '../../../data/translations.json';
import Card from '../../../components/card/card';
import ContentSection, { ContentSectionBackground } from '../../../components/layout/content-section/content-section';
import TextSection from '../../../components/text-section/text-section';
import { InputInfo } from '../../../components/input-info/input-info';
import { FormControl, Radio, FormControlLabel, RadioGroup, MenuItem, Select } from '@material-ui/core';
import { ContentPadding } from '../../../components/content-padding';
import { InputInfoHeader } from '../../../components/input-info/input-info-header/input-info-header';
import { MBDCompanyContext } from '../../../contexts/mbd-company-provider';
import CourseSelect from './course-select/course-select';

const GuestForm = () => {

    const [radio, setRadio] = useState('');
    const [company, setCompany] = useState('');

    
    const [starter, setStarter] = useState('');
    const [mainCourse, setMainCourse] = useState('');
    const [dessert, setDessert] = useState('');

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
        ]
    }

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRadio(event.target.value);
    };
    const handleChange = (event: any) => {
        setCompany(event.target.value);
    };
      
    return (<Card>
        <ContentSection background={ContentSectionBackground.dark}>
            <h1>{TranslationModel.translate(phrases.dinner_page.registration)}</h1>
        </ContentSection>
        <ContentSection>
        
            <TextSection color='#000'>
                <InputInfo 
                    placeHolderHeader noCard 
                    inputType='text' 
                    name='fullname' 
                    obligatory
                    onInput={()=>{}} 
                    placeholder='För- och efternamn' />
                <br/>
                <InputInfo 
                    placeHolderHeader noCard 
                    obligatory
                    inputType='text' 
                    name='fullname' 
                    onInput={()=>{}} 
                    placeholder='Personnummer' />
                <br/> 
                <InputInfo 
                    placeHolderHeader noCard 
                    inputType='text' 
                    name='fullname' 
                    onInput={()=>{}} 
                    placeholder='E-post' />
                <br/>   
                <FormControl component='fieldset'>
                    <InputInfoHeader>Jag är...</InputInfoHeader>
                    <RadioGroup aria-label='gender' name='gender1' value={radio} onChange={handleRadioChange}>
                        <FormControlLabel value='student' control={<Radio/>} label='En student' />
                        
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                        <FormControlLabel value='companyRep' control={<Radio />} label='En företagsrepresentant från...' />
                        {
                            radio === 'companyRep' ? 
                            
                            <MBDCompanyContext.Consumer>
                                {companies => {
                                    return (
                                        <Select 
                                        style={{ margin: "0"}} labelId='label' displayEmpty id='company-select' placeholder='Select a company' value={company} onChange={handleChange}>
                                            <MenuItem value="">
                                                <em>Välj ett företag...</em>
                                            </MenuItem>
                                            {companies.isExhibitor.map(company => 
                                                <MenuItem value={company.name}>{company.name}</MenuItem>
                                            )}
                                        </Select>
                                    )
                                }}
                            </MBDCompanyContext.Consumer>: <></>
                        }</div>
                        <FormControlLabel value='other' control={<Radio />} label='Någons +1' />
                    </RadioGroup>
                </FormControl>
                <br/> 
                <br/> 
                   <CourseSelect
                    header='Förrätt'
                    courses={courses.starters}
                    courseSelect={starter}
                    setCourse={setStarter}
                   />
                   <CourseSelect
                    header='Huvudrätt'
                    courses={courses.mainCourses}
                    courseSelect={mainCourse}
                    setCourse={setMainCourse}
                   />
                   <CourseSelect
                    header='Efterätt'
                    courses={courses.desserts}
                    courseSelect={dessert}
                    setCourse={setDessert}
                   />
                <br/>    
                <InputInfo 
                    placeHolderHeader noCard 
                    inputType='text' 
                    name='fullname' 
                    onInput={()=>{}} 
                    placeholder='Eventuella allergier' />
                <br/>
            </TextSection>
        </ContentSection>
    </Card>)
}

export default GuestForm;