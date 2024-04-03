import './App.css'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <div className="main flex flex-col">
        <Hero/>
        <About/>
        <Projects/>
        <Contact/>
      </div>
      <Footer/>
    </>)
}

export default App
