import React from 'react'
import './Banner.scss'

function Banner() {
    return (
        <div className='banner'>
            <div className='banner__text'>
                <p className='banner__request'>Request Early Access to Get Started</p>
                <p className='banner__header'>Register today & start exploring the endless possiblities.</p>
            </div>
            <a className='banner__link' href="home">Get Started</a>
        </div>
    )
}

export default Banner