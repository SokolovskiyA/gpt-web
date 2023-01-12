import React from 'react'
import { motion } from "framer-motion"
import './Footer.scss'

function Footer() {
    return (
        <div className='footer'>
            <motion.h1 
                animate={{ color: ["#AE67FA", "#F49867","#AE67FA"]}}
                transition={{ duration: 5, repeat: Infinity}}
                className='hero__header footer__header'>Do you want to step in to the future before others</motion.h1>
            <a className='footer__link' href="#home">Try GPT</a>
        </div>
    )
}

export default Footer