import React from 'react';
import ParticlesCanvas from '../../Components/Particles';
import Banner from '../../Components/Banner';
import Project from '../../Components/Project';

import Jake from '../../Components/assets/portraits/JakeLyell.jpg';
import WAPOL from '../../Components/assets/projects/WAPOL2.png';
import MOMENTUM from '../../Components/assets/projects/MomentumTrading.png';
import RESISTANCE from '../../Components/assets/projects/Resistance.png';

const Home = () => {
  return (
    <>
        <Banner />
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

        <div className="page" id='Projects'>

          <h1 className="title">Projects</h1>
          <div className="paragraph">
            <p className="content" style={{textAlign: "center"}}>Here is a list of projects that I have either completed, or am currently working on. This includes University Projects, Personal Projects, Projects for Clubs, and Jobs undertaken at work.</p>
          </div>
          <div className="Project-container">
            <Project title="Crime Data Visualisation for the WA Police Force"
              image= {WAPOL}
              desc= "Created an interactive desktop application for the Data Science and Analytics Division of the WA Police Force to visualize crime data trends on an interactive heat map of Western Australia. Developed in a team of six over the course of 3 months. Our implementation involved the rapid analysis of a csv file containing 300,000 lines of time series data before displaying it within an interactive html page displayed locally. I Performed a team leadership role, including ensuring that deliverables were completed on time, and managing my team’s resources and task allocation."
              tools="Python, Pandas, PyQt5, GIS, SciPy"
              repo="Private as requested by WAPOL" />

            <Project title="Momentum Trading Algorithm"
              image= {MOMENTUM}
              desc= "Created a set of algorithms to trade cryptocurrencies, based around the trading strategy of “momentum trading”. The results were then documented in a report. (The Semester 2 Project for QFin UWA’s Trading Team). Worked in a team of 3 people to create a set of Python algorithms with the goal of achieving a positive return when trading on 2020 price data for popular cryptocurrencies. Our algorithm was tested against both the market and the other trading teams’ algorithms. Our algorithm greatly outperformed the market, sometimes returning as good as 8x the return as opposed to buying and holding. We also outperformed the algorithms written by all other teams."
              tools="Python, Gemini Modules, Numpy, Pandas"
              repolink="https://github.com/QFinUWA/2021-Momentum-Trading-Buy-Low-Sell-Lower" />

            <Project title="“The Resistance” Card Game Artificial Intelligence Agent"
              image= {RESISTANCE}
              desc= "Researched and developed a game-playing Artificial Intelligence agent to play the card game “The Resistance” to compete in a tournament at UWA. We created an agent that utilizes Bayes’ Rule for calculating probabilities in a Bayesian, imperfect information game."
              tools="Python"
              repolink="https://github.com/JakeL1001/The-Resistance-AI-CITS3001"/>
          </div>
        </div>

        <div className="page" id='Work Experience'>


        </div>
    </>
  );
};
  
export default Home;