import React, { FC } from 'react';
import './company-card.css';
import Card from '../card/card';
import { Company } from '../../model/companyModel';

const CompanyCard: FC<{company: Company, onClick: () => void, isActive: boolean}> = (props) => {
    return (
        <div onClick={() => {props.onClick()}}>
            <Card className={props.isActive ? 'company-card-active' : ''} isClickable={true}>
                <div className={`company-card ${props.isActive ? 'active' : ''}`}>
                    <img 
                        src={"/assets/companies/" + props.company.logo_path}
                        alt={props.company.name}/>
                </div>
            </Card>
        </div>
    );
}

export default CompanyCard;
