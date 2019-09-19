import React from 'react'

const Card = ({card}) => {
    return(
        <div className="card">
            <img alt="" src={card.imageUrl} />
        </div>
    )
}

export default Card