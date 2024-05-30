import React from 'react';
//import nav data
import {navData} from '../data';


const Nav = () => {
  const {items} = navData;
  return <nav>
    <ul className='flex justify-flex-start gap-x-[128px]'>
      {items.map((item, index) => {
        return <li key={index}>
          <a className='link hover:border-b-2 hover:border-dark transition duration-300' 
          href={item.isExternal ? item.href : `#${item.href}`} 
          target={item.isExternal ? "_blank" : "_self"} 
          rel={item.isExternal ? "noopener noreferrer" : ""}>
            {item.name}
          </a>
        </li>
      })}
    </ul>
  </nav>
};

export default Nav;
