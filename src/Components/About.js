import React from 'react'
import image from './images/profil.jpg'

const About = () => {
    return (
        <section className="about section " id="about">
        <h2 className="section-title">About</h2>

        <div className="about__container bd-grid">
            <div className="about__img">
                <img src={image} alt=""></img>
            </div>
            
            <div>
                <h2 className="about__subtitle">I'am Amen</h2>
                <p className="about__text">
                Hard-working web developer with a flair for creating elegant solutions in the least amount of time. Developed an ecommerce webapp, customer web portal, documentary launch website, and donations webapp for a local charity. Passionate about software architecture and cloud computing. Regular attendee of web developer meetups and hackathons.                    </p>           
            </div>                                   
        </div>
    </section>
    )
}

export default About
