import React from 'react'
import './WhatIsGPT.scss'
import { motion } from "framer-motion"
import AboutCard from '../AboutCard/AboutCard'

const WhatIsGPT = () => {
    return (
        <div id="what-is-gpt" className="about">
            <h2 className='about__subheader'>What is GPT</h2>
            <p className='about__text'>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
            <motion.h1 
                animate={{ color: ["#AE67FA", "#F49867","#AE67FA"]}}
                transition={{ duration: 5, repeat: Infinity}}
                className='about__header'>The possibilities are beyond your imagination</motion.h1>
            <p className='about__label'>Explore The Library</p>
            <div className='about__cards'>
                <AboutCard title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."/>
                <AboutCard title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"/>
                <AboutCard title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"/>
            </div>
        </div>
    )
}

export default WhatIsGPT