import React from 'react'
import Card from './Card'
import Charts from './Charts'
import './main.css'
import People from './People'

function Main() {
    return (
        <div className='main'>
           <div className='main__header'>
               <div className='main__overview'>
                    <h3>Overview</h3>
                    <span>185 GB</span>
                    <i class="fas fa-search"></i>
               </div>

               <div className='main__search'>
                    <i class="fas fa-search"></i>
                   <p>Search something...</p>
               </div>

               <div className='main__icons'>
                    <span>
                        <i class="far fa-bell"></i>
                    </span>
                    <span>
                    <i class="fas fa-sign-in-alt"></i>
                    </span>
                    <div><p>Upgrade Plan</p></div>
               </div>
           </div>

           <div className='main__center'>
                <div className='main__center__info'>
                    <h1>Manage your folders</h1>
                    <p>Create folders to sort files and have quick access to documents</p>
                </div>
          
                <div className='main__cards'>
                    <div className='main__add'>
                        <p>+</p>
                    </div>
                    <Card
                        number='01'
                        icon='fas fa-bullseye'
                        title='Marketing'
                        size='125 MB'
                        color={'green'}
                    />

                    <Card
                        number='02'
                        icon='fas fa-archway'
                        title='Branding'
                        size='124 MB'
                        color={'blue'}
                    />

                    <Card
                        title={'Your Gallery'}
                        color={'image'}
                    />
                </div>

            </div>

            <div className='main__chart'>
                <Charts/>
                <People/>
            </div>

        </div>
    )
}

export default Main
