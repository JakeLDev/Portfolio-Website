import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import MyFooter from './Components/MyFooter';
import Banner from './Components/Banner'; 
import ScrollButton from './Components/ScrollButton';

import Home from './Pages';

function App() {
  return (
    <>
    <Router>
      {/* <Banner /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/qfin-website" element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/events' element={<Events/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/team' element={<Teams/>} />
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/sign-up' element={<SignUp/>} /> */}
      </Routes>
      <ScrollButton />
    </Router>
    <MyFooter />
    </>
  );
}

export default App;
