import React, { useState } from 'react';
import './App.css';
import MyFooter from './Components/MyFooter';
import ScrollButton from './Components/ScrollButton';
import ParticlesCanvas from './Components/Particles';
import { Routes, Route } from 'react-router-dom';


import Blog from './Pages/Blog';
import Master from './Pages/Master';

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
            <ParticlesCanvas />

            <Routes>
              <Route path="/" element={<Master />}></Route>
              <Route path="/Blog" element={<Blog />}></Route>
            </Routes>

            <ScrollButton />
            <MyFooter />
        </ThemeProvider>
    </>
  );
}


export default App;