import React from 'react'
import './Hero2.scss'
import banner from '../../assets/possibility.png'
import { motion } from "framer-motion"


function Hero2() {
    return (
        <div className='hero2'>
            <img className='hero2__banner' src={banner} alt="banner-possibilities"/>
            <div className='hero2__text-div'>
                <p className='hero2__link1 hero2__text'>Request Early Access to Get Started</p>
                <motion.h2 
                animate={{ color: ["#AE67FA", "#F49867","#AE67FA"]}}
                transition={{ duration: 5, repeat: Infinity}} 
                className="hero2__header">The possibilities are beyond your imagination</motion.h2>
                <p className='hero2__text'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <p className='hero2__link2 hero2__text'>Request Early Access to Get Started</p>
            </div>
        </div>
    )
}

export default Hero2