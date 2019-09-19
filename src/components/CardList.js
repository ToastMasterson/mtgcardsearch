import React from 'react'
import Card from './Card'

const CardList = (props) => {

    const createCards = () => {
        return props.cards.map(card => (
            <Card className="magic-card" key={card.id} card={card} />
        ))
    }

    return(
        <div id="card-list">
            {createCards()}
        </div>
    )
}

export default CardList