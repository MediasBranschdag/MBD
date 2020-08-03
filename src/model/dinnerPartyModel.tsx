import BACKEND_PATH from '../backend-environment'
import axios from 'axios'
import { Phrase } from './translationModel'
import phrases from '../data/translations.json'
import credentials from '../credentials.json'

export interface DinnerParty {
    year: number
    registrationStart: Date
    registrationEnd: Date
    ticketBasePrice: number
    alcoholPrice: number
    helperDiscount: number
    googleSheetsId: string
    dinnerEventLink: string
    afterpartyEventLink: string
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
    date: Date
    name: string
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

export interface GuestStat {
    type: GuestType
    quantity: number
}

export interface CompanyStat {
    name: string
    quantity: number
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
            helperDiscount: parseInt(
                (dinnerParty.helperDiscount as unknown) as string
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

function parseGuest(guestJson: any): Guest {
    return {
        date: guestJson.date,
        name: guestJson.name,
        email: guestJson.email,
        type: guestJson.type,
        company: guestJson.company,
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
        allergies: guestJson.allergies,
        ticketPrice: guestJson.ticketPrice,
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

export async function getGuests(accessToken: string): Promise<Guest[]> {
    const response = await axios.get(
        BACKEND_PATH +
            'getDinnerParty.php?action=get-guests&token=' +
            accessToken
    )
    const data = response.data
        ? response.data.map((guest: any) => parseGuest(guest))
        : []
    return data
}

export async function getGuestStats(): Promise<GuestStat[]> {
    const response = await axios.get(
        BACKEND_PATH + 'getDinnerParty.php?action=get-guest-stats'
    )
    return response.data ? response.data : []
}

export async function getCourseStats(): Promise<CourseQuanitity[]> {
    const response = await axios.get(
        BACKEND_PATH + 'getDinnerParty.php?action=get-course-stats'
    )
    const data = response.data
        ? response.data.map((course: any) => {
              return {
                  ...parseCourse(course),
                  ...{ quantity: course.quantity },
              }
          })
        : []
    return data
}

export async function getCompanyStats(): Promise<CompanyStat[]> {
    const response = await axios.get(
        BACKEND_PATH + 'getDinnerParty.php?action=get-company-stats'
    )
    return response.data ? response.data : []
}

export async function getAllergies(): Promise<string[]> {
    const response = await axios.get(
        BACKEND_PATH + 'getDinnerParty.php?action=get-allergies'
    )
    const data = response.data
        ? response.data.map((data: { allergies: string }) => data.allergies)
        : []
    return data
}

export async function updateDinnerParty(
    dinnerParty: DinnerParty,
    accessToken: string
): Promise<boolean> {
    let formData = new FormData()
    Object.entries(dinnerParty).forEach((item) => {
        formData.append(
            item[0],
            item[1] instanceof Date ? item[1].toLocaleDateString() : item[1]
        )
    })
    axios
        .post(
            BACKEND_PATH +
                'getDinnerParty.php?action=update-dinner-party&token=' +
                accessToken,
            formData
        )
        .catch((err) => {
            return false
        })
    return true
}

export async function updateGoogleSheet(accessToken: string): Promise<string> {
    const dinnerParty = await getDinnerParty()
    const guests = await getGuests(accessToken)

    const googleSheetsEndpoint = `https://sheets.googleapis.com/v4/spreadsheets/${dinnerParty.googleSheetsId}/values`
    const keyParameter = `?key=${credentials.google.apiKey}`

    const guestValues =
        guests.length > 0
            ? [
                  ...[Object.keys(guests[0])],
                  ...guests
                      .map((guest) => {
                          return {
                              ...guest,
                              ...{
                                  type: guestPhrases[guest.type].se,
                                  starter: guest.starter.se,
                                  mainCourse: guest.mainCourse.se,
                                  dessert: guest.dessert.se,
                                  drinks: guest.drinks.se,
                              },
                          }
                      })
                      .map((guest) => Object.values(guest)),
              ]
            : guests
    axios
        .post(
            `${googleSheetsEndpoint}/A:Z:clear/${keyParameter}`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        )
        .then(() => {
            axios.put(
                `${googleSheetsEndpoint}/A1/${keyParameter}&valueInputOption=RAW`,
                {
                    values: guestValues,
                },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            )
        })
    return `https://docs.google.com/spreadsheets/d/${dinnerParty.googleSheetsId}/`
}
