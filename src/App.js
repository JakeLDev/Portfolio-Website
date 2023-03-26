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

function App() {

  const [theme, setTheme] = useState('dark');


  return (
    <>
        <ThemeProvider theme={theme === "dark" ? darkTheme : synthTheme}>
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