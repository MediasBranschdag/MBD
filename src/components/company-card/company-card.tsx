import React, { FC } from 'react';
import './company-card.css';
import Card from '../card/card';
import { Company } from '../../model/companyModel';

interface CompanyCardProps {
    company: Company, 
    onClick: () => void, 
    onMouseEnter?: () => void,
    onMouseLeave?: () => void,
    isActive: boolean
}

const CompanyCard: FC<CompanyCardProps> = (props) => {
    return (
        <div 
            onMouseEnter={() => props.onMouseEnter ? props.onMouseEnter() : () => {}} 
            onMouseLeave={() => props.onMouseLeave ? props.onMouseLeave() : () => {}} 
            onClick={() => {props.onClick()}}>
            <Card className={props.isActive ? 'company-card-active' : ''} isClickable={true} light={true}>
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