import {setCookie, getCookie} from './cookieModel';
type TranslationLanguages = 'se' | 'en';
export type Phrase = {
    en: string,
    se: string
}

export default class TranslationModel {
    static cookieName = 'activeLanguage';

    static translate(phrase: {se: string, en: string}): string {
        switch (this.getLanguage()) {
            case 'en':
                return phrase.en;
            case 'se':
                return phrase.se;
        }
    }

    static getLanguage(): TranslationLanguages {
        return <TranslationLanguages> getCookie(this.cookieName) || 'se';
    }

    static setLanguage(lang: TranslationLanguages) {
        setCookie(this.cookieName, lang);
        window.location.reload();
    }
}