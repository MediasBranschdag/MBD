import React from 'react';
import Homepage from '../pages/homepage';
import Companypage from '../pages/companypage';
import phrases from '../data/translations.json';
import { Phrase } from '../model/translationModel';

class Route {
    path: string;
    name: Phrase;
    component: React.ComponentType;
    showFooter: boolean;

    constructor(path: string, name: Phrase, component: React.ComponentType, showFooter: boolean = true) {
        this.path = path;
        this.name = name;
        this.component = component;
        this.showFooter = showFooter;
    }
}

const Routes = {
    homePage: new Route('/', phrases.start, Homepage),
    compnayPage: new Route('/company', phrases.for_companies, Companypage),
    studentPage: new Route('/student', phrases.for_students, Companypage),
    mapPage: new Route('/map', phrases.map, Companypage, false),
    contactPage: new Route('/contact', phrases.contact, Companypage),
    eventPage: new Route('/event', phrases.events, Companypage),
};


export default Routes;