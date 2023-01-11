import React from 'react'
import './AboutCard.scss'

function AboutCard({title, text}) {
    return (
        <div className='about__card'>
            <h2 className='about__subheader'>{title}</h2>
            <p className='about__card-text'>{text}</p>
        </div>
    )
}

export default AboutCard