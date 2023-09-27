import {setCookie, getCookie} from './cookieModel';
type TranslationLanguages = 'se' | 'en';
export type Phrase = {
    en: React.ReactNode,
    se: React.ReactNode
}

export default class TranslationModel {
    static cookieName = 'activeLanguage';

    static translate(phrase: Phrase): React.ReactNode | string {
        switch (this.getLanguage()) {
            case 'en':
                return phrase.en;
            case 'se':
                return phrase.se;
        }
    }

    static getLanguage(): TranslationLanguages {
        return getCookie(this.cookieName) as TranslationLanguages || 'se';
    }

    static setLanguage(lang: TranslationLanguages) {
        setCookie(this.cookieName, lang);
        window.location.reload();
    }
}