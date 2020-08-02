import React, { FC, useState, useEffect } from 'react'
import GoogleLogin, {
    GoogleLoginResponse,
    GoogleLoginResponseOffline,
} from 'react-google-login'
import './dinner-admin.css'
import IntroScreen from '../../components/intro-screen/intro-screen'
import TranslationModel from '../../model/translationModel'
import phrases from '../../data/translations.json'
import DinnerPgBackground from '../../assets/backgrounds/dinner_pg_background.png'
import ContentSection, {
    ContentSectionBackground,
    ContentSectionSize,
} from '../../components/layout/content-section/content-section'
import { Button, ButtonTypes } from '../../components/button/button'
import { getAllTeamMembers } from '../../model/teamModel'
import TextSection from '../../components/text-section/text-section'
import { ContentPadding } from '../../components/content-padding'
import Footer from '../../components/footer/footer'
import CenterBackground from '../../components/center-background/center-background'
import IntroScreenTitle from '../../components/intro-screen/intro-screen-title/intro-screen-title'
import GoogleSheetsIcon from '../../assets/icons/other/google-sheets.svg'
import {
    updateGoogleSheet,
    CourseType,
    getCourseStats,
    getGuestStats,
    guestPhrases,
    getAllergies,
    getCompanyStats,
    GuestStat,
    CompanyStat,
    CourseQuanitity,
} from '../../model/dinnerPartyModel'
import CourseStats from '../../components/course-stats/course-stats'
import QuantityTable from '../../components/quantity-table/quantity-table'
import Loader from '../../components/loader/loader'

const DinnerAdmin: FC<{}> = (props) => {
    const [isLoading, setIsLoading] = useState(false)
    const [loggedIn, setLoggedIn] = useState(false)
    const [unAuthorized, setUnAuthorized] = useState(false)
    const [pgMemberEmails, setPgMemberEmails] = useState<string[]>([])
    const [guestStats, setGuestStats] = useState<GuestStat[]>([])
    const [companyStats, setCompanyStats] = useState<CompanyStat[]>([])
    const [courseStats, setCourseStats] = useState<null | {
        starters: CourseQuanitity[]
        mainCourses: CourseQuanitity[]
        desserts: CourseQuanitity[]
        drinks: CourseQuanitity[]
    }>()
    const [allergies, setAllergies] = useState<string[]>([])

    const [accessToken, setAccessToken] = useState('')

    useEffect(() => {
        setIsLoading(true)
        Promise.all([
            getAllTeamMembers().then((members) =>
                setPgMemberEmails([
                    ...members.map((member) => member.email),
                    ...['branschdag@medieteknik.com'],
                ])
            ),
            getGuestStats().then(setGuestStats),
            getCourseStats().then((courses) =>
                setCourseStats({
                    starters: courses.filter(
                        (course) => course.type === CourseType.Starter
                    ),
                    mainCourses: courses.filter(
                        (course) => course.type === CourseType.MainCourse
                    ),
                    desserts: courses.filter(
                        (course) => course.type === CourseType.Dessert
                    ),
                    drinks: courses.filter(
                        (course) =>
                            course.type === CourseType.Drink ||
                            course.type === CourseType.NonAlcoholicDrink
                    ),
                })
            ),
            getAllergies().then(setAllergies),
            getCompanyStats().then(setCompanyStats),
        ]).then(() => setIsLoading(false))
    }, [])

    const updateDinnerPartySheet = async () => {
        updateGoogleSheet(accessToken)
        window.open(
            'https://docs.google.com/spreadsheets/d/1cQxX8NimneS9OFqp-YlpAk6xHymqqrSEk215xyYt324/'
        )
    }

    function isGoogleLoginResponse(
        response: GoogleLoginResponse | GoogleLoginResponseOffline
    ): response is GoogleLoginResponse {
        return (response as GoogleLoginResponse).profileObj !== undefined
    }

    const checkLogIn = (
        response: GoogleLoginResponse | GoogleLoginResponseOffline
    ) => {
        var email = ''
        if (isGoogleLoginResponse(response)) {
            email = response.profileObj.email
            setAccessToken(response.accessToken)
        }
        if (pgMemberEmails.includes(email)) {
            setLoggedIn(true)
        } else {
            setUnAuthorized(true)
        }
    }

    const renderLogInScreen = () => {
        return (
            <IntroScreen
                backgroundImage={DinnerPgBackground}
                title={TranslationModel.translate(phrases.dinner_admin)}
                noButton
            >
                <div className='dinner-admin-log-in'>
                    <ContentSection size={ContentSectionSize.large}>
                        <GoogleLogin
                            clientId='1024658551909-qcnpdr83ismar6qg9nm5ok6irlohgks3.apps.googleusercontent.com'
                            buttonText='Login'
                            onSuccess={(res) => checkLogIn(res)}
                            onFailure={(r) => console.log(r)}
                            cookiePolicy={'single_host_origin'}
                            hostedDomain='medieteknik.com'
                            render={(renderProps) => (
                                <Button
                                    onClick={renderProps.onClick}
                                    buttonType={ButtonTypes.normalCompact}
                                >
                                    Log in
                                </Button>
                            )}
                            scope='https://www.googleapis.com/auth/spreadsheets'
                        />
                        <ContentPadding>
                            <TextSection color='#fff'>
                                {unAuthorized ? 'Du saknar behörighet.' : ''}
                            </TextSection>
                        </ContentPadding>
                    </ContentSection>
                </div>
            </IntroScreen>
        )
    }

    const renderDashboard = () => {
        return (
            <>
                <CenterBackground background={DinnerPgBackground}>
                    <IntroScreenTitle>
                        {TranslationModel.translate(phrases.dinner_admin)}
                    </IntroScreenTitle>
                    <ContentSection size={ContentSectionSize.small}>
                        <div className='dinner-admin-center'>
                            <Button
                                buttonType={ButtonTypes.icon}
                                onClick={updateDinnerPartySheet}
                            >
                                <img src={GoogleSheetsIcon} alt='' />
                            </Button>
                        </div>
                    </ContentSection>
                </CenterBackground>
                <ContentSection background={ContentSectionBackground.light}>
                    {isLoading ? (
                        <div className='dinner-admin-center'>
                            <Loader />
                        </div>
                    ) : (
                        <>
                            <QuantityTable
                                showTotal
                                header={phrases.dinner_admin.guests}
                                items={guestStats.map((stat) => {
                                    return {
                                        desc: guestPhrases[stat.type],
                                        quantity: stat.quantity,
                                    }
                                })}
                            />
                            <QuantityTable
                                header={phrases.dinner_admin.company_reps}
                                items={companyStats.map((stat) => {
                                    return {
                                        desc: {
                                            se: stat.name,
                                            en: stat.name,
                                        },
                                        quantity: stat.quantity,
                                    }
                                })}
                            />
                            <CourseStats
                                header={phrases.dinner_admin.starters}
                                courses={
                                    courseStats ? courseStats.starters : []
                                }
                            />
                            <CourseStats
                                header={phrases.dinner_admin.main_courses}
                                courses={
                                    courseStats ? courseStats.mainCourses : []
                                }
                            />
                            <CourseStats
                                header={phrases.dinner_admin.desserts}
                                courses={
                                    courseStats ? courseStats.desserts : []
                                }
                            />
                            <CourseStats
                                header={phrases.dinner_admin.drinks}
                                courses={courseStats ? courseStats.drinks : []}
                            />
                            {allergies.length > 0 ? (
                                <>
                                    <h2>
                                        {TranslationModel.translate(
                                            phrases.dinner_admin.allergies
                                        )}
                                    </h2>
                                    <div className='allergies'>
                                        {allergies.map((allergy, i) => (
                                            <div key={'allergy_' + i}>
                                                {allergy}
                                            </div>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <></>
                            )}
                        </>
                    )}
                </ContentSection>
            </>
        )
    }

    return (
        <>
            {loggedIn ? renderDashboard() : renderLogInScreen()}
            <Footer />
        </>
    )
}

export default DinnerAdmin
