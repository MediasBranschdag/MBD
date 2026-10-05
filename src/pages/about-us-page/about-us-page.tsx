import React, { FC, useEffect, useState } from 'react'
import './about-us-page.css'

import TranslationModel from '../model/translationModel'
import phrases from '../../data/translations.json'
import ContentSection from '../../components/layout/content-section/content-section'
import { TeamMember, getAllTeamMembers } from '../model/teamModel'
import ProfileCard from '../../components/profile-card/profile-card'
import TextSection from '../../components/text-section/text-section'
import IntroScreenTitle from '../../components/intro-screen/intro-screen-title/intro-screen-title'

import SectionTitle, {
    TitleSectionAlignment,
} from '../../components/section-title/section-title'

import masterBackground from '../../assets/master_background.png'
import teamImage from '../../assets/backgrounds/team2026.jpg'
import teamList from '../contact-page/team-contact.json'

const AboutUsPage: FC = () => {
    const [pgLeaders, setPgLeaders] = useState<TeamMember[]>([])
        const [pgMarketing, setPgMarketing] = useState<TeamMember[]>([])
        const [pgSales, setPgSales] = useState<TeamMember[]>([])
        const [pgEvent, setPgEvent] = useState<TeamMember[]>([])
    
    
        const [pgMembers, setAllMembers] = useState<TeamMember[][]>([]);

    useEffect(() => {
        window.scrollTo(0, 0)
        getAllTeamMembers().then((team) => {
                    setPgLeaders(team.filter((member) => member.priority === 1));
                    setPgSales(team.filter(
                                        (member) =>
                                            member.priority === 2 ||
                                            member.priority === 3
                                    ));
                    setPgEvent(team.filter((member) => member.priority === 4));
                    setPgMarketing(team.filter((member) => member.priority === 5));

                    // Big list of lists
                    setAllMembers([pgLeaders, pgSales, pgEvent, pgMarketing]);
                });
    }, [])

    const groups: Record<string, TeamMember[]> = {
            leaders: pgLeaders,
            marketing: pgMarketing,
            sales: pgSales,
            event: pgEvent
        };

    return (
        <div>
            <IntroScreenTitle noGradient={true}>
                Näringslivsgruppen
            </IntroScreenTitle>

            <ContentSection>
                <div className='nlg-content'>
                    <img src={teamImage} alt='' className='team-img' />
                    <TextSection>
                        {TranslationModel.translate({
                            se: (
                                <span>
                                    Vi är Näringslivsgruppen (NLG) inom
                                    Sektionen för Medieteknik på KTH, länken
                                    mellan studenterna och arbetslivet.
                                    Medieteknik är en kreativ
                                    civilingenjörsutbildning som formar nästa
                                    generations utvecklare, UX-designers,
                                    projektledare och spelutvecklare.
                                    Utbildningen kombinerar klassiska
                                    ingenjörsämnen med programmering,
                                    interaktionsdesign, datorgrafik,
                                    visualisering, maskininlärning och mycket
                                    mer.
                                    <br />
                                    <br />
                                    NLG arrangerar flera olika typer av
                                    aktiviteter för sektionen, allt från vår
                                    arbetsmarknadsmässa Medias Branschdag (MBD)
                                    och inspirerande lunchföreläsningar till
                                    after works, hackathons och företagspubar.
                                    <br />
                                    <br />
                                    För företag:
                                    <br />
                                    Oavsett om ni vill delta på MBD, hålla en
                                    föreläsning eller testa ett nytt koncept
                                    tillsammans med oss, hjälper vi gärna till
                                    att skapa ett upplägg som passar just er. Vi
                                    erbjuder även annonsering på våra
                                    plattformar, ett engagerande och effektivt
                                    sätt att synas inför framtidens
                                    tech-talanger.
                                    <br />
                                    <br />
                                    För studenter:
                                    <br />
                                    Våra event är öppna mötesplatser där du kan
                                    träffa företag, bygga värdefulla kontakter
                                    och få en tydligare bild av möjligheterna
                                    efter examen.
                                    <br />
                                    <br />
                                    <b>
                                        Låter ett samarbete intressant? Hör av
                                        er så fixar vi något som blir både
                                        givande och roligt, hoppas vi ses!
                                    </b>
                                </span>
                            ),

                            en: (
                                <span>
                                    We are NLG (the Business Relations Group)
                                    within the Media Technology Chapter at KTH,
                                    the link between students and working life.
                                    Media Technology is a creative engineering
                                    programme that shapes the next generation of
                                    developers, UX designers, project managers,
                                    and game developers. The programme combines
                                    traditional engineering subjects with
                                    programming, interaction design, computer
                                    graphics, visualization, machine learning,
                                    and much more.
                                    <br />
                                    <br />
                                    NLG organizes a wide range of activities for
                                    the chapter, from our career fair Medias
                                    Branschdag (MBD) and inspiring lunch
                                    lectures to after works, hackathons, and
                                    company pub events. <br />
                                    <br />
                                    For Companies:
                                    <br />
                                    Whether you want to participate in MBD, give
                                    a guest lecture, or explore a new concept
                                    together with us, we are happy to help
                                    create an arrangement that suits your needs.
                                    We also offer advertising on our platforms –
                                    an engaging and effective way to reach the
                                    tech talents of tomorrow. <br />
                                    <br />
                                    For Students:
                                    <br />
                                    Our events serve as open meeting points
                                    where you can meet companies, build valuable
                                    connections, and gain a clearer picture of
                                    your opportunities after graduation.
                                    <br />
                                    <br />
                                    <b>
                                        Interested in collaborating? Get in
                                        touch and we’ll put together something
                                        rewarding and fun. Hope to see you soon!
                                    </b>
                                </span>
                            ),
                        })}
                    </TextSection>
                </div>
            </ContentSection>

            {/* List of every memeber in PG */}
            <ContentSection>

                {
                    teamList.map((group)=>{
                        const members = groups[group.member_key] ?? [];

                        const three_columns = members.length % 3 === 0;

                        return (
                            <div className={
                                   group.member_key !== "leaders" ? 'aboutpage-teams' : ''
                                } 
                                key={group.member_key}
                            >
                                <SectionTitle align={TitleSectionAlignment.center} key={group.member_key}>
                                    {TranslationModel.translate(group.name)}
                                </SectionTitle>
                                <div className={'aboutpage-pg-members ' + 
                                (three_columns? 'three-columns' : 'two-columns')
                                }>
                                    {members
                                        .map((member) => (
                                            <ProfileCard
                                                key={member.name}
                                                imagePath={member.imagePath}
                                                email={member.email}
                                                linkedinLink={member.linkedInURL}
                                                name={member.name}
                                                role={TranslationModel.translate(
                                                    member.position
                                                )}
                                                priority={member.priority}
                                            />
                                        ))}
                                </div>
                            </div>
                        )
                    })
                }
            </ContentSection>
        </div>
    )
}

export default AboutUsPage
