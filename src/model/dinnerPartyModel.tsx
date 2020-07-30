import BACKEND_PATH from '../backend-environment'
import axios from 'axios'
import { Phrase } from './translationModel'

export interface DinnerParty {
    year: number
    registrationStart: Date
    registrationEnd: Date
    ticketBasePrice: number
    alcoholPrice: number
    helperRebate: number
}

export enum CourseType {
    Starter = 'starter',
    MainCourse = 'mainCourse',
    Dessert = 'dessert',
    NonAlcoholicDrink = 'nonAlcoholicDrink',
    Drink = 'drink',
}

export interface Course {
    id: number,
    type: CourseType
    desc: Phrase
    attributes: Phrase
}

function parseDinnerParty(dinnerParty: DinnerParty): DinnerParty {
    return {
        ...dinnerParty,
        ...{
            registrationStart: new Date(dinnerParty.registrationStart),
            registrationEnd: new Date(dinnerParty.registrationEnd),
            ticketBasePrice: parseInt(
                (dinnerParty.ticketBasePrice as unknown) as string
            ),
            alcoholPrice: parseInt(
                (dinnerParty.alcoholPrice as unknown) as string
            ),
            helperRebate: parseInt(
                (dinnerParty.helperRebate as unknown) as string
            ),
        },
    }
}

function parseCourse(courseJson: any): Course {
    return {
        id: courseJson.id,
        type: courseJson.type,
        desc: {
            se: courseJson.desc_se,
            en: courseJson.desc_en,
        },
        attributes: {
            se: courseJson.attributes_se,
            en: courseJson.attributes_en,
        },
    }
}

export async function getDinnerParty(): Promise<DinnerParty> {
    const response = await axios.get(BACKEND_PATH + 'getDinnerParty.php')
    return parseDinnerParty(response.data)
}

export async function getCourses(): Promise<Course[]> {
    const response = await axios.get(
        BACKEND_PATH + 'getDinnerParty.php?action=get-courses'
    )
    const data = response.data.map((course: any) => parseCourse(course))
    return data
}
