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
} from '../../components/layout/content-section/content-section'
import { Button, ButtonTypes } from '../../components/button/button'
import { TeamMember, getAllTeamMembers } from '../../model/teamModel'
import { stubFalse } from 'lodash'
import TextSection from '../../components/text-section/text-section'
import { ContentPadding } from '../../components/content-padding'
import Footer from '../../components/footer/footer'
import Card from '../../components/card/card'
import OfferCard from '../../components/offer-card/offer-card'

const DinnerAdmin: FC<{}> = (props) => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [unAuthorized, setUnAuthorized] = useState(false)
    const [pgMemberEmails, setPgMemberEmails] = useState<string[]>([
        'branschdag@medieteknik.com',
    ])

    /*
    useEffect(() => {
        getAllTeamMembers().then(members => setPgMemberEmails([...members.map(member => member.email), ...pgMemberEmails]));
    }, []);*/

    function isGoogleLoginResponse(
        response: GoogleLoginResponse | GoogleLoginResponseOffline
    ): response is GoogleLoginResponse {
        return (response as GoogleLoginResponse).profileObj !== undefined
    }

    const checkLogIn = (
        response: GoogleLoginResponse | GoogleLoginResponseOffline
    ) => {
        const email = isGoogleLoginResponse(response)
            ? response.profileObj.email
            : ''
        if (pgMemberEmails.includes(email)) {
            setLoggedIn(true)
        } else {
            setUnAuthorized(true)
        }
    }

    return (<>
        <IntroScreen
            backgroundImage={DinnerPgBackground}
            title={TranslationModel.translate(phrases.dinner_admin)}
            noButton
        >
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
                <ContentSection>
                    {loggedIn ? (
                        <></>
                    ) : (
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
                        />
                    )}
                    <ContentPadding>
                        <TextSection color='#fff'>
                            {unAuthorized ? 'Du saknar behörighet.' : ''}
                        </TextSection>
                <OfferCard text='Hejhej' img='' altImage=''/>
                    </ContentPadding>
                </ContentSection>
            </div>
        </IntroScreen>
        <Footer/>
    </>)
}

export default DinnerAdmin
