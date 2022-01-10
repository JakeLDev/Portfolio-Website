import React from 'react';
import ParticlesCanvas from '../Components/Particles';
import Banner from '../Components/Banner';
import Project from '../Components/Project';

import Jake from '../Components/assets/portraits/JakeLyell.jpg';
import WAPOL from '../Components/assets/projects/WAPOL2.png';
import MOMENTUM from '../Components/assets/projects/MomentumTrading.png';
import RESISTANCE from '../Components/assets/projects/Resistance.png';

import Vinnies from '../Components/assets/Gray+Design+Vinnies+logo.jpg';
import Vintranet from '../Components/assets/projects/Vintranet.png';
import QFin from '../Components/assets/QFin-Logo.png';
import QFinSite from '../Components/assets/projects/QFin-site.png';
import CFC from '../Components/assets/CFC.png';
import WAIS from '../Components/assets/projects/WAIS.png';

const Home = () => {
  return (
    <>
      <Banner title="Software Engineer"/>
      <ParticlesCanvas />
      <div className="page" id='About Me'>
        <div className="portrait-container">
          <img className="portrait" src={Jake} alt="Portrait of Jake"></img>
        </div>
        <h1 className="title">About me</h1>
        <div className="paragraph">
          <p className="content" style={{textAlign: "center"}}>My name is Jake Lyell, I'm a 20 year old Computer Science student pursuing a career in Software Engineering.</p>
        </div>
        <h2 className="subheading">Education</h2>
        <div className="paragraph">
          <p className="content"> I'm currently studying a Bachelor of Science with a Double Major in Computer Science and Data Science at the University of Western Australia. Graduating in July 2022.
                                  After graduation, I am planning to begin an Honours in Computer Science and Software Engineering in Semester 2, 2022. <br></br>
                                  I graduated High School in 2018 with an ATAR of 94.25
                                  </p>
        </div>
        <h2 className="subheading">Hobbies</h2>
        <div className="paragraph">
          <p className="content"> I enjoy playing video games, building computers and completing coding projects either for my own amusement or for one of the university clubs that I am involved in.
                                  I have also recently started building and programming keyboards, starting with the relatively simple GMMK Pro and moving onto soldering a Dumbpad (12 key macropad with rotary encoder).
                                  Soon I will be building and programming a Sofle v2 split keyboard too.</p>
        </div>
        <h2 className="subheading">Skills</h2>
        <ul className="skills">
          <li className="skill">
            <span class="iconify" data-icon="logos:python" data-width="60" data-height="60"></span>
            <p>Python</p>
          </li>
          <li className="skill">
            <span class="iconify" data-icon="logos:javascript" data-width="60" data-height="60"></span>
            <p>JavaScript</p>
          </li>
          <li className="skill">
          <span class="iconify" data-icon="logos:git-icon" data-width="60" data-height="60"></span>
            <p>Git</p>
          </li>
          <li className="skill">
          <span class="iconify" data-icon="logos:html-5" data-width="60" data-height="60"></span>
            <p>HTML</p>
          </li>
          <li className="skill">
          <span class="iconify" data-icon="logos:css-3" data-width="60" data-height="60"></span>
            <p>CSS</p>
          </li>
          <li className="skill">
          <span class="iconify" data-icon="logos:react" data-width="60" data-height="60"></span>
            <p>React</p>
          </li>
          <li className="skill">
          <span class="iconify" data-icon="logos:vue" data-width="60" data-height="60"></span>
            <p>Vue.js</p>
          </li>
          <li className="skill">
          <span class="iconify" data-icon="logos:r-lang" data-width="60" data-height="60"></span>
            <p>R</p>
          </li>
          <li className="skill">
          <span class="iconify" data-icon="logos:linux-tux" data-width="60" data-height="60"></span>
            <p>Linux</p>
          </li>
          <li className="skill">
          <span class="iconify" data-icon="logos:mysql" data-width="60" data-height="60"></span>
            <p>MySQL</p>
          </li>
          <li className="skill">
          <span class="iconify" data-icon="logos:java" data-width="60" data-height="60"></span>
            <p>Java</p>
          </li>
          <li className="skill">
          <span class="iconify" data-icon="logos:c-plusplus" data-width="60" data-height="60"></span>
            <p>C++</p>
          </li>
          <li className="skill">
          <span class="iconify" data-icon="logos:c" data-width="60" data-height="60"></span>
            <p>C</p>
          </li>
          <li className="skill">
          <span class="iconify" data-icon="logos:docker-icon" data-width="60" data-height="60"></span>
            <p>Docker</p>
          </li>
        </ul>
      </div>

      <hr className="Section-separator"></hr>

      <div className="page" id='Projects'>

        <h1 className="title">Projects</h1>
        <h3 className="subheading" style={{textAlign: "center"}}><a href="https://github.com/JakeL1001" target="_blank">GitHub</a></h3>
        <div className="paragraph">
          <p className="content" style={{textAlign: "center"}}>Here is a list of projects that I have either completed, or am currently working on. This includes University Projects, Personal Projects, Projects for Clubs, and Jobs undertaken at work.</p>
        </div>
        <div className="Project-container">
        <hr className="Sub-separator"></hr>
          <Project title="Crime Data Visualisation for the WA Police Force"
            image= {WAPOL}
            desc= "Created an interactive desktop application for the Data Science and Analytics Division of the WA Police Force to visualize crime data trends on an interactive heat map of Western Australia. Developed in a team of six over the course of 3 months. Our implementation involved the rapid analysis of a csv file containing 300,000 lines of time series data before displaying it within an interactive html page displayed locally. I Performed a team leadership role, including ensuring that deliverables were completed on time, and managing my team’s resources and task allocation."
            tools="Python, Pandas, PyQt5, GIS, SciPy"
            repo="Private as requested by WAPOL" />

          <hr className="Sub-separator"></hr>

          <Project title="Momentum Trading Algorithm"
            image= {MOMENTUM}
            desc= "Created a set of algorithms to trade cryptocurrencies, based around the trading strategy of “momentum trading”. The results were then documented in a report. (The Semester 2 Project for QFin UWA’s Trading Team). Worked in a team of 3 people to create a set of Python algorithms with the goal of achieving a positive return when trading on 2020 price data for popular cryptocurrencies. Our algorithm was tested against both the market and the other trading teams’ algorithms. Our algorithm greatly outperformed the market, sometimes returning as good as 8x the return as opposed to buying and holding. We also outperformed the algorithms written by all other teams."
            tools="Python, Gemini Modules, Numpy, Pandas"
            repolink="https://github.com/QFinUWA/2021-Momentum-Trading-Buy-Low-Sell-Lower" />

          <hr className="Sub-separator"></hr>

          <Project title="“The Resistance” Card Game Artificial Intelligence Agent"
            image= {RESISTANCE}
            desc= "Researched and developed a game-playing Artificial Intelligence agent to play the card game “The Resistance” to compete in a tournament at UWA. We created an agent that utilizes Bayes’ Rule for calculating probabilities in a Bayesian, imperfect information game."
            tools="Python"
            repolink="https://github.com/JakeL1001/The-Resistance-AI-CITS3001"/>
        </div>
      </div>

      <hr className="Section-separator"></hr>

      <div className="page" id='Work Experience'>
        <h1 className="title">Work Experience and Roles</h1>

        <div className="Jobs">
          <div className="Job">
            <img className="Job-logo" src={Vinnies} alt="Vinnies Logo" width="100px" height="100px"/>
            <h2 className="Job-title">Saint Vincent de Paul (Vinnies WA) | Web Developer</h2>
            <h3 className="Job-subtitle">December 2021 - Present</h3>
            <p className="Job-desc"> <b>Role: </b>Temporary Web Developer creating the new intranet system for Vinnies WA called the "Vintranet"</p>
            <h3 className="Job-desc"> <b>Projects: </b></h3>
            <h3 className='Project-title'>Vinnies WA "Vintranet"</h3>
            <p className="Project-desc">Developed and populated a new intranet system for Vinnies WA, for use across 52 stores, warehouse depos, and head office staff. This private site hosts all internal documents, templates and forms for Vinnies WA, and is used by hundreds of staff and volunteers.</p>
            <img className="Job-image" src={Vintranet} alt="Vintranet"/>
            <p className="Job-desc"> <b>Technologies: </b>HTML, CSS, JavaScript</p>
          </div>

          <hr className="Main-separator"></hr>

          <div className="Job">
            <img className="Job-logo" src={QFin} alt="QFin Logo" width="100px" height="100px"/>
            <h2 className="Job-title">QFin UWA | Executive Director of Trading</h2>
            <h3 className="Job-subtitle">November 2021 - Present</h3>
            <p className="Job-desc"> <b>Role:</b> Recently elected Executive Director of Trading at QFin UWA for 2022. QFin is a club that focuses on trading stocks and cryptocurrencies, utilizing algorithmic approaches. The role involves creating, running and participating in projects for 2022’s Trading Team, along with organizing and running some trading-based events and workshops. Currently in the process of building both a website and an algorithm back testing framework for the club over summer. As a member of the Executive team, I am also involved in making decisions around the running of the club next year.</p>
            
            <h3 className="Job-desc"> <b>Projects: </b></h3>

            <h3 className='Project-title'>QFin UWA Website (In Progress)</h3>
            <p className="Project-desc">Creating a Web Application and Email Domain for the QFin UWA club which will display what the club is about our events, executive team and committee, and our sponsors. I am working alongside other developers within QFin to develop the website. The site will be accessible to both desktop and mobile users.</p>
            <img className="Job-image" src={QFinSite} alt="QFin website"/>
            <p className="Job-desc"> <b>Technologies: </b>React, HTML, CSS, JavaScript</p>

            <hr className="Sub-separator"></hr>

            <h3 className='Project-title'>QFin UWA Algorithm Back-testing Framework (In Progress)</h3>
            <p className='Project-desc'>In the process of creating a rapid back testing framework to test the performance of quantitative trading algorithms for use by the 2022 QFin Trading Team. It will allow users to test their quantitative algorithms on historical price data for stocks and cryptocurrencies. It will also be optimized to allow for multicore processing and parameter sweeping for algorithm optimization. We hope to have this framework be published on PyPI for easy installation through pip for use in educational workshops run by QFin.</p>
            <p className="Job-desc"> <b>Technologies: </b>Python, Pandas, Vectorbt, Numpy, Stock APIs</p>

            <hr className="Sub-separator"></hr>

            <h3 className='Project-title'>Trading Team Project Semester 1, 2022</h3>
            <p className='Project-desc'>Currently in the process of creating a project for the QFin Trading Team to complete in Semester 1, 2022. This Project is focused around the concept of Mean Reversion, a mathematical theory which claims that seeing a result that is significantly above or below a mean, will mean that the next result is likely to be closer to the mean. Therefore in theory you can place buy or sell orders for financial assets on the basis of how far the current price is from the average price. The project will task the Trading Team with creating an optimized trading algorithm which utilizes Mean Reversion to turn a profit on historical price data.</p>
            <p className='Project-desc'>The results of this project will be featured on the QFin GitHub after completion</p>
            <p className="Job-desc"> <b>Technologies: </b>Python, Vectorbt, Numpy, Stock APIs, QFin Back-testing Framework</p>
          </div>

          <hr className="Main-separator"></hr>

          <div className="Job">
            <img className="Job-logo" src={CFC} alt="CFC Logo" width="100px" height="100px"/>
            <h2 className="Job-title">Coders for Causes UWA | Volunteer Software Engineer</h2>
            <h3 className="Job-subtitle">November 2021 - Present</h3>
            <p className="Job-desc"> <b>Role: </b>Volunteer developer for the Coders For Causes club at UWA. A club that provides volunteer software engineering teams for non-profit companies and charities. I am participating in one of the summer projects for the Western Australian Institute of Sport in creating a web application for the track and field division.</p>
            <h3 className="Job-desc"> <b>Projects: </b></h3>
            <h3 className='Project-title'>Web Application for Western Australian Institute of Sport</h3>
            <p className="Project-desc">Creating a Web Application for WAIS to help visualise the performance of pole vaulters in training. We will be incorporating computer vision software and user input to allow coaches to best train their athletes. Working in a team of volunteers through Coders For Causes.</p>
            <img className="Job-image" src={WAIS} alt="WAIS"/>
            <p className="Job-desc"> <b>Technologies: </b>Vue.js, Django, HTML, CSS, JavaScript, Docker</p>
            <br></br>
          </div>
        </div>
      </div>
    </>
  );
};
  
export default Home;