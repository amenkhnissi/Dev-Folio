import React from 'react'
import Projectimage from './images/work1.jpg'

const Work = () => {

        // Projects List // 
    let projects = [

        {
            title : "New project",
            image: Projectimage,
        },
        {
            title : "2 project",
            image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80",
        },
        {
            title : "3 project",
            image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
        },
        
        
    ]
    return (
        <section className="work-section" id="work">
        <h2 className="section-title">Work</h2>

        <div className="work__container bd-grid">
            { projects.map((data) => <div className="work__img">
 <h1 className="project-title"> <a href="#">{data.title}</a></h1>

                <img src={data.image} alt=""/>

            </div>   ) }
        </div>
    </section>
    )
}

export default Work
