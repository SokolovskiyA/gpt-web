import React from 'react'
import './BlogCart.scss'

function BlogCart({img, date, head}) {
    return (
        <div className='blogCart'>
            <img className="blogCart__img" src={img} alt="blog img"/>
            <p className="blogCart__text">{date}</p>
            <h3 className="blogCart__header">{head}</h3>
            <a href="#home" className="blogCart__link blogCart__text">Read Full Article</a>
        </div>
    )
}

export default BlogCart