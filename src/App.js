import React from 'react';
import { initializeApp } from "firebase/app";
import { useEffect } from 'react';

// import components
import Hero from './components/Hero';
import Header from './components/Header';
import About from './components/About';
import GallerySection from './components/GallerySection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Copyright from './components/Copyright';

const firebaseConfig = {
  apiKey: "AIzaSyCPF0Irf6J1nbkgLnJwwC0FmCb1oCxJeVM",
  authDomain: "contraste-c62b6.firebaseapp.com",
  projectId: "contraste-c62b6",
  storageBucket: "contraste-c62b6.appspot.com",
  messagingSenderId: "808506002730",
  appId: "1:808506002730:web:78c75ab0e86183e492a253",
  measurementId: "G-Q60L4X32N3"
}

const App = () => {
  useEffect(() => {initializeApp(firebaseConfig);
  }, []);
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
