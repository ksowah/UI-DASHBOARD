import React from 'react'
import './left.css'

function Left() {
    return (
        <div className='left'>
            <div className='left__head'>
            <i class="fab fa-artstation"></i>
            <small>gig share</small>
            </div>

            <div className='left__image'>
                <div className='left__image__container'>
                    <div className='left__image__icon'>
                        <i class="fas fa-braille"></i>
                    </div>
                    <div className='left__image__image'>
                        <img src='https://i.pinimg.com/474x/31/e3/8a/31e38a00dd26e7865e5557c56c060916.jpg'/>
                        <h4>Jennifer Ross</h4>
                    </div>
                    
                </div>
            </div>

            <div className='menu'>
                <ul>
                    <li><i class="fas fa-briefcase"></i> Dashboard <i class="fas fa-angle-up"></i></li>
                    <div className='menu__cover'>
                        <li><i class="fas fa-folder"></i> Folders</li>
                            <ul>
                                <li>Marketing</li>
                                <li>Design</li>
                                <li>Webflow</li>
                            </ul>
                        <li><i class="fas fa-tag"></i> Favorites</li>   
                        <li><i class="fas fa-cog"></i> Settings</li> 
                    </div>
                      
                </ul>
            </div>

            <div className='box'>
                <div className='box__inner'>
                    <h5>Add files</h5>
                    <p>Up to 20 GB</p>
                    <span className='box__add'>+</span>
                </div>
            </div>

        </div>
    )
}

export default Left
