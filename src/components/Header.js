import React from 'react';
import { useState, useEffect } from 'react';
// import header data
import { headerData } from '../data';
// import navbar
import Nav from './Nav';
// import mobile navbar
import NavMobile from './NavMobile';
// import socials 
import Socials from './Socials';

//import icons 
import {TiThMenuOutline} from 'react-icons/ti';


const Header = () => {
  const {logo} = headerData;
  const [isActive, setIsActive] = useState(false);
  const [navMobile, setNavMobile] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false); 
    });
  });
  return (
    <header 
      className={`${
        isActive 
          ? 'bg-white h-[80px] lg:h-[110px] shadow-lg' 
          : 'bg-white h-[100px] lg:h-[150px] shadow-lg' 
        }
        fixed left-0 right-0 z-10 max-w-[1920px]
        w-full mx-auto transition-all duration-300`}
    >
      <div className='flex justify-between items-center
      h-full pl-[50px] pr-[60px]'> 
        <a href='/'>
          <img src={logo} alt='logo' className='h-[90px] w-[188px]'/>
        </a>

        <div className='hidden xl:flex'>
          <Nav />
        </div>
        <div 
        onClick={()=> setNavMobile(!navMobile)}
        className='xl:hidden absoulte right-[5%] 
        bg-dark text-white p-2 rounded-md cursor-pointer'>
          <TiThMenuOutline className='text-3xl' />
        </div>

        <div className={`${
          navMobile 
          ? 'max-h-full' 
          : 'max-h-0'
        } ${isActive 
          ? 'top-[100px] lg:top-[110px]'
          : 'top-[120px] lg:top-[150px]'
        } fixed bg-white w-full h-full
        left-0 -z-10 transition-all duration-300`}>
          <NavMobile />
        </div>
        <div className='hidden xl:flex'>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
