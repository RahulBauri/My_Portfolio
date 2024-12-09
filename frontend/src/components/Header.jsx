import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { MdSunny } from 'react-icons/md';
import { FaMoon } from 'react-icons/fa';
import { FaSun } from 'react-icons/fa';

const Header = () => {
  const [show, setShow] = useState(false);
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    const body = document.querySelector('body');
    body.classList.toggle('dark-theme', theme);
  }, [theme]);

  return (
    <div className='flex flex-col gap-4 md:flex-row md:justify-between md:items-center bg-[var(--bg-gray-950)] px-8 py-2 shadow-lg hover:shadow-2xl sticky top-0 z-20'>
      <div className='flex justify-center items-center gap-4'>
        <a
          id='logo'
          href='#home'
          className='text-[var(--text-red-600)] text-5xl font-bold tracking-wide hover:bg-gray-200 rounded-full px-4 py-2 text-center'
        >
          R<span className='text-[var(--text-slate-50)]'>B</span>
        </a>
        <div onClick={() => setShow(!show)} className='md:hidden'>
          <FaBars
            className={`bg-gray-50 p-1 ${show && 'rotate-90'}`}
            size={40}
          />
        </div>
      </div>
      <div
        className={`${
          show ? 'flex flex-col items-center justify-center' : 'hidden'
        } md:flex md:flex-row md:items-center md:justify-center`}
      >
        <button
          onClick={() => setTheme(!theme)}
          className='bg-gray-50 flex justify-center items-center h-8 w-8 rounded-full p-1 mb-2'
        >
          {theme ? <FaSun size={30} /> : <FaMoon size={30} />}
        </button>
        <div className='text-center font-bold text-[var(--text-gray-100)] text-lg tracking-wide hover:bg-gray-200 hover:text-gray-950 py-2 px-4 rounded-3xl'>
          <a href='#skills'>Skills</a>
        </div>
        <div className='text-center font-bold text-[var(--text-gray-100)] text-lg tracking-wide hover:bg-gray-200 hover:text-gray-950 py-2 px-4 rounded-3xl'>
          <a href='#experience'>Experience</a>
        </div>
        <div className='text-center font-bold text-[var(--text-gray-100)] text-lg tracking-wide hover:bg-gray-200 hover:text-gray-950 py-2 px-4 rounded-3xl'>
          <a href='#projects'>Projects</a>
        </div>
        <div className='text-center font-bold text-[var(--text-gray-100)] text-lg tracking-wide hover:bg-gray-200 hover:text-gray-950 py-2 px-4 rounded-3xl'>
          <a href='#contact'>Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
