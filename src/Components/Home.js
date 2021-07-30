import React from 'react'
import ProfilImage from './images/profil.png'
import Typed from 'react-typed'


const Home = () => {
    let Typedstrings = ["Developer", "UI Designer", "Freelancer"]
    return (
        <section className="home bd-grid" id="home">
            <div className="home__data">
                <h1 className="home__title">Hi,<br />I'am <span className="home__title-color">Amen</span><br />
                    <Typed strings={Typedstrings} fadeOut={true} typeSpeed={80} backSpeed={80} loop={true} /></h1>

                <a href="#" className="button">Contact</a>
            </div>

            <div className="home__social">
                <a href="" className="home__social-icon"><i className='bx bxl-linkedin'></i></a>
                <a href="" className="home__social-icon"><i className='bx bxl-behance' ></i></a>
                <a href="" className="home__social-icon"><i className='bx bxl-github' ></i></a>
            </div>
            <div className="home__img">
            <svg  className="home__blob" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink">
    <mask id="mask0" mask-type="alpha">
        <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"></path>
    </mask>
    <g mask="url(#mask0)">
        <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z">

         </path>
         <image className="home__blob-img" href={ProfilImage} />

    </g>
</svg>
            </div>
        
            
        </section>
    )
}

export default Home
