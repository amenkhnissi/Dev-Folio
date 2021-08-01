import React from 'react'
import {SocialNetworks} from './Home'

const Footer = () => {
    return (
        <footer className="footer">
        <p className="footer__title">Amen Allah khnissi</p>
        <div className="footer__social">
        {SocialNetworks.map((elem,key) => 
                   <a key={key} href={elem
                    .network} className="footer__icon">{elem.icon}</a>

                )}
           
        </div>
        <p><i className
        ='bx bx-copyright' ></i> copyright 2021</p>
    </footer>
    )
}

export default Footer
