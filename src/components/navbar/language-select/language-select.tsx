import React, { FC } from 'react'
import './language-select.css'

import globeIcon from '../../../assets/icons/other/globe.svg'
import TranslationModel from '../../../pages/model/translationModel'

const LanguageSelect: FC = (props) => {
    return (
        <div
            onClick={() =>
                TranslationModel.setLanguage(
                    TranslationModel.getLanguage() === 'se' ? 'en' : 'se'
                )
            }
            className='language-select'
        >
            {TranslationModel.getLanguage() === 'se' ? (
                <img
                    src={
                        'https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg'
                    }
                    alt={'English flag'}
                    style={{ width: '35px', height: '23px' }}
                />
            ) : (
                <img
                    src={
                        'https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Sweden.svg'
                    }
                    alt={'Swedish flag'}
                    style={{ width: '35px', height: '23px' }}
                />
            )}
        </div>
    )
}

export default LanguageSelect
