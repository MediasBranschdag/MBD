import React from 'react';
import Homepage from '../pages/homepage';
import Companypage from '../pages/companypage';

class Route {
    path: string;
    name: string;
    component: React.ComponentType;

    constructor(path: string, name: string, component: React.ComponentType) {
        this.path = path;
        this.name = name;
        this.component = component;
    }
}

const Routes = [
    new Route('/', 'Start', Homepage),
    new Route('/company', 'Company', Companypage),
];

export default Routes;