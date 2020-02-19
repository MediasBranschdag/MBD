import BACKEND_PATH from "../backend-environment";

export class Company {
    constructor(
        public id: string,
        public name: string,
        public description_se: string,
        public description_en: string,
        public logo_path: string,
        public url: string,
    
        public isSponsor: boolean,
        public isExhibitor: boolean,
        public isMainSponsor: boolean,
    ) {}
}

export default class CompanyModel {
    static getCurrentYearExhibitors(): Promise<Array<Company>> {
        return fetch(BACKEND_PATH + 'companyMC.php?action=current-year-involvement')
        .then(r => r.json())
        .then(parsedResponsed => {
            if (parsedResponsed == false) {
                return [];
            }
            return parsedResponsed.map((company: any) => {
                return new Company(
                    company.id,
                    company.name,
                    company.description_se,
                    company.description_en,
                    company.logo,
                    company.website,
                    company.isSponsor === '1',
                    company.isExhibitor === '1',
                    company.isMainSponsor === '1'
                );
            })
        });
    }
}