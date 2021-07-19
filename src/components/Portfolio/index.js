import React from 'react'

function Portfolio () {

    return (
 
    <div className="flex-row row justify-content-center align-center">

        <div className="card col-lg-3 mx-3  my-3" >
            <img src={require('../../assets/NoSQL.png').default}  class="card-img-top my-2" alt="img-one"></img>
            <div className="card-body">
                <h5 className="card-title">NoSQL Social Network</h5>
                
                <a className="mx-1" href="https://drive.google.com/file/d/1e6d1CbZuGYMDlK1AJKULK7FSWC83oQs7/view">App Demo</a>
                <a className="mx-1" href="https://github.com/N2theFray/NoSQL-Social-Network.git">Git Repository</a>
            
                
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>

        <div className="card col-lg-3 mx-3 my-3" >
            <img src={require('../../assets/MVC.png').default} class="card-img-top my-2" alt="img-one"></img>

            <div className="card-body">
                <h5 className="card-title">MVC Tech Blog</h5>

                <a className="mx-1" href="https://sleepy-eyrie-10581.herokuapp.com/">App Demo</a>
                <a className="mx-1" href="https://github.com/N2theFray/MVC-tech-blog.git">Git Repository</a>

                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>

        <div className="card col-lg-3 mx-3 my-3" >
            <img src={require('../../assets/ORM.png').default} class="card-img-top my-2" alt="img-one"></img>

            <div className="card-body">
                <h5 className="card-title">ORM E-commerce Back End</h5>

                <a className="mx-1" href="https://drive.google.com/file/d/15wqp_VIp3fpDvZVOcZZO9aVyiNEKsp6N/view">App Demo</a>
                <a className="mx-1" href="https://github.com/N2theFray/ORM-E-Commerce.git">Git Repository</a>

                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>

        <div className="card col-lg-3 mx-3 my-3" >
            <img src={require('../../assets/SQL.png').default} class="card-img-top my-2" alt="img-one"></img>

            <div className="card-body">
                <h5 className="card-title">SQL Employee Tracker</h5>

                <a className="mx-1" href="https://drive.google.com/file/d/1LjUBMhjq2tq8av48zkIf-t9S2yKg6E9x/preview">App Demo</a>
                <a className="mx-1" href="https://github.com/N2theFray/sql-employee-tracker.git">Git Repository</a>

                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>

        <div className="card col-lg-3 mx-3 my-3" >
            <img src={require('../../assets/Express.png').default} class="card-img-top my-2" alt="img-one"></img>

            <div className="card-body">
                <h5 className="card-title">Express Note Taker</h5>

                <a className="mx-1" href="https://whispering-dawn-78598.herokuapp.com/" >App Demo</a>
                <a className="mx-1" href="https://github.com/N2theFray/express-note-taker.git">Git Repository</a>

                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>

        <div className="card col-lg-3 mx-3 my-3" >
            <img src={require('../../assets/OOP.png').default} class="card-img-top my-2 " alt="img-one"></img>

            <div className="card-body">
                <h5 className="card-title">OOP Team Profile Generator</h5>

                <a className="mx-1" href="https://drive.google.com/file/d/1DmTC584tL1OuRww5UPY17JHlGPLvg-gL/view">App Demo</a>
                <a className="mx-1" href="https://github.com/N2theFray/employee-portal.git">Git Repository</a>

                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>

    </div>

    

    )
}

export default Portfolio