import React from "react";
import { observer } from 'mobx-react'
import HomeStore from '../../store'
import './styles.scss'

const Card = observer(() => {
    const store = HomeStore

    return <div className="container-card">
        {
            store.ArrCard.map(({background, card}, idx) => <div className="column" style={{background}} key={'column_' + idx}>
                {
                    card.map((items, idx) => <div className={items.animation} key={'card_' + idx}>
                        <div className="imgCard">
                            <img src={items.cardImg}/>
                        </div>
                        <div className="title">
                            { items.title }
                        </div>
                    </div>)
                }
            </div>)
        }
    </div>
})

export default Card