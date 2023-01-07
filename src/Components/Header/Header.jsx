import React from 'react'
import './Header.scss'

function Header() {
    return (
        <div className="nav">
            <h1 className='navigation__header'>GPT3</h1>
            <nav id="head" className='navigation'>
                <a href="#head" className='navigation__link'>Home</a>
                <a href="#head" className='navigation__link'>What is GPT?</a>
                <a  href="#head" className='navigation__link'>Open AI</a>
                <a href="#head" className='navigation__link'>Case Studies</a>
                <a href="#head" className='navigation__link'>Libra</a>
            </nav>
            <div className='nav__log'>
                <button className='nav__button'>sign in</button>
                <button className='nav__button'>sign up</button>
            </div>
        </div>
    )
}

export default Header