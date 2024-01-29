// import logo from './logo.svg';
import './App.css';
// import {useState} from 'react'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
  <>
    <Navbar/>
    <div className="main flex flex-col mx-5">
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
    <Footer/>
  </>)
}

export default App;
