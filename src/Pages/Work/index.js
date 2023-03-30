
import React from 'react';

import Vinnies from '../../Components/assets/Gray+Design+Vinnies+logo.jpg';
import Vintranet from '../../Components/assets/projects/Vintranet.png';
import QFin from '../../Components/assets/QFin-Logo2.png';
import QFinSite from '../../Components/assets/projects/QFin-site2.png';
import Atlassian from '../../Components/assets/Atlassian.png';
import Confluence from '../../Components/assets/projects/Confluence.png';
import MeanReversionProject from '../../Components/assets/projects/MeanReversionProject.png';
import CFC from '../../Components/assets/CFC.png';
import WAIS from '../../Components/assets/projects/WAIS.png';
import { Fade } from "react-awesome-reveal";
import Job from '../../Components/Job/Job';

const WorkExperience = () => {
    return (
        <>
            <div id='Work Experience Page' className="justify-center h-auto w-9/12 m-auto mb-4 mt-4 rounded max-w-7xl bg-neutral-900/30" >
                <h1 id="Jobs Title" className="w-full font-semibold m-0 text-center content-center mb-3 text-3xl">Work Experience and Roles</h1>

                <div id="Jobs" className="block p-2">

                <Fade duration={1000} triggerOnce="true">
                        <Job title="Atlassian | Junior Software Engineer" 
                            logo={Atlassian} 
                            daterange="January 2023 - Present" 
                            desc="Joined Atlassian in January 2023 as a Graduate Software Engineer. Atlassian is a software company that develops products primarily for software teams. My role involves working on both frontend and backend development for the Atlassian's Confluence product. Currently working remotely from Perth, but looking to move to Sydney sometime soon."
                                projecttitle1="Confluence Data Center"
                                projectdesc1="Developing new features for Confluence Data Center, a product that allows users to collaborate on documents and share information. The product is used by both large and small companies worldwide. My team is responsible for developing new features for the product, as well as maintaining and fixing bugs in the existing codebase when they occur."
                                projectimage1={Confluence}
                                projecttech1="Java, React, JavaScript, TypeScript, Kotlin and more"/>
                    </Fade>

                    <Fade duration={1000} triggerOnce="true">
                        <Job title="QFin UWA | Executive Director of Trading" 
                            logo={QFin} 
                            daterange="November 2021 - August 2022" 
                            desc="Worked as the Executive Director of Trading at QFin UWA for 2022. QFin is a club that focuses on trading stocks and cryptocurrencies, utilizing algorithmic approaches. The role involved creating, running and participating in projects for 2022’s Trading Team, along with organizing and running some trading-based events and workshops. I built both a website and an algorithm back-testing framework for the club over summer. As a member of the Executive team, I was also involved in making decisions around the running of the club in 2023."
                                projecttitle1="QFin UWA Website | qfinuwa.com"
                                projectdesc1="Created a Web Application and Email Domain for the QFin UWA club which displays what the club is about; our events, executive team and committee, and our sponsors. The site is accessible to both desktop and mobile users."
                                projectimage1={QFinSite}
                                projectrepo1="https://github.com/QFinUWA/qfin-website"
                                projecttech1="React, HTML, CSS, JavaScript"
                                
                                projecttitle2="Trading Team Project - Semester 1, 2022"
                                projectdesc2="Created a project for the QFin Trading Team to complete in Semester 1, 2022. This Project is focused around the concept of Mean Reversion, a mathematical theory which claims that seeing a result that is significantly above or below a mean, will mean that the next result is likely to be closer to the mean. Therefore, in theory, you can place buy or sell orders for financial assets on the basis of how far the current price is from the average price. The project will task the Trading Team with creating an optimized trading algorithm which utilizes Mean Reversion to turn a profit on historical price data."
                                projectimage2={MeanReversionProject}
                                projectrepo2="https://github.com/QFinUWA/Mean-Reversion-Trading-Team-Project-Semester-1-2022"
                                projecttech2="Python, Pandas, Numpy, Alpha Vantage Stock APIs, Custom Back-testing Framework"/>
                    </Fade>

                    <hr className="Main-separator"></hr>

                    <Fade duration={1000} triggerOnce="true">
                        <Job logo={Vinnies}
                            title="St Vincent de Paul (Vinnies WA) | Web Developer" 
                            daterange="December 2021 - June 2022" 
                            desc="Worked as a Web Developer creating the new intranet system for Vinnies WA called the 'Vintranet'. This private site hosts all internal documents, templates and forms for Vinnies WA, and is used by hundreds of staff and volunteers. I worked with the IT team to develop the site, and populate it with all the necessary documents and forms." 
                                projecttitle1='Vinnies WA "Vintranet"'
                                projectdesc1="Developed and populated a new intranet system for Vinnies WA, for use across 52 stores, warehouse depos, and head office staff. This private site hosts all internal documents, templates and forms for Vinnies WA, and is used by hundreds of staff and volunteers."
                                projectimage1={Vintranet}
                                projecttech1="HTML, CSS, JavaScript, Custom CMS"/>
                    </Fade>
                    <hr className="Main-separator"></hr>
                    
                    <Fade duration={1000} triggerOnce="true">
                        <Job logo={CFC}
                            title="Coders for Causes UWA | Volunteer Software Engineer"
                            daterange="November 2021 - March 2022"
                            desc="Volunteer Developer for the Coders For Causes club at UWA. A club that provides volunteer software engineering teams for non-profit companies and charities. I participated in one of the summer projects for the Western Australian Institute of Sport by creating a web application for the track and field division."
                                projecttitle1="Web Application for Western Australian Institute of Sport"
                                projectdesc1="Developed a Web Application for WAIS to help visualise the performance of pole vaulters in training. We incorporated computer vision software and user input to allow coaches to best train their athletes. Worked in a large team of volunteers to develop the full stack of this application."
                                projectimage1={WAIS}
                                projecttech1="Vue.js, Django, HTML, CSS, JavaScript, Docker, PostgreSQL"/>
                    </Fade>
                </div>
            </div>
            <hr className="Section-separator"></hr>
        </>)
};

export default WorkExperience;