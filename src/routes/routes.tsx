import React from 'react';
import Homepage from '../pages/home-page/home-page';
import Companypage from '../pages/company-page/company-page';
import phrases from '../data/translations.json';
import { Phrase } from '../model/translationModel';
import Contactpage from '../pages/contact-page/contact-page';
import Studentpage from '../pages/student-page/student-page';
//import Dinnerpage from '../pages/dinner-page/dinnerpage';
import DinnerAdmin from '../pages/dinner-admin/dinner-admin';
import WeArePage from '../pages/we-are-page/we-are-page';
import MapPage from '../pages/map-page/map-page';
import Eventpage from '../pages/event-page/event-page';
import Temppage from '../pages/under-construction-page/temp-page';

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
    //homePage: new Route('/', phrases.start, Temppage),

    homePage: new Route('/', phrases.start, Homepage),
    whatIsPage: new Route('/medieteknik', phrases.we_are_media_technology.about_media_technology, WeArePage),
    compnayPage: new Route('/company', phrases.for_companies, Companypage),
    studentPage: new Route('/exhibitors', phrases.exhibitors, Studentpage),
    //mapPage: new Route('/map', phrases.map, MapPage),

    contactPage: new Route('/contact', phrases.contact, Contactpage),

    //dinnerPartyPage: new Route('/dinner', phrases.dinner_party, Dinnerpage),
    //dinnerAdminPage: new Route('/dinner-admin', phrases.dinner_admin, DinnerAdmin, false),
    //eventPage: new Route('/event', phrases.events, Companypage),
    //eventPage: new Route('/event', phrases.events, Eventpage),
};


export default Routes;