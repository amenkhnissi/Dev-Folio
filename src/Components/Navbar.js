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
showMenu("nav-toggle","nav-menu")


/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

const Navbar = () => {
    // Nav Links Tab
    let NavLinks = [
        {
        title : "Home" ,
        to : "home"
    },
        {
        title : "About" ,
        to : "about"
    },
        {
        title : "Skills" ,
        to : "skills"
    },
        {
        title : "Work" ,
        to : "work"
    },
        {
        title : "Contact" ,
        to : "contact"
    },
]
    return (
      
        <header className="l-header">
            <nav className="nav bd-grid">
                <div>
                    <a href="#home" className="nav__logo">Amen</a>
                </div>
 
                <div className="nav__menu " id="nav-menu">
                    <ul className="nav__list">
                        {NavLinks.map((elem,key) => 
        <li key={key} className="nav__item"><LinkS to={elem.to} className="nav__link ">{elem.title}</LinkS></li>

                        )}
                        
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
