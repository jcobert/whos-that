import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer"
import Home from './Home';
import About from "./About";
import Contact from './Contact';
import Careers from './Careers';

function App() {

  return (
    <div className='flex-grow'>
      <Header />
      <div className='min-h-screen flex flex-col'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
