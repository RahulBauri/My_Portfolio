import React from 'react';
import Header from './components/Header';
import Info from './components/Info';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <div className='max-w-[85%] h-full mx-auto my-8 flex flex-col py-4'>
        <Info />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default App;
