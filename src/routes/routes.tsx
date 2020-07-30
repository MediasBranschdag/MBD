import React from 'react';
import Homepage from '../pages/home-page/home-page';
import Companypage from '../pages/company-page/company-page';
import phrases from '../data/translations.json';
import { Phrase } from '../model/translationModel';
import Contactpage from '../pages/contact-page/contact-page';
import Studentpage from '../pages/student-page/student-page';
import Dinnerpage from '../pages/dinner-page/dinnerpage';
import DinnerAdmin from '../pages/dinner-admin/dinner-admin';
//import MapPage from '../pages/map-page/map-page';

class Route {
    path: string;
    name: Phrase;
    component: React.ComponentType;
    inMenu: boolean;

    constructor(path: string, name: Phrase, component: React.ComponentType, inMenu?: boolean) {
        this.path = path;
        this.name = name;
        this.component = component;
        this.inMenu = inMenu ?? true;
    }
}

const Routes = {
    homePage: new Route('/', phrases.start, Homepage),
    compnayPage: new Route('/company', phrases.for_companies, Companypage),
    studentPage: new Route('/student', phrases.for_students, Studentpage),
    //mapPage: new Route('/map', phrases.map, MapPage),
    dinnerPartyPage: new Route('/dinner', phrases.dinner_party, Dinnerpage),
    contactPage: new Route('/contact', phrases.contact, Contactpage),
    dinnerAdminPage: new Route('/dinner-admin', phrases.dinner_admin, DinnerAdmin, false),
    //eventPage: new Route('/event', phrases.events, Companypage),
};


export default Routes;