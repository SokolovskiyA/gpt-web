import React from 'react'
import { motion } from "framer-motion"
import BlogCart from '../BlogCart/BlogCart'
import './Blogs.scss'
import blogImage1 from '../../assets/blog01.png'
import blogImage2 from '../../assets/blog02.png'
import blogImage3 from '../../assets/blog03.png'
import blogImage4 from '../../assets/blog04.png'
import blogImage5 from '../../assets/blog05.png'

function Blogs() {
    
    return (
        <div id="blogs" className='blogs'>
            <motion.h2 
                animate={{ color: ["#AE67FA", "#F49867","#AE67FA"]}}
                transition={{ duration: 5, repeat: Infinity}}
                className='features__header'>A lot is happening,</motion.h2>
            <motion.h2
                animate={{ color: ["#AE67FA", "#F49867","#AE67FA"]}}
                transition={{ duration: 5, repeat: Infinity}}
                className='features__header'>Whe are blogging about it</motion.h2>
            <div className='blogs__div'>
                <BlogCart  img={blogImage1} head="GPT-3 and Open AI is the future. Let us exlore how it is?" date="Sep 26, 2021"/>
                <div className='blogs__div2'>
                    <BlogCart  img={blogImage2} head="GPT-3 and Open AI is the future. Let us exlore how it is?" date="Sep 26, 2021"/>
                    <BlogCart  img={blogImage3} head="GPT-3 and Open AI is the future. Let us exlore how it is?" date="Sep 26, 2021"/>
                    <BlogCart  img={blogImage4} head="GPT-3 and Open AI is the future. Let us exlore how it is?" date="Sep 26, 2021"/>
                    <BlogCart  img={blogImage5} head="GPT-3 and Open AI is the future. Let us exlore how it is?" date="Sep 26, 2021"/>
                </div>
            </div>
        </div>
    )
}

export default Blogs