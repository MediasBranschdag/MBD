import React, { FC } from 'react';
import './instagram-card.css';
import Card from '../card/card';

interface InstagramCardProps {
    imageUrl: string,
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
                </div>
            </Card>
        </a>
    );
}

export default InstagramCard;