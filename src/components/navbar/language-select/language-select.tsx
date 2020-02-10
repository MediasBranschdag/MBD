import React, { FC } from 'react';
import './language-select.css';

import globeIcon from '../../../assets/icons/other/globe.svg';
import TranslationModel from '../../../model/translationModel';


const LanguageSelect: FC = (props) => {
    return (
        <div onClick={() => TranslationModel.setLanguage(TranslationModel.getLanguage() == 'se' ? 'en' : 'se')} className='language-select'>
            <img className="language-select-globe" src={globeIcon} alt="Globe"/>
            <div className="language-select-text">
                {TranslationModel.getLanguage()}
            </div>
        </div>
    );
}

export default LanguageSelect;
