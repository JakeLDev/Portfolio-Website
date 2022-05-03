
import React from 'react';

import Vinnies from '../../Components/assets/Gray+Design+Vinnies+logo.jpg';
import Vintranet from '../../Components/assets/projects/Vintranet.png';
import QFin from '../../Components/assets/QFin-Logo2.png';
import QFinSite from '../../Components/assets/projects/QFin-site2.png';
import CFC from '../../Components/assets/CFC.png';
import WAIS from '../../Components/assets/projects/WAIS.png';
import { Fade } from "react-awesome-reveal";

const WorkExperience = () => {
    return (
        <>
            <div className="page" id='Work Experience'>
                <h1 className="title">Work Experience and Roles</h1>

                <div className="Jobs">
                    <Fade duration={1500} triggerOnce="true">
                        <div className="Job">
                            <img className="Job-logo" src={Vinnies} alt="Vinnies Logo" width="100px" height="100px" />
                            <h2 className="Job-title">St Vincent de Paul (Vinnies WA) | Web Developer</h2>
                            <h3 className="Job-subtitle">December 2021 - Present</h3>
                            <p className="Job-desc"> <b>Role: </b>Web Developer creating the new intranet system for Vinnies WA called the "Vintranet"</p>
                            <h3 className="Job-desc"> <b>Projects: </b></h3>
                            <h3 className='Job-Project-title'>Vinnies WA "Vintranet"</h3>
                            <p className="Job-Project-desc">Developed and populated a new intranet system for Vinnies WA, for use across 52 stores, warehouse depos, and head office staff. This private site hosts all internal documents, templates and forms for Vinnies WA, and is used by hundreds of staff and volunteers.</p>
                            <img className="Job-image" src={Vintranet} alt="Vintranet" />
                            <p className="Job-Project-tech"> <b>Technologies: </b>HTML, CSS, JavaScript, Custom CMS</p>
                        </div>
                    </Fade>

                    <hr className="Main-separator"></hr>

                    <Fade duration={1500} triggerOnce="true">
                        <div className="Job">
                            <img className="Job-logo" src={QFin} alt="QFin Logo" width="100px" height="100px" />
                            <h2 className="Job-title">QFin UWA | Executive Director of Trading</h2>
                            <h3 className="Job-subtitle">November 2021 - Present</h3>
                            <p className="Job-desc"> <b>Role:</b> Recently elected Executive Director of Trading at QFin UWA for 2022. QFin is a club that focuses on trading stocks and cryptocurrencies, utilizing algorithmic approaches. The role involves creating, running and participating in projects for 2022’s Trading Team, along with organizing and running some trading-based events and workshops. Currently in the process of building both a website and an algorithm back testing framework for the club over summer. As a member of the Executive team, I am also involved in making decisions around the running of the club next year.</p>

                            <h3 className="Job-desc"> <b>Projects: </b></h3>

                            <h3 className='Job-Project-title'>QFin UWA Website | <a href='https://qfinuwa.com' target="_blank" rel="noopener noreferrer" style={{color: "lightblue"}}>qfinuwa.com</a> |</h3>
                            <p className="Job-Project-desc">Created a Web Application and Email Domain for the QFin UWA club which displays what the club is about; our events, executive team and committee, and our sponsors. The site is accessible to both desktop and mobile users.</p>
                            <img className="Job-image" src={QFinSite} alt="QFin website" />
                            <p className="Job-Project-repo"><b>Repository: </b><a href='https://github.com/QFinUWA/qfin-website' target="_blank" rel="noopener noreferrer">https://github.com/QFinUWA/qfin-website</a></p>
                            <p className="Job-Project-tech"> <b>Technologies: </b>React, HTML, CSS, JavaScript</p>

                            {/* <hr className="Sub-separator"></hr>

                            <h3 className='Job-Project-title'>QFin UWA Algorithm Back-testing Framework (In Progress)</h3>
                            <p className='Job-Project-desc'>In the process of creating a rapid back testing framework to test the performance of quantitative trading algorithms for use by the 2022 QFin Trading Team. It will allow users to test their quantitative algorithms on historical price data for stocks and cryptocurrencies. It will also be optimized to allow for multicore processing and parameter sweeping for algorithm optimization. We hope to have this framework be published on PyPI for easy installation through pip for use in educational workshops run by QFin.</p>
                            <p className="Job-Project-tech"> <b>Technologies: </b>Python, Pandas, Vectorbt, Numpy, Stock APIs</p> */}

                            <hr className="Sub-separator"></hr>

                            <h3 className='Job-Project-title'>Trading Team Project - Semester 1, 2022</h3>
                            <p className='Job-Project-desc'>Created a project for the QFin Trading Team to complete in Semester 1, 2022. This Project is focused around the concept of Mean Reversion, a mathematical theory which claims that seeing a result that is significantly above or below a mean, will mean that the next result is likely to be closer to the mean. Therefore, in theory, you can place buy or sell orders for financial assets on the basis of how far the current price is from the average price. The project will task the Trading Team with creating an optimized trading algorithm which utilizes Mean Reversion to turn a profit on historical price data.</p>
                            <p className='Job-Project-desc'>I created the stock data retreival API, the Back-testing engine, and the outline/rubric of the Project</p>
                            <p className='Job-Project-desc'>The results of this project will be featured on the QFin GitHub after completion</p>
                            <p className="Job-Project-repo"><b>Repository: </b><a href='https://github.com/QFinUWA/Mean-Reversion-Trading-Team-Project-Semester-1-2022' target="_blank" rel="noopener noreferrer">https://github.com/QFinUWA/Mean-Reversion-Trading-Team-Project-Semester-1-2022</a></p>
                            <p className="Job-Project-tech"> <b>Technologies: </b>Python, Pandas, Numpy, Alpha Vantage Stock APIs, Custom Back-testing Framework</p>
                        </div>
                    </Fade>

                    <hr className="Main-separator"></hr>

                    <Fade duration={1500} triggerOnce="true">
                        <div className="Job">
                            <img className="Job-logo" src={CFC} alt="CFC Logo" width="100px" height="100px" />
                            <h2 className="Job-title">Coders for Causes UWA | Volunteer Software Engineer</h2>
                            <h3 className="Job-subtitle">November 2021 - March 2022</h3>
                            <p className="Job-desc"> <b>Role: </b>Volunteer developer for the Coders For Causes club at UWA. A club that provides volunteer software engineering teams for non-profit companies and charities. I am participating in one of the summer projects for the Western Australian Institute of Sport in creating a web application for the track and field division.</p>
                            <h3 className="Job-desc"> <b>Projects: </b></h3>
                            <h3 className='Job-Project-title'>Web Application for Western Australian Institute of Sport</h3>
                            <p className="Job-Project-desc">Created a Web Application for WAIS to help visualise the performance of pole vaulters in training. We incorporated computer vision software and user input to allow coaches to best train their athletes. Working in a team of volunteers through Coders For Causes.</p>
                            <img className="Job-image" src={WAIS} alt="WAIS" />
                            <p className="Job-Project-tech"> <b>Technologies: </b>Vue.js, Django, HTML, CSS, JavaScript, Docker</p>
                            <br></br>
                        </div>
                    </Fade>
                </div>
            </div>
            <hr className="Section-separator"></hr>
        </>)
};

export default WorkExperience;