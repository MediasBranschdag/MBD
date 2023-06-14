import React, { FC } from 'react'
import './company-logo-list.css'
import { Company } from '../../pages/model/companyModel'

const CompanyLogoList: FC<{ companies: Array<Company> }> = (props) => {
    return (
        <div className='company-logo-list'>
            {props.companies.map((company) => {
                return (
                    <a key={company.id} href={'http://' + company.url}>
                        <div className={'company-logo-item'}>
                            <img
                                src={'/assets/companies/' + company.logo_path}
                                alt=''
                            />
                        </div>
                    </a>
                )
            })}
        </div>
    )
}

export default CompanyLogoList
