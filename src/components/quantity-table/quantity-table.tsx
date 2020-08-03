import React, { FC } from 'react'
import './quantity-table.css'
import TranslationModel, { Phrase } from '../../model/translationModel'
import phrases from '../../data/translations.json'
import { Divider } from '@material-ui/core'

interface QuantityTableProps {
    header: Phrase
    items: {
        desc: Phrase
        quantity: number
    }[]
    showTotal?: boolean
}

const QuantityTable: FC<QuantityTableProps> = (props) => {
    return (
        <div className='quantity-table'>
            <h2>{TranslationModel.translate(props.header)}</h2>
            <div className='quantity-stats'>
                {props.items.length > 0 ? (
                    props.items.map((item, i) => (
                        <div key={i} className='quantity-stat'>
                            <span>{TranslationModel.translate(item.desc)}</span>
                            <span>{item.quantity}</span>
                        </div>
                    ))
                ) : (
                    <span>
                        {TranslationModel.translate(
                            phrases.dinner_admin.no_items
                        )}
                    </span>
                )}
            </div>
            {props.showTotal ? (
                <>
                    <Divider />
                    <br />
                    <div className='quantity-stats'>
                        <span>
                            {TranslationModel.translate(
                                phrases.dinner_admin.total
                            )}
                        </span>
                        <span>
                            {props.items.reduce(
                                (a, b) =>
                                    parseInt((a as unknown) as string) +
                                    (parseInt(
                                        (b.quantity as unknown) as string
                                    ) || 0),
                                0
                            )}
                        </span>
                    </div>
                </>
            ) : (
                <></>
            )}
        </div>
    )
}

export default QuantityTable
