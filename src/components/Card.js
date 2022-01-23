import React from 'react'
import './card.css'

function Card({number, icon, title, size, color, }) {
    return (
        <div className={`card ${color}`}>
            <div className='card__header'>
                <p>{number}</p>
                <i class="fas fa-ellipsis-v"></i>
            </div>

            <div className='card__description'>
                <i class={icon}></i>
                <h4>{title}</h4>
                <p>{size}</p>
            </div>
        </div>
    )
}

export default Card

//fas fa-bullseye
