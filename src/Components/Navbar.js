import React from 'react'
import { Link as LinkS } from 'react-scroll'


const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

const Navbar = () => {
    return (
      
        <header className="l-header">
            <nav className="nav bd-grid">
                <div>
                    <a href="#" className="nav__logo">Amen</a>
                </div>
 
                <div className="nav__menu " id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item"><LinkS to="home" className="nav__link  ">Home</LinkS></li>
                        <li className="nav__item"><LinkS to="about" className="nav__link ">About</LinkS></li>
                        <li className="nav__item"><a href="#skills" className="nav__link  active">Skills</a></li>
                        <li className="nav__item"><a href="#work" className="nav__link">Work</a></li>
                        <li className="nav__item"><a href="#contact" className="nav__link">Contact</a></li>
                    </ul>
                </div>

                <div className="nav__toggle" id="nav-toggle">
                    <i className='bx bx-menu'></i>
                </div>
            </nav>
        </header>
        
    
   
    )
}

export default Navbar
