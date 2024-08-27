import React from 'react';
import { LinkUtils } from '../utils/LinkUtils';

const Footer = () => {
  return (
    <div className='bg-gray-950 p-4 mt-[90px] flex justify-between items-center text-xl tracking-wide font-medium'>
      <div className='text-slate-50 ml-4'>&copy;2024-RB</div>
      <div className='mr-4'>
        <div className='flex gap-4 justify-center items-center'>
          <a
            className='bg-gray-50 rounded-full p-1 hover:bg-gray-400'
            href='https://www.linkedin.com/in/rahul-kumar-bauri-3a5552206/'
            target='_blank'
          >
            {LinkUtils[0].icon}
          </a>
          <a
            className='bg-gray-50 rounded-full p-1 hover:bg-gray-400'
            href='https://github.com/RahulBauri'
            target='_blank'
          >
            {LinkUtils[1].icon}
          </a>
          <button
            className='bg-gray-50 rounded-full p-1 hover:bg-gray-400'
            onClick={() => {
              return (window.location.href =
                'mailto:kumarrahulbauri2000@gmail.com');
            }}
          >
            {LinkUtils[4].icon}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
