import React, { useState, useEffect } from 'react'
import './dinnerpage.css'

import TranslationModel from '../../model/translationModel'
import phrases from '../../data/translations.json'
import Footer from '../../components/footer/footer'
import IntroScreen from '../../components/intro-screen/intro-screen'
import IntroScreenButtons from '../../components/intro-screen/intro-screen-buttons/intro-screen-buttons'
import ContentSection from '../../components/layout/content-section/content-section'
import TextSection, {
    TextSectionAlignment,
} from '../../components/text-section/text-section'
import CenterBackground from '../../components/center-background/center-background'
import { Button, ButtonTypes } from '../../components/button/button'

import ChampagneGlassIcon from '../../assets/icons/other/champagne-glass.svg'
import TicketIcon from '../../assets/icons/other/tickets_black.svg'
import BuntingIcon from '../../assets/icons/other/bunting.svg'
import FaceBookIcon from '../../assets/icons/other/facebook.svg'

import DinnerPgBackground from '../../assets/backgrounds/dinner_pg_background.png'
import AfterpartyBackground from '../../assets/backgrounds/afterparty.jpg'
import SectionTitle from '../../components/section-title/section-title'
import GuestForm, { renderClosedGuestForm } from './guest-form/guest-form'
import { DinnerParty, getDinnerParty } from '../../model/dinnerPartyModel'
import Loader from '../../components/loader/loader'
import CenterContent from '../../components/center-content/center-content'

const Dinnerpage = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [dinnerParty, setDinnerParty] = useState<DinnerParty | null>()

    useEffect(() => {
        window.scrollTo(0, 0)
        setIsLoading(true)
        getDinnerParty()
            .then((res) => {
                setDinnerParty(res)
                setIsLoading(false)
            })
            .catch(() => setIsLoading(false))
    }, [])

    return (
        <div className='dinnerpage'>
            <IntroScreen
                backgroundImage={DinnerPgBackground}
                title={TranslationModel.translate(phrases.dinner_party)}
            >
                <IntroScreenButtons
                    buttons={[
                        {
                            title: TranslationModel.translate(
                                phrases.dinner_page.about
                            ),
                            iconPath: ChampagneGlassIcon,
                            scrollTargetID: 'dinnerpage-about',
                        },
                        {
                            title: TranslationModel.translate(
                                phrases.dinner_page.registration
                            ),
                            iconPath: TicketIcon,
                            scrollTargetID: 'dinnerpage-registration',
                        },
                        {
                            title: TranslationModel.translate(
                                phrases.dinner_page.afterparty
                            ),
                            iconPath: BuntingIcon,
                            scrollTargetID: 'dinnerpage-afterparty',
                        },
                    ]}
                />
            </IntroScreen>
            <div id='dinnerpage-about'>
                <ContentSection style={{ padding: '50px 50px 0 50px' }}>
                    <SectionTitle>
                        {TranslationModel.translate(phrases.dinner_page.about)}
                    </SectionTitle>
                    <TextSection align={TextSectionAlignment.center}>
                        {TranslationModel.translate({
                            se: (
                                <span>
                                    Medias Branschdag avslutas på kvällen med en
                                    sittning där företag och studenter får
                                    chansen att utveckla samtal om framtiden mer
                                    på djupet. Detta är en utmärkt möjlighet för
                                    företag att ta del av Medietekniks många
                                    traditioner och lära känna potentiella
                                    framtida kollegor på ett mer avslappnat
                                    plan.
                                    <br />
                                    <br />
                                    Sittningen kommer även vara ett ypperligt
                                    tillfälle för studenter att få marknadsföra
                                    sig själva som civilingenjörer. Vi ser fram
                                    emot att få anordna en spektakulär kväll och
                                    vi hoppas att ni är lika upprymda som vi är!
                                    <br />
                                    <br />
                                    Sittningen börjar 18:00 på Syster O Bror på
                                    KTH Campus. Mer detaljerad information
                                    kommer upp allt eftersom på Facebook.
                                </span>
                            ),
                            en: (
                                <span>
                                    At the end of Medias Branschdag a dinner
                                    party is held where companies and students
                                    have the chance to connect on a deeper
                                    level. This is a great oppurtunity for
                                    companies to take part in the many
                                    traditions of the Media Technology programme
                                    and get to know their potential future peers
                                    in a more relaxed setting.
                                    <br />
                                    <br />
                                    The dinner party is also a perfect way for
                                    students to promote themselves as future
                                    engineers. We are really excited to arrange
                                    this spectacular evening and hope you are
                                    just as exhilarated as us!
                                    <br />
                                    <br />
                                    The dinner party will start at 18:00 at
                                    Syster O Bror on KTH Campus. More details
                                    can be found at the Facebook event leading
                                    up to the event.
                                </span>
                            ),
                        })}
                        {dinnerParty ? (
                            dinnerParty.dinnerEventLink ? (
                                <div className='link-button-container'>
                                    <a
                                        href={dinnerParty.dinnerEventLink}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <Button
                                            buttonType={ButtonTypes.inlineIcon}
                                            iconSrc={FaceBookIcon}
                                        >
                                            {TranslationModel.translate(
                                                phrases.dinner_page
                                                    .facebook_event
                                            )}
                                        </Button>
                                    </a>
                                </div>
                            ) : (
                                <></>
                            )
                        ) : (
                            <></>
                        )}
                    </TextSection>
                </ContentSection>
            </div>
            <div id='dinnerpage-registration'>
                <ContentSection style={{ paddingTop: '25px' }}>
                    <SectionTitle>
                        {TranslationModel.translate(
                            phrases.dinner_page.registration
                        )}
                    </SectionTitle>
                    {isLoading ? (
                        <CenterContent>
                            <Loader />
                        </CenterContent>
                    ) : dinnerParty ? (
                        <GuestForm {...dinnerParty} />
                    ) : (
                        <TextSection align={TextSectionAlignment.center}>
                            {renderClosedGuestForm()}
                        </TextSection>
                    )}
                </ContentSection>
            </div>
            <div id='dinnerpage-afterparty'>
                <CenterBackground background={AfterpartyBackground}>
                    <ContentSection>
                        <SectionTitle>
                            {TranslationModel.translate(
                                phrases.dinner_page.afterparty
                            )}
                        </SectionTitle>
                        <TextSection align={TextSectionAlignment.center}>
                            {TranslationModel.translate({
                                se: (
                                    <span>
                                        Efter sittningen hålls ett efterkör i
                                        META där alla är välkomna. Oavsett om du
                                        är med på sittningen eller inte så är
                                        det ett perfekt tillfälle att avsluta
                                        kvällen med oss! Medias Klubbmästeri
                                        bjuder som vanligt in till en skön pub
                                        som i samband med branschdagen blir lite
                                        extra festlig.
                                        <br />
                                        <br />
                                        Kom och testa en drinkspecial, kolla in
                                        dekorationerna, eller njut av livemusik
                                        (håll utkik på Facebook för mer
                                        info...). Givetvis är det gratis
                                        inträde.
                                        <br />
                                        <br />
                                        Puben börjar som vanligt 17:15 i META då
                                        vi bjuder in till fördrink. Baren är
                                        fortsatt öppen under sittningen och
                                        efteråt kommer gästerna tillbaka för ett
                                        ordentligt efterkör. Mer detaljerad
                                        information kommer upp allt eftersom på
                                        vår Facebook-sida.
                                    </span>
                                ),
                                en: (
                                    <span>
                                        The afterparty is held in META and
                                        everyone is welcome. No matter if you're
                                        going to the dinner party or not you
                                        have the chance to end your night
                                        partying with us! Medias Klubbmästeri
                                        (MKM) is as usual in charge of arranging
                                        this pub that is made a little bit more
                                        special by Medias Branschdag.
                                        <br />
                                        <br />
                                        Come to try our drink specials, check
                                        out the decorations, or enjoy live music
                                        (keep on the lookout for more info on
                                        our Facebook...). Entrance is free of
                                        charge.
                                        <br />
                                        <br />
                                        The pub will begin as usual 17:15 in
                                        META were dinner party guests can enjoy
                                        aperitifs. The bar will be open during
                                        the dinner party and afterwards the
                                        guests will reconvene for the real
                                        afterparty. More details can be found at
                                        our Facebook-page closer to the event.
                                    </span>
                                ),
                            })}

                            {dinnerParty ? (
                                dinnerParty.afterpartyEventLink ? (
                                    <div className='link-button-container'>
                                        <a
                                            href={dinnerParty.afterpartyEventLink}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            <Button
                                                buttonType={
                                                    ButtonTypes.inlineIcon
                                                }
                                                iconSrc={FaceBookIcon}
                                            >
                                                {TranslationModel.translate(
                                                    phrases.dinner_page
                                                        .facebook_event
                                                )}
                                            </Button>
                                        </a>
                                    </div>
                                ) : (
                                    <></>
                                )
                            ) : (
                                <></>
                            )}
                        </TextSection>
                    </ContentSection>
                </CenterBackground>
            </div>
            <Footer />
        </div>
    )
}

export default Dinnerpage
