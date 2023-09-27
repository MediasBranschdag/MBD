import React from "react";
import TranslationModel from '../../pages/model/translationModel'

const DropDownProfile = () => {
    return (
        <div className='flex flex-col'>
            <ul>
                <li>
                {TranslationModel.translate({
                                        se: (
                                            <>
                                                <h4>Huvudsponsorpaket</h4>
                                                <h3>60 000kr</h3>
                                                <br />
                                                <p>
                                                    <ul>
                                                        <li>
                                                            8m2 för monter, två
                                                            ståbord och fyra
                                                            stolar samt två
                                                            personliga
                                                            företagsvärdar
                                                        </li>
                                                        <li>
                                                            Fyra
                                                            sittningsbiljetter,
                                                            tillgång till
                                                            företagslounge samt
                                                            lunch och fika för
                                                            fyra
                                                        </li>
                                                        <li>
                                                            Exponering på
                                                            hemsida, sociala
                                                            medier, ryggen på
                                                            kläder under
                                                            branschdagen och i
                                                            sektionslokalen
                                                        </li>
                                                        <li>
                                                            <b>Event:</b>{' '}
                                                            Exempelvis en
                                                            lunchföreläsning
                                                            eller pub
                                                        </li>
                                                        <li>
                                                            <b>Annons:</b> På
                                                            hemsida, Instagram
                                                            och Facebook
                                                        </li>
                                                    </ul>
                                                </p>
                                            </>
                                        ),
                                        en: (
                                            <>
                                                <h4>Main Sponsorship</h4>
                                                <h3>60 000 SEK</h3>
                                                <br />
                                                <p>
                                                    <ul>
                                                        <li>
                                                            8m2 for stand, two
                                                            standing tables and
                                                            four chairs and two
                                                            personal company
                                                            hosts{' '}
                                                        </li>
                                                        <li>
                                                            Four dinner tickets,
                                                            access to the
                                                            corporate lounge as
                                                            well as lunch and
                                                            coffee for four
                                                        </li>
                                                        <li>
                                                            Exposure on the
                                                            website, social
                                                            media, the back of
                                                            clothes during the
                                                            fair
                                                        </li>
                                                        <li>
                                                            <b>Event:</b> For
                                                            example a lunch
                                                            lecture or a pub
                                                        </li>
                                                        <li>
                                                            <b>Advert:</b> On
                                                            website, Instagram
                                                            and Facebook
                                                        </li>
                                                    </ul>
                                                </p>
                                            </>
                                        ),
                                    })}
                </li>
            </ul>
        </div>
    )
}

export default DropDownProfile;