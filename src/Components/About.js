import React from 'react'
import image from './images/profil.jpg'

const About = () => {
    return (
        <section class="about section " id="about">
        <h2 class="section-title">About</h2>

        <div class="about__container bd-grid">
            <div class="about__img">
                <img src={image} alt=""></img>
            </div>
            
            <div>
                <h2 class="about__subtitle">I'am Amen</h2>
                <p class="about__text">
                Hard-working web developer with a flair for creating elegant solutions in the least amount of time. Developed an ecommerce webapp, customer web portal, documentary launch website, and donations webapp for a local charity. Passionate about software architecture and cloud computing. Regular attendee of web developer meetups and hackathons.                    </p>           
            </div>                                   
        </div>
    </section>
    )
}

export default About
