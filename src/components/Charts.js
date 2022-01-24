import React, { useEffect, useState } from 'react'
import './charts.css'
import Diagram from './Diagram'



function Charts() {

    return (
        <>
        <div className='chart'>
            <div className='chart__head'>
                <h4>Storage</h4>
                <span className='chart__icon'>
                    <i class="fas fa-ellipsis-v"></i>
                </span>
            </div>

            <div className='chart__diagram'>
               <Diagram/>
            </div>

            <div className='chart__data'>

                <div className='data__row'>
                    <div className='data__one'>
                        <h5>Documents</h5>
                        <div className='data__size'>
                            <span className='legend brown'></span>
                            <p>68 GB</p>
                        </div>
                    </div>
                    <div className='data__two'>
                        <h5>Images</h5>
                        <div className='data__size'>
                            <span className='legend blue'></span>
                            <p>55 GB</p>
                        </div>
                    </div>
                </div>

                <div className='data__row'>
                    <div className='data__one'>
                        <h5>Free</h5>
                        <div className='data__size'>
                            <span className='legend green'></span>
                            <p>68 GB</p>
                        </div>
                    </div>
                    <div className='data__two'>
                        <h5>Videos</h5>
                        <div className='data__size'>
                            <span className='legend dark'></span>
                            <p>55 GB</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        {/* <Doughnut 
            data = {{
                labels : [
                    'Documents',
                    'Images',
                    'Free',
                    'Videos'
                ],
            datasets : [{
                label : 'Storage',
                data : [300, 50, 100, 72],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    'rgb(255, 205, 86)'
                  ],
            }]
         }}
        
        /> */}

        </>
    )
}

export default Charts
