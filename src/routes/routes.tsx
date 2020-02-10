import React from 'react';
import Homepage from '../pages/homepage';
import Companypage from '../pages/companypage';
import phrases from '../data/translations.json';
import { Phrase } from '../model/translationModel';

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

const Routes = [
    new Route('/', phrases.start, Homepage),
    new Route('/company', phrases.for_companies, Companypage),
    new Route('/student', phrases.for_students, Companypage),
    new Route('/map', phrases.map, Companypage),
    new Route('/contact', phrases.contact, Companypage),
    new Route('/event', phrases.events, Companypage),
];


export default Routes;