import React, {useContext, useState, useEffect} from 'react';

import { SidebarContext } from '../contexts/SidebarContext';
import { BsBag } from 'react-icons/bs';
import { BsToggleOff } from 'react-icons/bs'
import { BsToggleOn } from 'react-icons/bs';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.svg';

const Header = ({darkMode, modeHandler}) => {
  const { setIsOpen, isOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  const mode = darkMode ? 'bg-black py-4 shadow-md' : 'bg-white py-4 shadow-md';

  return <header className={`${isActive ? mode : ' bg-none py-6'} fixed w-full z-10 transition-all`}>
      <div className='justify-between flex items-center mx-auto h-full container'>
        <Link to={'/'}>
          <div>
            <img className='w-[40px]' src={Logo} alt='logo'/>
          </div>
        </Link>
        <div className='justify-between items-center flex'>
          <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex-relative items-center'>
            <BsBag className='text-2xl'/>
            <div className='bg-red-400 absolute text-[12px] w-[17px] h-[17px] ml-2 text-white rounded-full flex justify-center items-center'>{itemAmount}</div>
          </div>
          <div onClick={modeHandler} className='items-center flex cursor-pointer ml-12'>
            {darkMode ? <BsToggleOn className='text-xl'/> : <BsToggleOff className='text-xl'/>}
            <span className='ml-2'>Dark mode</span>
          </div>
        </div>
      </div>
    </header>;
};

export default Header;
