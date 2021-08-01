import React from 'react'

const Skills = () => {
    
    //    Skills Table Max: 5 //
    let skills =[
        {
        skillsname: "HTML5",
        skillsperc: "95%"
    },
        {
        skillsname: "CSS3",
        skillsperc: "85%"
    },
        {
        skillsname: "JAVASCRIPT",
        skillsperc: "85%"
    },
        {
        skillsname: "UX/UI",
        skillsperc: "80%"
    },
]
    return (
        <section className="skills-section" id="skills">
        <h2 className="section-title">Skills</h2>

        <div className="skills__container bd-grid">          
            <div>
                <h2 className="skills__subtitle">Profesional Skills</h2>
                <p className="skills__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit optio id vero amet, alias architecto consectetur error eum eaque sit.</p>
               {skills.map((elem,key) =>  <div key={key} className="skills__data">
                    <div className="skills__names">
                        <i className='bx bxl-html5 skills__icon'></i>
                        <span className="skills__name">{elem.skillsname}</span>
                    </div>
                    <div className="skills__bar" style={{ width: elem.skillsperc }}>

                    </div>
                    <div>
                        <span className="skills__percentage">{elem.skillsperc}</span>
                    </div>
                </div>    )}

            </div>
            
            <div className="skills__img">              
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80" alt="" className="skills__img"/>
            </div>
        </div>
    </section>
    )
}

export default Skills
