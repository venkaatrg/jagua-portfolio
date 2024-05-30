import React from 'react';

// import components
import Hero from './components/Hero';
import Header from './components/Header';
import About from './components/About';
import GallerySection from './components/GallerySection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Copyright from './components/Copyright';

const App = () => {
  return (
    <div className='max-w-[1920px] mx-auto overflow-hidden bg-white'>
      <Header />
      <div id='hero'><Hero/></div>
      <div id='about'><About /></div>
      <div id='gallery'><GallerySection /></div>
      <div id='contact'><Contact /></div>
      <Footer />
      <Copyright />
    </div>
  );
};

export default App;
