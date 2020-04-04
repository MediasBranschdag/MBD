import React from 'react';
import Homepage from '../pages/home-page/homepage';
import Companypage from '../pages/company-page/companypage';
import phrases from '../data/translations.json';
import { Phrase } from '../model/translationModel';
import Contactpage from '../pages/contact-page/contact-page';
import Studentpage from '../pages/student-page/studentpage';

class Route {
    path: string;
    name: Phrase;
    component: React.ComponentType;

    constructor(path: string, name: Phrase, component: React.ComponentType) {
        this.path = path;
        this.name = name;
        this.component = component;
    }
}

const Routes = {
    homePage: new Route('/', phrases.start, Homepage),
    compnayPage: new Route('/company', phrases.for_companies, Companypage),
    studentPage: new Route('/student', phrases.for_students, Studentpage),
    mapPage: new Route('/map', phrases.map, Companypage),
    contactPage: new Route('/contact', phrases.contact, Contactpage),
    eventPage: new Route('/event', phrases.events, Companypage),
};


export default Routes;