import React from 'react';
import './App.css';
import MyFooter from './Components/MyFooter';
import ScrollButton from './Components/ScrollButton';
import ParticlesCanvas from './Components/Particles';
import { Routes, Route } from 'react-router-dom';


import Blog from './Pages/Blog';
import Master from './Pages/Master';

import { ThemeProvider } from "styled-components"
import {darkTheme, GlobalStyles} from "./themes.js"

function App() {

  return (
    <>
        <ThemeProvider theme={darkTheme}>
          <GlobalStyles />
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