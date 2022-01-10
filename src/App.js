import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import MyFooter from './Components/MyFooter';
import ScrollButton from './Components/ScrollButton';

import About from './Pages/About';

function App() {
  return (
    <>
    <Router>
      {/* <Banner /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<About/>} />
      </Routes>
      <ScrollButton />
    </Router>
    <MyFooter />
    </>
  );
}


export default App;