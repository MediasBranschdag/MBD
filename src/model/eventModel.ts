import BACKEND_PATH from "../backend-environment";
import { Phrase } from "./translationModel";



export class Event {
    constructor(
        public id: number,
        public title: Phrase,
        public description: Phrase,
        public date: Date,
        public time: string,
        public location: string,
        public fbLink: string,
        public extLink: string,
        public image: string,
        public show: boolean,
    ){}

    public static eventFromJson(json: any): Event {
        const img = json.image !== '' ? json.image : 'placeholder.jpg'
        return new Event(
            json.ID,
            {
                se: json.title_se,
                en: json.title_en !== '' ? json.title_en : json.title_se
            },
            {
                se: json.description_se,
                en: json.description_en !== '' ? json.description_en : json.description_se
            },
            json.date,
            json.time,
            json.location,
            json.fb_link,
            json.ticket_link,
            '/assets/events/' + img,
            json.show,
        );
    }
}

async function parseEventsJson(response: Response): Promise<Event[]> {
    const eventJson = await response.json();
    let events: Event[] = [];
    eventJson.forEach((json: any) => {
        events.push(
            Event.eventFromJson(json)
        );
    });
    return events;
}

export async function getEvents(): Promise<Event[]> {
    const response = await fetch(
        BACKEND_PATH + 'getEvents.php?action=all-events'
    );
    return parseEventsJson(response);
}