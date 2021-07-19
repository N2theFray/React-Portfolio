import React from 'react'

function About () {
    return (
<div>

<section className="page-section about text-white mb-0" id="about">
<div className="container justify-content-center">
    
    <h2 className="page-section-heading text-center text-uppercase text-white">About Me</h2>
    
    
    
    
    <div className="row ">
    <img className="col-sm-4 col-lg-4 justify-content-center my-2 " src={require('../../assets/profile.jpeg').default} alt="img-one"></img>

    <div className=" me-auto col-sm-7 col-lg-6"><p className="lead">Full Stack Web Developer who is a recent aviation professional with extensive experience 
        trouble-shooting, project management, isolated team dynamics, and operations in high-stress dynamic environments. I am now pursuing an alternate career field in 
        which I am able to leverage my considerable experience in customer relations, 
        problem solving, and teamwork to develop and expand my skill set into a field with a strong future growth projection. I have acquired a UCF Full-Stack Developer 
        Certificate wherein I worked in small teams, often as the lead, with technologies such as MySQL, Mongoose, Node.js, React, and various templating technologies.</p></div>
        
    </div>
    
   
</div>
</section>

</div>
    )
}

export default About
