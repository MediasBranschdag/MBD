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
                        'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png'
                    }
                    alt={'English flag'}
                    style={{ width: '35px', height: '23px' }}
                />
            ) : (
                <img
                    src={
                        'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/1200px-Flag_of_Sweden.svg.png'
                    }
                    alt={'Swedish flag'}
                    style={{ width: '35px', height: '23px' }}
                />
            )}
        </div>
    )
}

export default LanguageSelect
