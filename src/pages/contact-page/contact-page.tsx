import React, { FC, useEffect, useState } from 'react'
import './contact-page.css'

import TranslationModel from '../model/translationModel'
import phrases from '../../data/translations.json'
import ContentSection, {
    ContentSectionBackground,
    ContentSectionSize,
} from '../../components/layout/content-section/content-section'
import { TeamMember, 
    getMarketingTeamMembers, 
    getEventTeamMembers, 
    getProjectLeaders, 
    getSalesTeamMemebers,
    getAllTeamMembers 
} from '../model/teamModel'

import TextSection, {TextSectionAlignment}from '../../components/text-section/text-section'
import ContactForm from './contact-form/contact-form'

import SectionTitle from '../../components/section-title/section-title'
import IntroScreenTitle from '../../components/intro-screen/intro-screen-title/intro-screen-title'
import HalfHalfCard from '../../components/half-half-card/half-half-card'
import teamContact from './team-contact.json'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import Card from '../../components/card/card'


const Contactpage: FC = () => {

    const windowDimensions = useWindowDimensions();
            const [onMobile, _setOnMobile] = useState(false);
        
            useEffect(() => {
                    _setOnMobile(windowDimensions.width <= 850)
                }, [windowDimensions.width]);
    
    const [pgLeaders, setPgLeaders] = useState<TeamMember[]>([])
    const [pgMarketing, setPgMarketing] = useState<TeamMember[]>([])
    const [pgSales, setPgSales] = useState<TeamMember[]>([])
    const [pgEvent, setPgEvent] = useState<TeamMember[]>([])


    const [allMembers, setAllMembers] = useState<TeamMember[][]>([]);


    useEffect(() => {
        window.scrollTo(0, 0);

        getAllTeamMembers().then((team) => {
            // Seperating team into the smaller groups
            const leaders = team.filter(m => m.priority === 1);
            const sales = team.filter(m => m.priority === 2 || m.priority === 3);
            const event = team.filter(m => m.priority === 4);
            const marketing = team.filter(m => m.priority === 5);

            // Sort each group based on the order they are standing in the photo (image_order in json file)
            function sortByImageOrder(members: TeamMember[], order: string[]) {
                const orderIndex = new Map(order.map((id, i) => [id, i]));
                return [...members].sort((a, b) => 
                    (orderIndex.get(a.personId) ?? Infinity) - (orderIndex.get(b.personId) ?? Infinity)
                );
            };

            const sortedLeaders = sortByImageOrder(leaders, teamContact[0].image_order);
            const sortedSales = sortByImageOrder(sales, teamContact[1].image_order);
            const sortedEvent = sortByImageOrder(event, teamContact[2].image_order);
            const sortedMarketing = sortByImageOrder(marketing, teamContact[3].image_order);


            // Update state
            setPgLeaders(sortedLeaders);
            setPgSales(sortedSales);
            setPgEvent(sortedEvent);
            setPgMarketing(sortedMarketing);

            // Big list of lists
            setAllMembers([sortedLeaders, sortedSales, sortedEvent, sortedMarketing]);
        });
    }, []);

    const groups: Record<string, TeamMember[]> = {
        leaders: pgLeaders,
        marketing: pgMarketing,
        sales: pgSales,
        event: pgEvent
    };

    return (
        <div>
            <IntroScreenTitle noGradient = {true} > {TranslationModel.translate(phrases.contact_us)} </IntroScreenTitle>

            {/* Group Contact */}
            <ContentSection size={ContentSectionSize.large}>
                <div className="test-container">
                <div className="test-cards">
            {
                teamContact.map((group)=>{
                    const members = groups[group.member_key] ?? [];
                    const isOdd = onMobile? false : !(group.id%2);

                    const partOne = {
                        content: <div className='content contact-card'>
                                    <h3>{TranslationModel.translate(group.name)}</h3>
                                    <p>
                                        {members.map((member, i)=> {
                                            const reverseOrder = members.length-1-i;
                                            
                                            return (member.name.split(" ")[0]+ (reverseOrder? 
                                                (reverseOrder==1? ' & ' : ', ') 
                                                :''))
                                        })
                                        }
                                    </p>
                                    
                                    <div className='contact-details'>
                                        <a
                                            href={"mailto:" + group.email}
                                        >
                                            <p><b>{group.email}</b></p>
                                        </a>
                                    </div>
                                </div>
                    }
                    const partTwo = {
                        content: <img src={group.image} className='image'/>
                    }

                    return (
                        <HalfHalfCard key={group.member_key}
                        left_content={isOdd? partOne.content : partTwo.content}
                        right_content={isOdd? partTwo.content : partOne.content}
                        />
                    )
                })
            }
            <div style={{margin: '20px'}}>
            <Card transparent>
                <div className='webb-card'>
                    <p>Vid frågor om hemsidan, kontakta <a href="mailto:webb@nlg.medieteknik.com">webb@nlg.medieteknik.com</a></p>
                </div>
            </Card>
            </div>
            </div>
            <div className='test-sticky'>
                <TextSection align={TextSectionAlignment.center}>
                    <SectionTitle>
                        {TranslationModel.translate(
                            phrases.contact_form.contact_form
                        )}
                    </SectionTitle>
                    <p>
                        {TranslationModel.translate(
                            phrases.contact_form.contact_information
                        )}
                        !
                    </p>
                    <ContactForm />
                </TextSection>
            </div>
            </div>
            </ContentSection>
        </div>
    )
}

export default Contactpage