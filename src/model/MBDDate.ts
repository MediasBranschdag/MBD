import BACKEND_PATH from "../backend-environment";

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

    monthNames = 
        ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

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
    const data = await reponse.json();
    return new MBDDate(new Date(data.date));
}