import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import MyFooter from './Components/MyFooter';
import ScrollButton from './Components/ScrollButton';

import Home from './Pages';

function App() {
  return (
    <>
    <Navbar />
    <Home/>
    <ScrollButton />
    <MyFooter />
    </>
  );
}


export default App;