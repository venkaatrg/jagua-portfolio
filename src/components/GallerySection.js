import React from 'react';
import 'yet-another-react-lightbox/styles.css';
import {useState} from 'react';
//import gallery data
import { galleryData } from '../data';
//import photo album & lightbox 
import PhotoAlbum from 'react-photo-album';
//lightbox css
import Lightbox from 'yet-another-react-lightbox';
//import motion
import { motion } from 'framer-motion';
//import variants
import { fadeIn } from '../variants';

const slides = galleryData.images.map(({original, width, height}) => ({
  src: original, 
  width,
  height,
}));

const GallerySection = () => {
  //index state of images
  const [index, setIndex] = useState(-1);
  //destructure gallery data
  const { title, btnText, btnIcon } = galleryData;
  return (
  <section className='bg-[#f9f9f9] section 
  relative mt-[40px] lg:mt-0'>
    <div className='container mx-auto'>
      <motion.h2
      variants={fadeIn('up')}
      initial='hidden'
      whileInView={'show'}
      viewport={{ once: false, amount:0.6 }}
      className='h2 max-w-[360px] lg:mb-20'>{title}</motion.h2>
    </div>
    <motion.div 
    variants={fadeIn('up')}
    initial='hidden'
    whileInView={'show'}
    viewport={{ once: false, amount:0.2 }}
    className='mb-8 lg:mb-20'>
      <PhotoAlbum 
      onClick={(event, photo, index) => setIndex(index)}
      layout='rows' 
      photos={galleryData.images}
      />
      <Lightbox
      slides = {slides}
      styles={{container: {backgroundColor:'rgba(0,0,0,.9)'}
      }}
      open={index >= 0}
      index={index}
      close={() => setIndex(-1)} 


      />
    </motion.div>
    <motion.div
    variants={fadeIn('up')}
    initial='hidden'
    whileInView={'show'}
    viewport={{ once: false, amount:0.2 }}
    className='flex justify-center'>
      <button className='btn btn-lg btn-dark'>
        {btnText}
        <div className='text-xl'>
          {btnIcon}
        </div>
      </button>
    </motion.div>
  </section>
  );
};

export default GallerySection;
