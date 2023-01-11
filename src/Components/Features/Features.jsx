import React from 'react'
import './Features.scss'
import { motion } from "framer-motion"

function Features() {
    return (
        <div className='features'>
            <div className='features__header-div'>
                <motion.h2 
                animate={{ color: ["#AE67FA", "#F49867","#AE67FA"]}}
                stransition={{ duration: 5, repeat: Infinity}}
                className='features__header'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</motion.h2>
                <p className='features__label'>Request Early Access to Get Started</p>
            </div>
            <div className='features__container'>
                <table>
                    <tbody>
                        <tr>
                            <td><h2 className='features__subheader'>Improving end distrusts instantly</h2></td>
                            <td><p className='features__text'>From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.</p></td>
                        </tr>
                        <tr>
                            <td><h2 className='features__subheader'>Become the tended active</h2></td>
                            <td><p className='features__text'>Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.</p></td>
                        </tr>
                        <tr>
                            <td><h2 className='features__subheader'>Message or am nothing</h2></td>
                            <td><p className='features__text'>Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.</p></td>
                        </tr>
                        <tr>
                            <td><h2 className='features__subheader'>Really boy law county</h2></td>
                            <td><p className='features__text'>Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.</p></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Features