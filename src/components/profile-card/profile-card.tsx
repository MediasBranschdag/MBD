import React, { FC } from 'react';
import './profile-card.css';
import Card from '../card/card';


const ProfileCard: FC<{imagePath: string, name: string, roll: string}> = (props) => {
    return (
        <Card>
            <div className='profile-card'>
                <div style={{backgroundImage: `url('${props.imagePath}')`}} className="profile-card-image">
                    <div className="profile-card-info-container">
                        <div className="profile-card-info">
                            <div className="profile-card-name">
                                {props.name}
                            </div>
                            <div className="profile-card-roll">
                                {props.roll}
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        </Card>
    );
}

export default ProfileCard;
