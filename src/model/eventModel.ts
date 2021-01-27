import BACKEND_PATH from "../backend-environment";

export class MBDEvent {
    constructor(
        public title: string,
        public date: string,
        public link: string,
        public location: string
    ){}

    public static memberFromJSON(json: any): MBDEvent {
        // const img = json.image !== '' ? json.image : 'placeholder.png'
        return new MBDEvent(
            json.title_se,
            json.title,
            json.link,
            json.location
        );
    }
}

async function parseEventsJson(response: Response): Promise<MBDEvent[]> {
    const eventsJson = await response.json();
    let events: MBDEvent[] = [];
    eventsJson.forEach((json: any) => {
        events.push(
            MBDEvent.memberFromJSON(json)
        );
    });
    return events;
}

export async function getEvents(): Promise<MBDEvent[]> {
    const response = await fetch(
        BACKEND_PATH + 'getEvents.php'
    );
    return parseEventsJson(response);
}