import React from 'react'
import ai from '../../assets/ai.png'
import './Hero.scss'
import { motion } from "framer-motion"
import people from '../../assets/people.png'
function Hero() {
    return (
        <div className="hero">
            <div className='hero__text-div'>
                <motion.h1 
                animate={{ color: ["#AE67FA", "#F49867","#AE67FA"]}}
                transition={{ duration: 5, repeat: Infinity}}
                className='hero__header'>Let'sBuild Something Amizing With GPT Open AI</motion.h1>
                <p className='hero__text'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <div className='hero__form'>
                    <input className='hero__input' type="email" placeholder='Your Email Address'/>
                    <button className='hero__button'>Get Started</button>
                </div>
                <img src={people} alt="people" className='hero__avos'/>
                <p className='hero__signature'>1,600 people requested access a visit in last 24 hours</p>
            </div>
            <motion.img 
                className="hero__img" 
                animate={{ y: [0, 15, 0 ] }}
                transition={{ duration: 5 ,repeat: Infinity}} src={ai} alt="AI"/>
        </div>
    )
}

export default Hero