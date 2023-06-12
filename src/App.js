import React from 'react';
import './App.css';
import './components/header/header.css'
import Header from './components/header/header';
import Home from './components/home/Home';
import About from './components/About/About';
import Skills from './components/skills/Skills';
import Services from './components/Services/Services';
import Qualification from './components/qualification/Qualification'
import Testimonial from './components/testimonial/Testimonial';
import Contact from './components/contact/Contact';
import Footer from './components/Footer/Footer';
import Scrollup from './components/Scrollup/Scrollup';

function App() {
  return (
    <>
    <Header/>
    <main className="main">
      <Home/>
      <About/>
      <Skills/>
      <Services/>
      <Qualification/>
      <Testimonial/>
      <Contact/>
    </main>
      <Footer/>
      <Scrollup/>
    </>
  );
}

export default App;
