import React from 'react';
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

function App() {
  return (
    <>
    <Navbar />
    <Banner title="Software Engineer"/>
    <ParticlesCanvas />

    <AboutMe />
    <Projects />
    <WorkExperience />
    <Events />

    <ScrollButton />
    <MyFooter />
    </>
  );
}


export default App;