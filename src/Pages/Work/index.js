
import React from 'react';

import Vinnies from '../../Components/assets/Gray+Design+Vinnies+logo.jpg';
import Vintranet from '../../Components/assets/projects/Vintranet.png';
import QFin from '../../Components/assets/QFin-Logo2.png';
import QFinSite from '../../Components/assets/projects/QFin-site2.png';
import MeanReversionProject from '../../Components/assets/projects/MeanReversionProject.png';
import CFC from '../../Components/assets/CFC.png';
import WAIS from '../../Components/assets/projects/WAIS.png';
import { Fade } from "react-awesome-reveal";

const WorkExperience = () => {
    return (
        <>
            <div id='Work Experience Page' className="justify-center h-auto w-9/12 m-auto mb-4 mt-4 rounded max-w-7xl bg-neutral-900/70" >
                <h1 id="Jobs Title" className="w-full font-semibold m-0 text-center content-center mb-3 text-3xl">Work Experience and Roles</h1>

                <div id="Jobs" className="block">

                    <Fade duration={1500} triggerOnce="true">
                        <div id="Job" className='p-3 inline-block h-auto max-w-95/100'>
                            <img id="Job-logo" className="float-left inline-block object-cover pr-2" src={QFin} alt="QFin Logo" width="100px" height="100px" />
                            <h2 id="Job-title" className='font-semibold text-xl'>QFin UWA | Executive Director of Trading</h2>
                            <h3 id="Job-subtitle" className="py-2">November 2021 - August 2022</h3>
                            <p id="Job-desc" className="py-2"> <b>Role:</b> Recently elected Executive Director of Trading at QFin UWA for 2022. QFin is a club that focuses on trading stocks and cryptocurrencies, utilizing algorithmic approaches. The role involves creating, running and participating in projects for 2022’s Trading Team, along with organizing and running some trading-based events and workshops. Currently in the process of building both a website and an algorithm back testing framework for the club over summer. As a member of the Executive team, I am also involved in making decisions around the running of the club next year.</p>

                            <h3 id="Job-desc"> <b>Projects: </b></h3>
                            <div id="Job-Projects" className="block pl-8">
                                <h3 id='Job-Project-title' className='font-semibold py-2'>QFin UWA Website | <a href='https://qfinuwa.com' target="_blank" rel="noopener noreferrer" style={{color: "lightblue"}}>qfinuwa.com</a></h3>
                                <p id="Job-Project-desc">Created a Web Application and Email Domain for the QFin UWA club which displays what the club is about; our events, executive team and committee, and our sponsors. The site is accessible to both desktop and mobile users.</p>
                                <img id="Job-Project-image" className='clear-both block m-auto pt-2 pr-2 w-3/4' src={QFinSite} alt="QFin website" />
                                <p id="Job-Project-repo"><b>Repository: </b><a href='https://github.com/QFinUWA/qfin-website' target="_blank" rel="noopener noreferrer">https://github.com/QFinUWA/qfin-website</a></p>
                                <p id="Job-Project-tech"> <b>Technologies: </b>React, HTML, CSS, JavaScript</p>
                            </div>

                            {/* <hr className="Sub-separator"></hr>

<h3 className='Job-Project-title'>QFin UWA Algorithm Back-testing Framework (In Progress)</h3>
<p className='Job-Project-desc'>In the process of creating a rapid back testing framework to test the performance of quantitative trading algorithms for use by the 2022 QFin Trading Team. It will allow users to test their quantitative algorithms on historical price data for stocks and cryptocurrencies. It will also be optimized to allow for multicore processing and parameter sweeping for algorithm optimization. We hope to have this framework be published on PyPI for easy installation through pip for use in educational workshops run by QFin.</p>
<p className="Job-Project-tech"> <b>Technologies: </b>Python, Pandas, Vectorbt, Numpy, Stock APIs</p> */}

                            <hr className="Sub-separator"></hr>

                            <div id="Job-Projects" className="block pl-8">
                                <h3 id='Job-Project-title' className='font-semibold py-2'>Trading Team Project - Semester 1, 2022</h3>
                                <p id='Job-Project-desc'>Created a project for the QFin Trading Team to complete in Semester 1, 2022. This Project is focused around the concept of Mean Reversion, a mathematical theory which claims that seeing a result that is significantly above or below a mean, will mean that the next result is likely to be closer to the mean. Therefore, in theory, you can place buy or sell orders for financial assets on the basis of how far the current price is from the average price. The project will task the Trading Team with creating an optimized trading algorithm which utilizes Mean Reversion to turn a profit on historical price data.</p>
                                <img id="Job-Project-image" className='clear-both block m-auto pt-2 pr-2 w-3/4' src={MeanReversionProject} alt="Mean Reversion Project" />
                                <p id='Job-Project-desc' className='py-1'>I created the stock data API Interface, the Back-testing engine, and the outline/rubric of the Project</p>
                                <p id="Job-Project-repo" ><b>Reports: </b><a href='https://github.com/QFinUWA/Project-Results/tree/main/2022/Semester1-Mean-Reversion' target="_blank" rel="noopener noreferrer">https://github.com/QFinUWA/Project-Results/tree/main/2022/Semester1-Mean-Reversion</a></p>
                                <p id="Job-Project-repo"><b>Repository: </b><a href='https://github.com/QFinUWA/Mean-Reversion-Trading-Team-Project-Semester-1-2022' target="_blank" rel="noopener noreferrer">https://github.com/QFinUWA/Mean-Reversion-Trading-Team-Project-Semester-1-2022</a></p>
                                <p id="Job-Project-tech"> <b>Technologies: </b>Python, Pandas, Numpy, Alpha Vantage Stock APIs, Custom Back-testing Framework</p>
                            </div>
                        </div>
                    </Fade>

                    <hr className="Main-separator"></hr>

                    <Fade duration={1500} triggerOnce="true">
                        <div id="Job" className="p-1 inline-block h-auto max-w-95/100">
                            <img id="Job-logo" className="float-left inline-block object-cover pr-2" src={Vinnies} alt="Vinnies Logo" width="100px" height="100px" />
                            <h2 id="Job-title" className='font-semibold text-xl'>St Vincent de Paul (Vinnies WA) | Web Developer</h2>
                            <h3 id="Job-subtitle">December 2021 - June 2022</h3>
                            <p id="Job-desc"> <b>Role: </b>Web Developer creating the new intranet system for Vinnies WA called the "Vintranet"</p>
                            <h3 id="Job-desc" className=''> <b>Projects: </b></h3>
                            <h3 id='Job-Project-title' className='pl-8'>Vinnies WA "Vintranet"</h3>
                            <p id="Job-Project-desc" className='pl-8'>Developed and populated a new intranet system for Vinnies WA, for use across 52 stores, warehouse depos, and head office staff. This private site hosts all internal documents, templates and forms for Vinnies WA, and is used by hundreds of staff and volunteers.</p>
                            <img id="Job-image" className='clear-both block m-auto pt-2 pr-2 w-3/4' src={Vintranet} alt="Vintranet" />
                            <p id="Job-Project-tech" className='pl-8'> <b>Technologies: </b>HTML, CSS, JavaScript, Custom CMS</p>
                        </div>
                    </Fade>

                    <hr className="Main-separator"></hr>

                    <Fade duration={1500} triggerOnce="true">
                        <div className="Job">
                            <img className="Job-logo" src={CFC} alt="CFC Logo" width="100px" height="100px" />
                            <h2 className="Job-title">Coders for Causes UWA | Volunteer Software Engineer</h2>
                            <h3 className="Job-subtitle">November 2021 - March 2022</h3>
                            <p className="Job-desc"> <b>Role: </b>Volunteer developer for the Coders For Causes club at UWA. A club that provides volunteer software engineering teams for non-profit companies and charities. I participated in one of the summer projects for the Western Australian Institute of Sport by creating a web application for the track and field division.</p>
                            <h3 className="Job-desc"> <b>Projects: </b></h3>
                            <h3 className='Job-Project-title'>Web Application for Western Australian Institute of Sport</h3>
                            <p className="Job-Project-desc">Developed a Web Application for WAIS to help visualise the performance of pole vaulters in training. We incorporated computer vision software and user input to allow coaches to best train their athletes. Worked in a large team of volunteers to develop the full stack of this application.</p>
                            <img className="Job-image" src={WAIS} alt="WAIS" />
                            <p className="Job-Project-tech"> <b>Technologies: </b>Vue.js, Django, HTML, CSS, JavaScript, Docker, PostgreSQL</p>
                            <br></br>
                        </div>
                    </Fade>
                </div>
            </div>
            <hr className="Section-separator"></hr>
        </>)
};

export default WorkExperience;