
import React from 'react';
import Jake from '../../Components/assets/portraits/JakeLyell.jpg';
import { Fade } from "react-awesome-reveal";

const AboutMe = () => {
  return (
    <>
      <div className="page" id='About Me'>
        <div className="portrait-container">
          <img className="portrait" src={Jake} alt="Portrait of Jake"></img>
        </div>
        <h1 className="title">About me</h1>
        <div className="paragraph">
          <p className="content" style={{ textAlign: "center" }}>My name is Jake Lyell, I'm a 20 year old Computer Science student pursuing a career in Software Engineering. Recently accepted an offer for a 2023 Graduate Position at Atlassian!</p>
        </div>
        <h2 className="subheading">Education</h2>
        <div className="paragraph">
          <p className="content"> I'm currently studying a Bachelor of Science with a Double Major in Computer Science and Data Science at the University of Western Australia. Graduating in June 2022.
            After graduation, I am planning to begin an Honours in Computer Science and Software Engineering in Semester 2, 2022. <br></br>
            I graduated High School in 2018 with an ATAR of 94.25.
          </p>
        </div>
        <h2 className="subheading">Hobbies</h2>
        <div className="paragraph">
          <p className="content"> I enjoy playing video games, building computers and completing coding projects either for my own amusement or for one of the university clubs that I am involved in.
            I have also recently started building and programming keyboards, starting with the relatively simple GMMK Pro and moving onto soldering a Dumbpad (12 key macropad with rotary encoder).
            I have also built and programmed a Sofle v2 split ortholinear keyboard.</p>
        </div>
        <h2 className="subheading">Skills</h2>
        <Fade duration={2000} triggerOnce="true">
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
        </Fade>
      </div>
      <hr className="Section-separator"></hr>
    </>)
};

export default AboutMe;