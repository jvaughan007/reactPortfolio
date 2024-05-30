import React from 'react';
import NavBar from './components/NavBar';
import Intro from './components/Intro';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';


const App = () => {
  return (
    <main>
      <NavBar />
      <Intro />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}


export default App;
