import React from 'react'
import './peopleItems.css'

function PeopleItems({image1, image2, image3, number, title, bool, date, color}) {
    return (
        <div className='people-item'>
            <div className={`icon ${color}`}>
                <i class="fas fa-print"></i>
            </div>
            <p>{title}</p>
            <div className='images'>
                <img src={image1}/>
                <img src={image2} className='img'/>
                <img src={image3} className= {
                    bool ? 'img' : 'none'
                }/>
                <div className={
                    !bool ? 'number' : 'none'
                }>
                    <p>{number}</p>
                </div>
            </div>

            <div className='date'>
                <p>{date}</p>
            </div>
        </div>
    )
}

export default PeopleItems
