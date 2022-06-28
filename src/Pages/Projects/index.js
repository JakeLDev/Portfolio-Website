
import React from 'react';
import WAPOL from '../../Components/assets/projects/WAPOL2.png';
import MOMENTUM from '../../Components/assets/projects/MomentumTrading.png';
import RESISTANCE from '../../Components/assets/projects/Resistance.png';
import PICCOMING from "../../Components/assets/projects/image-coming.png";
import HYGIENEBOT from '../../Components/assets/projects/HygieneBot.png';
import Project from '../../Components/Project';
import ProjectThumbnail from '../../Components/ProjectThumbnail';
import { Fade } from "react-awesome-reveal";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Projects = () => {
    return (
        <>
            <div className="page" id='Projects'>
                <h1 className="title">Projects</h1>
                <h3 className="subheading" style={{ textAlign: "center" }}><a href="https://github.com/JakeLDev" target="_blank" rel="noreferrer">GitHub</a></h3>
                <div className="paragraph">
                    <p className="content" style={{ textAlign: "center" }}>Here is a list of projects that I have either completed, or am currently working on. This includes University Projects, Personal Projects, Projects for Clubs, and Jobs undertaken at work. Click the projects for more info! (More Projects are featured below in the "Work Experience" section)</p>
                </div>
                <div className="Project-container">
                    <Fade duration={1500} triggerOnce="true">
                        <div className='Project-box'>
                            <Popup
                                contentStyle={{"background": "rgba(54, 52, 52, 0.97)", "width": "80%", "maxHeight": "90vh", "overflowY": "auto", "overflowX": "hidden"}}
                                trigger={open => (<button className='modalpopup'><ProjectThumbnail title="Crime Data Visualisation for the WA Police Force"
                                                    image={WAPOL}
                                                    // desc="Created an interactive desktop application for the Data Science and Analytics Division of the WA Police Force to visualize crime data trends on an interactive heat map of Western Australia. Developed in a team of six over the course of 3 months. Our implementation involved the rapid analysis of a csv file containing 300,000 lines of time series data before displaying it within an interactive html page displayed locally. I Performed a team leadership role, including ensuring that deliverables were completed on time, and managing my team’s resources and task allocation."
                                                    // tools="Python, Pandas, PyQt5, GIS, SciPy"
                                                    // repo="Private as requested by WAPOL" 
                                                    /></button>)}
                                modal
                                nested
                            >
                                {close => (
                                    <Project title="Crime Data Visualisation for the WA Police Force"
                                        image={WAPOL}
                                        desc="Created an interactive desktop application for the Data Science and Analytics Division of the WA Police Force to visualize crime data trends on an interactive heat map of Western Australia. Developed in a team of six over the course of 3 months. Our implementation involved the rapid analysis of a csv file containing 300,000 lines of time series data before displaying it within an interactive html page displayed locally. I Performed a team leadership role, including ensuring that deliverables were completed on time, and managing my team’s resources and task allocation."
                                        tools="Python, Pandas, PyQt5, GIS, SciPy"
                                        repo="Private as requested by WAPOL" />
                                )}
                            </Popup>
                        </div>
                    </Fade>
                {/* <hr className="Sub-separator"></hr> */}
                    <Fade duration={1500} triggerOnce="true">
                        <div className='Project-box'>
                            <Popup
                                contentStyle={{"background": "rgba(54, 52, 52, 0.97)", "width": "80%", "maxHeight": "90vh", "overflowY": "auto", "overflowX": "hidden"}}
                                trigger={open => (<button className='modalpopup'><ProjectThumbnail title="Momentum Trading Algorithm"
                                                    image={MOMENTUM}
                                                    /></button>)}
                                modal
                                nested
                            >
                                {close => (<Project title="Momentum Trading Algorithm"
                                            image={MOMENTUM}
                                            desc="Created a set of algorithms to trade cryptocurrencies, based around the trading strategy of “momentum trading”. The results were then documented in a report. (The Semester 2 Project for QFin UWA’s Trading Team). Worked in a team of 3 people to create a set of Python algorithms with the goal of achieving a positive return when trading on 2020 price data for popular cryptocurrencies. Our algorithm was tested against both the market and the other trading teams’ algorithms. Our algorithm greatly outperformed the market, sometimes returning as good as 8x the return as opposed to buying and holding. We also outperformed the algorithms written by all other teams."
                                            tools="Python, Gemini Modules, Numpy, Pandas"
                                            repolink="https://github.com/QFinUWA/2021-Momentum-Trading-Buy-Low-Sell-Lower" />)}
                            </Popup>
                        </div>
                    </Fade>
                    <Fade duration={1500} triggerOnce="true">
                        <div className='Project-box'>
                            <Popup
                                contentStyle={{"background": "rgba(54, 52, 52, 0.97)", "width": "80%", "maxHeight": "90vh"}}
                                trigger={open => (<button className='modalpopup'><ProjectThumbnail title="“The Resistance” Card Game Artificial Intelligence Agent"
                                                    image={RESISTANCE}
                                                    /></button>)}
                                modal
                                nested
                            >
                                {close => (<Project title="“The Resistance” Card Game Artificial Intelligence Agent"
                                            image={RESISTANCE}
                                            desc="Researched and developed a game-playing Artificial Intelligence agent to play the card game “The Resistance” to compete in a tournament at UWA. We created an agent that utilizes Bayes’ Rule for calculating probabilities in a Bayesian, imperfect information game. Received full marks for Player vs Player performance"
                                            tools="Python"
                                            repolink="https://github.com/JakeLDev/The-Resistance-AI-CITS3001" />)}
                            </Popup>
                        </div>
                    </Fade>
                    <Fade duration={1500} triggerOnce="true">
                        <div className='Project-box'>
                            <Popup
                                contentStyle={{"background": "rgba(54, 52, 52, 0.97)", "width": "80%", "maxHeight": "90vh"}}
                                trigger={open => (<button className='modalpopup'><ProjectThumbnail title="Twitter Hygiene Bot"
                                                    image={HYGIENEBOT}
                                                    /></button>)}
                                modal
                                nested
                            >
                                {close => (<Project title="Twitter Hygiene Bot"
                                            image={HYGIENEBOT}
                                            desc="Twitter Bot that tweets at set intervals to give reminders on commonly forgotten hygiene procedures. Targeted at people new to living alone. For example: A Tweet every 3 months to remind you to change your toothbrush!" 
                                            tools="AWS Lambda, AWS EventBridge, Twitter API, Python"
                                            repolink="https://github.com/JakeLDev/Twitter-Hygiene-Bot" 
                                            demolink="https://twitter.com/HygieneBot" />)}
                            </Popup>
                        </div>
                    </Fade>
                    {/* <hr className="Sub-separator"></hr> */}
                </div>
            </div>
            <hr className="Section-separator"></hr>
        </>)
};

export default Projects;