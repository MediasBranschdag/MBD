import BACKEND_PATH from "../backend-environment";
import TranslationModel from './translationModel'
import qhrases from '../data/translations.json'


interface TimeLeft {
    days: number,
    hours: number,
    minutes: number,
    secounds: number
}

export default class MBDDate {
    currentDate: Date = new Date();
    startDate: Date;
    isEmpty = true;

    monthNames = [
        TranslationModel.translate(qhrases.months.january),
        TranslationModel.translate(qhrases.months.february),
        TranslationModel.translate(qhrases.months.march),
        TranslationModel.translate(qhrases.months.april),
        TranslationModel.translate(qhrases.months.may),
        TranslationModel.translate(qhrases.months.june),
        TranslationModel.translate(qhrases.months.july),
        TranslationModel.translate(qhrases.months.august),
        TranslationModel.translate(qhrases.months.september),
        TranslationModel.translate(qhrases.months.october),
        TranslationModel.translate(qhrases.months.november),
        TranslationModel.translate(qhrases.months.december),
    ];

    constructor(start?: Date) {
        this.startDate = start || new Date();
        this.isEmpty = start == null;
    }

    getStartDate() {
        return this.startDate.getDate();
    }

    getStartYear() {
        return this.startDate.getFullYear();
    }

    getStartMonth() {
        return this.monthNames[this.startDate.getMonth()]
    }

    getTimeLeft(): TimeLeft {
        if (this.isEmpty) {
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                secounds: 0
            };
        }

        this.currentDate = new Date();
        var delta = Math.abs(this.startDate.getTime() - this.currentDate.getTime()) / 1000;

        var days = Math.floor(delta / 86400);
        delta -= days * 86400;

        var hours = Math.floor(delta / 3600) % 24;
        delta -= hours * 3600;

        var minutes = Math.floor(delta / 60) % 60;
        delta -= minutes * 60;

        var seconds = Math.floor(delta % 60);

        return {
            days: days,
            hours: hours,
            minutes: minutes,
            secounds: seconds
        };
    }
}

export async function getNextExhibitDate(): Promise<MBDDate> {
    const reponse = await fetch(
        BACKEND_PATH + 'getDates.php?action=next-exhibit-date'
    );

    // Extract the date from the json response
    const data = await reponse.json();

    // We need to convert the mysql date to a js compatable format
    var jsDate = data.date.replace(/-/g, '/')

    // Create new MBDDate object with the jsDate
    return new MBDDate(new Date(jsDate));
}