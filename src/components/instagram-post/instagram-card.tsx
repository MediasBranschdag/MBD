import React, { FC } from 'react';
import './instagram-card.css';
import Card from '../card/card';

import HeartIcon from '../../assets/icons/other/heart_white_stroke.svg';

interface InstagramCardProps {
    imageUrl: string,
    likes: number,
    linkToPost: string,
}

const InstagramCard: FC<InstagramCardProps> = (props) => {
    return (
        <a target="_blank" rel="noopener noreferrer" href={props.linkToPost}>
            <Card isClickable={true}>
                <div className='instagram-card'>
                    <div 
                        style={{backgroundImage: `url('${props.imageUrl}')`}} 
                        className='instagram-card-image'></div>
                    <div className="instagram-card-like-container">
                        <img 
                            className="instagram-card-heart" 
                            src={HeartIcon} 
                            alt="Heart Icon"/> 
                        <span className="instagram-card-like-count">
                            {props.likes}
                        </span>
                    </div>
                </div>
            </Card>
        </a>
    );
}

export default InstagramCard;
