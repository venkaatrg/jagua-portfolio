import React from 'react';
//import footer data
import { footerData } from '../data';
//import motion
import { motion } from 'framer-motion';
//import variants
import { fadeIn } from '../variants';

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
      delayChildren:0.2,
    },
  },
};

const Footer = () => {
  //destructure footer data
  const { about, links, program } = footerData;
  return (
    <footer className='section bg-dark'>
      <div className='container mx-auto'>
        <motion.div variants={staggerContainer}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.1 }}
        className='text-white flex flex-col
        lg:flex-row lg:justify-between gap-x-5 gap-y-14'>
          <motion.div 
          variants={fadeIn('up')}
          className='flex-1 flex flex-col gap-y-6'>
            <div className='font-pimary text-xl uppercase
            tracking-[0.08em]'>
              {about.title}</div>
            <div className='leading-relaxed text-[#dbdbdb]'>
              {about.subtitle}</div>
            <div className='flex flex-col gap-y-4 font-semibold text-[#dbdbdb]'>
              <div className='flex items-center gap-x-[10px]'>
                <div>{about.address.icon}</div>
                <div>{about.address.name}</div>
              </div>
              <div className-='flex items-center gap-x-[10px]'>
                <div>{about.phone.icon}</div>
                <div>{about.phone.number}</div>
              </div>
              <div className='flex items-center gap-x-[10px]'>
                <div>{about.email.icon}</div>
                <div>{about.email.address}</div>
              </div>
            </div> 
          </motion.div>
          <motion.div
          variants={fadeIn('up')}
          className='flex-1 flex flex-col xl:items-center'>
            <div>
              <div className='font-primary text-xl uppercase tracking-[0.08em] mb-6'>{links.title}</div>
              <ul className='flex flex-col gap-y-4 text-[#dbdbdb]'>
                {links.items.map((item, index) => {
                  const { href, name } = item;
                  return (
                    <li key={index}>
                      <a href={href} className='hover:text-white transition'>
                        {name}
                      </a>
                    </li>
                )})}
              </ul>
            </div>
          </motion.div>
          <motion.div
          variants={fadeIn('up')}
          className='flex-1 flex flex-col xl:items-center'>
            <div className='font-primary text-xl uppercase tracking-[0.08em] mb-6'>
              {program.title}
            </div>
            <ul className='flex flex-col gap-y-4 text-[#dbdbdb]'>
              {program.items.map((item, index) => {
                return (
                  <li key={index}>
                    {item.name}
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )

  /*return (
    <section>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-y-16'>
          <motion.div
            variants={fadeIn('right')}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.4 }}
            className='flex-1'>
            <h2 className='h2 max-w-[490px]'>
              {about.title}
            </h2>
            <div className='mb-8 text-[#333] leading-[187%] tracking-[0.02em]'>
              {about.subtitle}
            </div>
            <div className='flex flex-col gap-y-3'>
              <div className='flex items-center gap-[10px]'>
                <div>{about.address.icon}</div>
                <div className='font-medium'>{about.address.name}</div>
              </div>
              <div className='flex items-center gap-[10px]'>
                <div>{about.phone.icon}</div>
                <div className='font-medium'>{about.phone.number}</div>
              </div>
              <div className='flex items-center gap-[10px]'>
                <div>{about.email.icon}</div>
                <div className='font-medium'>{about.email.address}</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('right')}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.4 }}
            className='flex-1'>
            <h2 className='h2 max-w-[490px]'>
              {links.title}
            </h2>
            <div className='flex flex-col gap-y-3'>
              {links.items.map((item, index) => {
                return (
                  <a
                    key={index}
                    className='font-medium border-b border-dark pb-[5px] cursor-pointer'
                    href={item.href}>
                    {item.name}
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );*/
};

export default Footer;
