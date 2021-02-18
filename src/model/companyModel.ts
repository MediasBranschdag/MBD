import BACKEND_PATH from "../backend-environment";
import { Phrase } from "./translationModel";

interface Employment {
    id: number,
    name: Phrase,
    priority: number,
}

export class Company {
    constructor(
        public id: string,
        public name: string,
        private description_se: string,
        private description_en: string,
        public logo_path: string,
        public url: string,

        public mapXPos: number,
        public mapYPos: number,
    
        public isSponsor: boolean,
        public isExhibitor: boolean,
        public isMainSponsor: boolean,
        public isLecturer: boolean,

        public employments: Array<Employment>,

        public matchesEmployments: boolean = true,
    ) {}

    public getDescription(): {se: string, en: string} {
        return {
            se: this.description_se === null || this.description_se === "" 
                ? this.description_en
                : this.description_se,
            en: this.description_en === null || this.description_en  === "" 
                ? this.description_se
                : this.description_en
        }
    }
}

export type companyAction = 'current-year-involvement' | 'last-year-involvement' | 'current-year-exhibitor'

export default class CompanyModel {
    static getCompanies(action: companyAction): Promise<Array<Company>> {
        return fetch(BACKEND_PATH + `companyMC.php?action=${action}`)
        .then(r => r.json())
        .then(parsedResponse => {
            if (parsedResponse === false) {
                return [];
            }
            return parsedResponse.map((company: any) => {
                let employments = JSON.parse(company.employmentsArray) ?? []
                employments = employments.sort(function(a: Employment, b: Employment) {return a.priority - b.priority})
                return new Company(
                    company.id,
                    company.name,
                    company.description_se,
                    company.description_en,
                    company.logo,
                    company.website,
                    company.mapPositionX,
                    company.mapPositionY,
                    company.isSponsor === '1',
                    company.isExhibitor === '1',
                    company.isMainSponsor === '1',
                    company.isLecturer === '1',
                    employments
                );
            })
        });
    }
}