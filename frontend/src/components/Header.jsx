import React from 'react';

const Header = () => {
  return (
    <div className='flex justify-between items-center bg-gray-950  px-8 py-2 shadow-lg hover:shadow-2xl sticky top-0 z-20'>
      <a
        id='logo'
        href='#home'
        className='text-red-600 text-5xl font-bold tracking-wide hover:bg-gray-200 rounded-full px-4 py-2'
      >
        R<span className='text-gray-100'>B</span>
      </a>
      <div className='flex '>
        <div className='font-bold text-gray-100 text-lg tracking-wide hover:bg-gray-200 hover:text-gray-950 py-2 px-4 rounded-3xl'>
          <a href='#skills'>Skills</a>
        </div>
        <div className='font-bold text-gray-100 text-lg tracking-wide hover:bg-gray-200 hover:text-gray-950 py-2 px-4 rounded-3xl'>
          <a href='#experience'>Experience</a>
        </div>
        <div className='font-bold text-gray-100 text-lg tracking-wide hover:bg-gray-200 hover:text-gray-950 py-2 px-4 rounded-3xl'>
          <a href='#projects'>Projects</a>
        </div>
        <div className='font-bold text-gray-100 text-lg tracking-wide hover:bg-gray-200 hover:text-gray-950 py-2 px-4 rounded-3xl'>
          <a href='#contact'>Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
