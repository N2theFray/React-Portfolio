import React from 'react'
import ResumePDF from '../../assets/Resume.pdf'

function Resume () {
    return(
        <div>

            <div>

                    <h2>Download my resume <a href={ResumePDF} download='Black, Steven Resume'> here</a></h2>
                    
                <ul>
                    <h2>Front-End Proficiencies</h2>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Jquery</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ul>

                <ul>
                    <h2>Back-end Proficiences</h2>
                    <li>APIs</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>REST</li>
                    <li>GraphQL</li>
                </ul>
            </div>
        </div>
    )
}

export default Resume