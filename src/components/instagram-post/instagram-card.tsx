import React, { FC } from 'react';
import './instagram-card.css';
import Card from '../card/card';

import HeartIcon from '../../assets/icons/other/heart_white_stroke.svg';

interface InstagramCardProps {
    imageUrl: string,
    linkes: number,
    linkToPost: String,
}

const InstagramCard: FC<InstagramCardProps> = (props) => {
    return (
        <Card>
            <div className='instagram-card'>
                <div 
                    style={{backgroundImage: `url('${props.imageUrl}')`}} 
                    className='instagram-card-image'></div>
                <div className="instagram-card-like-container">
                    <img 
                        className="instagram-card-heart" 
                        src={HeartIcon} 
                        alt="Heart Icon"/> 
                    <span className="instagram-card-like-count">49</span>
                </div>
            </div>
        </Card>
    );
}

export default InstagramCard;
