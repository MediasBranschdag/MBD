import React, { FC, useEffect, useState } from 'react';
import CompanyModel, { Company } from '../model/companyModel';

const defaultValue: CompanyInvolment = {
  all: [],
  isExhibitor: [],
  isSponsor: [],
  isMainSponsor: []
}

export const MBDCompanyContext = React.createContext<CompanyInvolment>(defaultValue);

export interface CompanyInvolment {
  all: Array<Company>
  isExhibitor: Array<Company>,
  isSponsor: Array<Company>,
  isMainSponsor: Array<Company>
}

const MBDCompanyProvider: FC = (props) => {
  const [companies, setCompanies] = useState<CompanyInvolment>(defaultValue);

  useEffect(() => {
    CompanyModel.getCompanies('current-year-involvement').then(companies => {
        setCompanies({
          all: companies,
          isExhibitor: companies.filter(company => company.isExhibitor),
          isSponsor: companies.filter(company => company.isSponsor),
          isMainSponsor: companies.filter(company => company.isMainSponsor),
        });
    })
  }, []);
  
  return (
        <MBDCompanyContext.Provider value={companies}>
            {props.children}
        </MBDCompanyContext.Provider>
  );
}

export default MBDCompanyProvider;
