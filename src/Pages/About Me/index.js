
import React from 'react';
import Jake from '../../Components/assets/portraits/JakeLyellTiny.jpg';
import { Fade } from "react-awesome-reveal";

const AboutMe = () => {
  return (
    <>
      <div id='About Me Page' className="justify-center h-auto w-9/12 m-auto my-4 rounded max-w-7xl bg-neutral-900/30">
        <div id="portrait-container" className="flex flex-row justify-center items-center m-auto mt-2 mb-2">
          <img id="portrait" className="object-cover p-2 max-w-xs" src={Jake} alt="Portrait of Jake"></img>
        </div>
        <h1 id="About Me Title" className="w-full font-semibold m-0 text-center content-center text-3xl">About me</h1>
          <p className="m-0 p-2 text-center mx-auto max-w-xl">My name is Jake Lyell, I'm a 23 year old Software Engineer, currently working at Atlassian as a Full Stack Software Engineer on Confluence Data Center</p>
        <h2 className="w-full font-semibold m-0 text-xl px-2">Education</h2>
        <p className="m-0 p-2"> I graduated from the University of Western Australia with a Bachelor of Science with a Double Major in Computer Science and Data Science in June 2022.
          After graduation, I spent some time self-teaching and travelling around Korea and Japan with my friends before starting work at Atlassian in Jan 2023.<br></br>
          </p>
        <h2 className="w-full font-semibold m-0 text-xl px-2">Hobbies</h2>
        <p className="m-0 p-2"> I enjoy playing video games, building computers and completing coding projects for my own amusement.
          I have also recently started building and programming keyboards, starting with the relatively simple GMMK Pro and moving onto soldering a Dumbpad (12 key macropad with rotary encoder).
          I have also built and programmed a Sofle v2 split ortholinear keyboard.</p>
        <p className="m-0 p-2">I'm based in Sydney as of March 2024</p>
        <h2 className="w-full font-semibold m-0 text-xl px-2">Skills</h2>
        <p className="m-0 p-2">At Atlassian I primarily use Java for backend work, and TypeScript/JavaScript for frontend work, so I'd say I'm most proficient in these in a professional context. However Python is still my favourite language for quick scripts, webscrapers etc, due to my experience with it at University.</p>
        <Fade duration={1000} triggerOnce="true">
          <ul className="list-none flex flex-wrap justify-center p-0 max-w-3xl mx-auto">
            <li className="skill">
              <span class="iconify" data-icon="logos:python" data-width="90" data-height="90"></span>
              <p>Python</p>
            </li>
            <li className="skill">
              <span class="iconify" data-icon="logos:java" data-width="90" data-height="90"></span>
              <p>Java</p>
            </li>
            <li className="skill">
              <span class="iconify" data-icon="logos:javascript" data-width="90" data-height="90"></span>
              <p>JavaScript</p>
            </li>
            <li className="skill">
              <span class="iconify" data-icon="vscode-icons:file-type-typescript-official" data-width="90" data-height="90"></span>
              <p>TypeScript</p>
            </li>
            <li className="skill">
              <span class="iconify" data-icon="logos:git-icon" data-width="90" data-height="90"></span>
              <p>Git</p>
            </li>
            <li className="skill">
              <span class="iconify" data-icon="logos:react" data-width="90" data-height="90"></span>
              <p>React</p>
            </li>
            <li className="skill">
              <span class="iconify" data-icon="logos:html-5" data-width="90" data-height="90"></span>
              <p>HTML</p>
            </li>
            <li className="skill">
              <span class="iconify" data-icon="logos:css-3" data-width="90" data-height="90"></span>
              <p>CSS</p>
            </li>
            <li className="skill">
              <span class="iconify" data-icon="logos:aws-lambda" data-width="90" data-height="90"></span>
              <p>AWS Lambda</p>
            </li>
            <li className="skill">
              <span class="iconify" data-icon="logos:vue" data-width="90" data-height="90"></span>
              <p>Vue.js</p>
            </li>
            {/* <li className="skill">
              <span class="iconify" data-icon="logos:r-lang" data-width="90" data-height="90"></span>
              <p>R</p>
            </li> */}
            <li className="skill">
              <span class="iconify" data-icon="logos:linux-tux" data-width="90" data-height="90"></span>
              <p>Linux</p>
            </li>
            <li className="skill">
              <span class="iconify" data-icon="logos:mysql" data-width="90" data-height="90"></span>
              <p>MySQL</p>
            </li>
            {/* <li className="skill">
              <span class="iconify" data-icon="logos:c-plusplus" data-width="90" data-height="90"></span>
              <p>C++</p>
            </li> */}
            {/* <li className="skill">
              <span class="iconify" data-icon="logos:c" data-width="90" data-height="90"></span>
              <p>C</p>
            </li> */}
            <li className="skill">
              <span class="iconify" data-icon="logos:docker-icon" data-width="90" data-height="90"></span>
              <p>Docker</p>
            </li>
          </ul>
        </Fade>
      </div>
      <hr className="Section-separator"></hr>
    </>)
};

export default AboutMe;