import React from 'react'
import './people.css'
import PeopleItems from './PeopleItems'

function People() {
    return (
        <div className='people'>
            <div className='people__head'>
                  <h4>Last File</h4>
                  <i class="fas fa-chevron-down"></i>
            </div>

            <hr className='hr'></hr>

            <div className='items'>
                <PeopleItems 
                    title={'Travel Images.psd'}
                    image1={'https://th.bing.com/th/id/R.be04fec4df77006921ac6a4811acfeb2?rik=YkbUrMwKOATUqg&pid=ImgRaw&r=0'}
                    image2={'https://66.media.tumblr.com/0ca9012300b06274e727d9c6688a6752/tumblr_pp1eyqZGsc1y4o01fo9_640.jpg'}
                    number={'+7'}
                    bool={false}
                    date={'14 Jan, 22'}
                />
                <PeopleItems 
                    title={'True Photos.jpg'}
                    image1={'https://th.bing.com/th/id/OIP.xIT8tzVyJ0ZXKgKbC4Im9QHaHb?pid=ImgDet&rs=1'}
                    image2={'https://th.bing.com/th/id/OIP.7KaLZ6ryJpINT51IeAaMogHaHa?pid=ImgDet&w=600&h=600&rs=1'}
                    image3={'https://cdn.acidcow.com/pics/20160812/beautiful_girls_42.jpg'}
                    bool={true}
                    date={'22 Feb, 22'}
                    color={'blue'}
                />
                <PeopleItems 
                     title={'Dashboard Struct.pdf'}
                     image1={'https://i.pinimg.com/originals/de/f1/55/def155b4898ae3edd345f1b4fb4b7b9b.jpg'}
                     image2={'https://th.bing.com/th/id/R.f737b06a2ecd1464b99a2b2918080b66?rik=Anii7FKAYGiOLw&riu=http%3a%2f%2fimg.izismile.com%2fimg%2fimg3%2f20100225%2fmost_beautiful_men_02.jpg&ehk=%2bT1x89Q0RW2V6Tfw0VqacVODNX%2f0dt6MB%2fDMEq61Zu0%3d&risl=&pid=ImgRaw&r=0'}
                     image3={'https://th.bing.com/th/id/OIP.ZtB5viPi0EmdZTNFVpndXAHaHa?pid=ImgDet&w=600&h=600&rs=1'}
                     bool={false}
                     date={'27 Feb, 22'}
                     number={'+8'}
                     color={'orange'}
                />
                <PeopleItems 
                    title={'Character Illustration.zip'}
                    image1={'https://i.pinimg.com/736x/92/c3/09/92c3090b9aee4cb073f8724ddde754d6.jpg'}
                    image2={'https://th.bing.com/th/id/OIP.23v3hjk2snMR5zFVXX6BrwHaJQ?pid=ImgDet&w=500&h=625&rs=1'}
                    image3={'https://www.brandonbishopphotography.com/wp-content/uploads/2020/09/MG_0363c10x8crop.jpg'}
                    bool={true}
                    date={'11 Mar, 22'}
                    color={'brown'}
                />
            </div>
           

        </div>
    )
}

export default People
