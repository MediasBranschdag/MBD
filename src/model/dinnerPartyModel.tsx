import BACKEND_PATH from '../backend-environment'
import axios from 'axios'
import { Phrase } from './translationModel'
import phrases from '../data/translations.json'

export interface DinnerParty {
    year: number
    registrationStart: Date
    registrationEnd: Date
    ticketBasePrice: number
    alcoholPrice: number
    helperRebate: number
    googleSheetsId: string
}


export enum GuestType {
    Student = 'student',
    CompanyRep = 'companyRep',
    Helper = 'helper',
    PlusOne = 'plusOne',
}

export const guestPhrases = {
    [GuestType.Student]: phrases.dinner_admin.students,
    [GuestType.CompanyRep]: phrases.dinner_admin.company_reps,
    [GuestType.Helper]: phrases.dinner_admin.helpers,
    [GuestType.PlusOne]: phrases.dinner_admin.plus_ones,
}

export enum CourseType {
    Starter = 'starter',
    MainCourse = 'mainCourse',
    Dessert = 'dessert',
    NonAlcoholicDrink = 'nonAlcoholicDrink',
    Drink = 'drink',
}

export interface Course {
    id: number
    type: CourseType
    desc: Phrase
    attributes: Phrase
}

export type CourseQuanitity = Course & { quantity: number }

export interface Guest {
    id: number
    name: string
    personId: string
    email: string
    type: GuestType
    company: string
    starter: Phrase
    mainCourse: Phrase
    dessert: Phrase
    drinks: Phrase
    allergies: string
    ticketPrice: number
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

function parseGuest(guestJson: any): Course {
    return {
        ...guestJson,
        /*
        ...{
            starter: {
                se: guestJson.starter_se,
                en: guestJson.starter_en,
            },
            mainCourse: {
                se: guestJson.mainCourse_se,
                en: guestJson.mainCourse_en,
            },
            dessert: {
                se: guestJson.dessert_se,
                en: guestJson.dessert_en,
            },
            drinks: {
                se: guestJson.drinks_se,
                en: guestJson.drinks_en,
            },
        },*/
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

export async function getGuests(): Promise<Guest[]> {
    const response = await axios.get(
        BACKEND_PATH + 'getDinnerParty.php?action=get-guests'
    )
    const data = response.data.map((guest: any) => parseGuest(guest))
    return data
}

export async function getGuestStats(): Promise<any[]> {
    const response = await axios.get(
        BACKEND_PATH + 'getDinnerParty.php?action=get-guest-stats'
    )
    return response.data
}

export async function getCourseStats(): Promise<CourseQuanitity[]> {
    const response = await axios.get(
        BACKEND_PATH + 'getDinnerParty.php?action=get-course-stats'
    )
    const data = response.data.map((course: any) => {
        return { ...parseCourse(course), ...{ quantity: course.quantity } }
    })
    return data
}

export async function getCompanyStats(): Promise<{ name: string, quantity: number}> {
    const response = await axios.get(
        BACKEND_PATH + 'getDinnerParty.php?action=get-company-stats'
    )
    return response.data
}

export async function getAllergies(): Promise<string[]> {
    const response = await axios.get(
        BACKEND_PATH + 'getDinnerParty.php?action=get-allergies'
    )
    const data = response.data.map((data: { allergies: string}) => data.allergies)
    return data
}

export async function updateGoogleSheet(accessToken: string): Promise<boolean> {
    const dinnerParty = await getDinnerParty()
    const guests = await getGuests()
    const guestValues = guests.map((guest) => Object.values(guest))
    axios.put(
        `https://sheets.googleapis.com/v4/spreadsheets/${dinnerParty.googleSheetsId}/values/A2/?key=AIzaSyATibyeiHShJwmqQWhVKc6fRg_98cfcKtc&valueInputOption=RAW`,
        {
            values: guestValues,
        },
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        }
    )
    return true
}
