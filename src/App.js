import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import MyFooter from './Components/MyFooter';
import ScrollButton from './Components/ScrollButton';
import ParticlesCanvas from './Components/Particles';
import Banner from './Components/Banner';

import AboutMe from './Pages/About Me';
import Projects from './Pages/Projects';
import WorkExperience from './Pages/Work';
import Events from './Pages/Events';

import { ThemeProvider } from "styled-components"
import {darkTheme, synthTheme, GlobalStyles} from "./themes.js"

import synthwave from './Components/assets/vaporwave.png'

function App() {

  const [theme, setTheme] = useState('dark');

  const themeToggler = () => {
    theme === 'dark' ? setTheme('synth') : setTheme('dark');
  }

  return (
    <>
      <ThemeProvider theme={theme === "dark" ? darkTheme : synthTheme}>
        <GlobalStyles />
          <img id='synthToggle' src={synthwave} alt="synthwave toggle" onClick={themeToggler} style={{'position' : 'fixed', "left": 10, "bottom": 0, "cursor": "pointer", "maxHeight": 50}}/>
          <Navbar />
          <Banner title="Software Engineer" />
          <ParticlesCanvas />

          <AboutMe />
          <Projects />
          <WorkExperience />
          <Events />

          <ScrollButton />
          <MyFooter />
      </ThemeProvider>
    </>
  );
}


export default App;