import React, { FC, useEffect, useState } from 'react';
import phrases from '../data/translations.json';
import TranslationModel from '../model/translationModel';

const LoadingText: FC = () => {

    const [loadingDots, setLoadingDots] = useState(0);

    useEffect(() => {
        let timeout = setTimeout(() => {
            setLoadingDots((loadingDots + 1) % 5);
        }, 250);
        return () => {
            clearTimeout(timeout);
        }
    });

    return (
        <span>
            {TranslationModel.translate(phrases.loading)}
            {
                Array(loadingDots).fill(0).map(() => {
                    return '.';
                })
            }
        </span>
    )
}

export default LoadingText;