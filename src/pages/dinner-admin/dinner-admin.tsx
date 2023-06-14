import React, { FC, useState, useEffect } from 'react'
import GoogleLogin, {
    GoogleLoginResponse,
    GoogleLoginResponseOffline,
} from 'react-google-login'
import './dinner-admin.css'
import IntroScreen from '../../components/intro-screen/intro-screen'
import TranslationModel, { Phrase } from '../model/translationModel'
import phrases from '../../data/translations.json'
import DinnerPgBackground from '../../assets/backgrounds/dinner_pg_background.png'
import ContentSection, {
    ContentSectionBackground,
    ContentSectionSize,
} from '../../components/layout/content-section/content-section'
import { Button, ButtonTypes } from '../../components/button/button'
import { getAllTeamMembers } from '../model/teamModel'
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
    getAllergies,
    getCompanyStats,
    GuestStat,
    CompanyStat,
    CourseQuanitity,
    DinnerParty,
    getDinnerParty,
    updateDinnerParty,
    guestPhrasesPlural,
} from '../model/dinnerPartyModel'
import CourseStats from '../../components/course-stats/course-stats'
import QuantityTable from '../../components/quantity-table/quantity-table'
import Loader from '../../components/loader/loader'
import { InputInfo } from '../../components/input-info/input-info'
import SectionTitle from '../../components/section-title/section-title'
import CenterContent from '../../components/center-content/center-content'

const DinnerAdmin: FC<{}> = (props) => {
    const [isLoading, setIsLoading] = useState(false)
    const [isUpdating, setIsUpdating] = useState(false)

    const [loggedIn, setLoggedIn] = useState(false)
    const [unAuthorized, setUnAuthorized] = useState(false)
    const [updateMsg, setUpdateMsg] = useState<Phrase | null>()

    const [dinnerParty, setDinnerParty] = useState<DinnerParty | null>()
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
            getDinnerParty().then(setDinnerParty),
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
        window.open(await updateGoogleSheet(accessToken))
    }

    const updateDinner = () => {
        setIsUpdating(true)
        if (dinnerParty) {
            updateDinnerParty(dinnerParty, accessToken)
                .then(() => {
                    setIsUpdating(false)
                    setUpdateMsg(phrases.dinner_admin.saved)
                })
                .catch(() => {
                    setIsUpdating(false)
                    setUpdateMsg(phrases.dinner_page.guest_form.error)
                })
        }
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
                            onFailure={() => setUnAuthorized(true)}
                            cookiePolicy={'single_host_origin'}
                            hostedDomain='medieteknik.com'
                            render={(renderProps) => (
                                <Button
                                    onClick={renderProps.onClick}
                                    buttonType={ButtonTypes.normalCompact}
                                >
                                    {TranslationModel.translate(
                                        phrases.dinner_admin.log_in
                                    )}
                                </Button>
                            )}
                            scope='https://www.googleapis.com/auth/spreadsheets'
                        />
                        <ContentPadding>
                            <TextSection color='#fff'>
                                {unAuthorized
                                    ? TranslationModel.translate(
                                          phrases.dinner_admin.unauthorized
                                      )
                                    : ''}
                            </TextSection>
                        </ContentPadding>
                    </ContentSection>
                </div>
            </IntroScreen>
        )
    }

    const renderAdmin = () => {
        return dinnerParty ? (
            <>
                <SectionTitle>
                    {TranslationModel.translate(phrases.dinner_admin.manage)}
                </SectionTitle>
                <InputInfo
                    placeholderHeader
                    noCard
                    inputType='date'
                    name='bookingStart'
                    max={dinnerParty?.bookingEnd.toLocaleDateString() ?? null}
                    onInput={(value) =>
                        setDinnerParty(
                            dinnerParty
                                ? {
                                      ...dinnerParty,
                                      ...{
                                          bookingStart: new Date(value),
                                      },
                                  }
                                : null
                        )
                    }
                    placeholder={TranslationModel.translate(
                        phrases.dinner_admin.booking_start
                    )}
                    defaultValue={
                        dinnerParty?.bookingStart
                            ? dinnerParty?.bookingStart.toLocaleDateString()
                            : undefined
                    }
                />
                <br />
                <InputInfo
                    placeholderHeader
                    noCard
                    inputType='date'
                    name='bookingEnd'
                    min={dinnerParty?.bookingStart.toLocaleDateString() ?? null}
                    onInput={(value) =>
                        setDinnerParty(
                            dinnerParty
                                ? {
                                      ...dinnerParty,
                                      ...{
                                          bookingEnd: new Date(value),
                                      },
                                  }
                                : null
                        )
                    }
                    placeholder={TranslationModel.translate(
                        phrases.dinner_admin.booking_end
                    )}
                    defaultValue={
                        dinnerParty?.bookingEnd
                            ? dinnerParty?.bookingEnd.toLocaleDateString()
                            : undefined
                    }
                />
                <br />
                <InputInfo
                    placeholderHeader
                    noCard
                    inputType='number'
                    name='ticketBasePrice'
                    onInput={(value) =>
                        setDinnerParty(
                            dinnerParty
                                ? {
                                      ...dinnerParty,
                                      ...{
                                          ticketBasePrice: parseInt(value),
                                      },
                                  }
                                : null
                        )
                    }
                    placeholder={TranslationModel.translate(
                        phrases.dinner_admin.ticket_base_price
                    )}
                    defaultValue={
                        isNaN(dinnerParty?.ticketBasePrice!)
                            ? 0
                            : dinnerParty?.ticketBasePrice
                    }
                />
                <br />
                <InputInfo
                    placeholderHeader
                    noCard
                    inputType='number'
                    name='alcoholPrice'
                    onInput={(value) =>
                        setDinnerParty(
                            dinnerParty
                                ? {
                                      ...dinnerParty,
                                      ...{
                                          alcoholPrice: parseInt(value),
                                      },
                                  }
                                : null
                        )
                    }
                    placeholder={TranslationModel.translate(
                        phrases.dinner_admin.alcohol_price
                    )}
                    defaultValue={
                        isNaN(dinnerParty?.alcoholPrice!)
                            ? 0
                            : dinnerParty?.alcoholPrice
                    }
                />
                <br />
                <InputInfo
                    placeholderHeader
                    noCard
                    inputType='number'
                    name='helperDiscount'
                    onInput={(value) =>
                        setDinnerParty(
                            dinnerParty
                                ? {
                                      ...dinnerParty,
                                      ...{
                                          helperDiscount: parseInt(value),
                                      },
                                  }
                                : null
                        )
                    }
                    placeholder={TranslationModel.translate(
                        phrases.dinner_admin.helper_discount
                    )}
                    defaultValue={
                        isNaN(dinnerParty?.helperDiscount!)
                            ? 0
                            : dinnerParty?.helperDiscount
                    }
                />
                <br />
                <InputInfo
                    placeholderHeader
                    noCard
                    inputType='text'
                    name='googleSheetsId'
                    onInput={(value) =>
                        setDinnerParty(
                            dinnerParty
                                ? {
                                      ...dinnerParty,
                                      ...{ googleSheetsId: value },
                                  }
                                : null
                        )
                    }
                    placeholder={TranslationModel.translate(
                        phrases.dinner_admin.google_sheets_id
                    )}
                    defaultValue={dinnerParty?.googleSheetsId!}
                />
                <br />
                <InputInfo
                    placeholderHeader
                    noCard
                    inputType='text'
                    name='dinnerEventLink'
                    onInput={(value) =>
                        setDinnerParty(
                            dinnerParty
                                ? {
                                      ...dinnerParty,
                                      ...{ dinnerEventLink: value },
                                  }
                                : null
                        )
                    }
                    placeholder={TranslationModel.translate(
                        phrases.dinner_admin.dinner_fb_link
                    )}
                    defaultValue={dinnerParty?.dinnerEventLink!}
                />
                <br />
                <InputInfo
                    placeholderHeader
                    noCard
                    inputType='text'
                    name='afterpartyEventLink'
                    onInput={(value) =>
                        setDinnerParty(
                            dinnerParty
                                ? {
                                      ...dinnerParty,
                                      ...{
                                          afterpartyEventLink: value,
                                      },
                                  }
                                : null
                        )
                    }
                    placeholder={TranslationModel.translate(
                        phrases.dinner_admin.afterparty_fb_link
                    )}
                    defaultValue={dinnerParty?.afterpartyEventLink!}
                />
                <br />
                <ContentPadding>
                    <CenterContent>
                        <p>
                            {!isUpdating && updateMsg ? (
                                TranslationModel.translate(updateMsg)
                            ) : (
                                <></>
                            )}
                        </p>
                    </CenterContent>
                    <CenterContent>
                        {isUpdating ? (
                            <Loader />
                        ) : (
                            <>
                                <Button onClick={updateDinner}>
                                    {TranslationModel.translate(
                                        phrases.dinner_admin.save
                                    )}
                                </Button>
                            </>
                        )}
                    </CenterContent>
                </ContentPadding>
            </>
        ) : (
            <></>
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
                            <SectionTitle>
                                {TranslationModel.translate(
                                    phrases.dinner_admin.statistics
                                )}
                            </SectionTitle>
                            <QuantityTable
                                showTotal
                                header={phrases.dinner_admin.guests}
                                items={guestStats.map((stat) => {
                                    return {
                                        desc:
                                            guestPhrasesPlural[stat.type] ??
                                            phrases.dinner_page.guest_form
                                                .other,
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
                            {renderAdmin()}
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
