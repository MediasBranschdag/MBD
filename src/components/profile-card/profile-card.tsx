import React, { FC } from 'react';
import './profile-card.css';
import Card from '../card/card';

import MailIcon from '../../assets/icons/other/mail-white-material.svg';
import LinkedinIcon from '../../assets/icons/other/linkedin.png';

interface ProfileCardProps {
    imagePath: string,
    name: string,
    role: React.ReactNode,
    email?: string,
    linkedinLink?: string
}

const ProfileCard: FC<ProfileCardProps> = (props) => {
    return (
        <Card>
            <div className='profile-card'>
                <div style={{backgroundImage: `url('${props.imagePath}')`}} className='profile-card-image'>
                    <div className='profile-card-info-container'>
                        <div className='profile-card-info'>
                            <div className='profile-card-name'>
                                {props.name}
                            </div>
                            <div className='profile-card-role'>
                                {props.role}
                            </div>
                            <div className='profile-info-link-container'>
                                {
                                    props.email
                                    ? <a 
                                    className='profile-info-link mail-link' 
                                    href={`mailto:${props.email}`}>
                                        <img src={MailIcon} alt=''/>
                                    </a>
                                    : <></>
                                }
                                {
                                    props.linkedinLink
                                    ? <a 
                                        className='profile-info-link linkedin-link' 
                                        href={`${props.linkedinLink}`}>
                                        <img src={LinkedinIcon} alt=''/>
                                    </a>
                                    : <></>
                                }
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        </Card>
    );
}

export default ProfileCard;
