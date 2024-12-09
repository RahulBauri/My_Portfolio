import React from 'react';
import { LinkUtils } from '../utils/LinkUtils';

import { IconContext } from 'react-icons';
import { IoMdCall, IoMdDownload } from 'react-icons/io';

const Info = () => {
  return (
    <div id='home' className='mt-[20px] grid grid-cols-1 lg:grid-cols-12 p-8'>
      <div className='lg:col-span-8 lg:tracking-wide lg:leading-loose lg:text-xl text-[var(--text-gray-600)] lg:mr-12 font-normal lg:px-8 place-content-start'>
        <div className='bg-[var(--bg-gray-600)] w-full h-[1px] mb-4'></div>
        <h1 className='text-[28px] md:text-[38px] lg:text-[50px] font-extrabold text-[var(--text-gray-600)]'>
          Hi, My name is
          <span className='text-[var(--text-gray-950)]'> Rahul Bauri</span> & I
          am a<span className='text-[var(--text-red-600)]'> full-stack</span>
          <span className='text-[var(--text-gray-950)]'> web developer.</span>
        </h1>
        <div className='bg-[var(--bg-gray-600)] w-full h-[1px] mt-4'></div>
      </div>
      <div className='mt-8 lg:col-span-4 flex flex-col items-center lg:flex-col lg:justify-center md:flex-row md:justify-center gap-x-4'>
        <div className='pb-4 lg:px-4 lg:pb-4'>
          <img
            src='https://res.cloudinary.com/dyca5rldm/image/upload/v1724791230/Photo_v1fu22.jpg'
            alt='my_image'
            className='h-[280px] w-[280px] lg:h-[299px] lg:w-[230px] object-contain rounded-lg border'
          />
        </div>
        <div className='flex flex-col gap-4 w-[242px] mx-auto items-center mt-2'>
          <div className='flex justify-center items-center gap-2'>
            <div className='bg-gray-50 rounded-full p-1'>
              {LinkUtils[5].icon}
            </div>
            <div className='tracking-wider text-[var(--text-gray-950)]'>
              +91-6202888306
            </div>
          </div>
          {/* TODO */}
          <a
            href='https://drive.google.com/file/d/1xddsCe9GFC5Oh6C3joCEZT6e0501iODF/view'
            className='text-center flex items-center justify-center gap-4 bg-[var(--bg-gray-200)] hover:bg-gray-300 py-2 rounded-full w-[190px] group'
            target='_blank'
          >
            <div className='text-xl font-bold tracking-wide text-[var(--text-gray-950)] group-hover:text-gray-950'>
              Resume
            </div>
            <div>{LinkUtils[6].icon}</div>
          </a>
          <div className='flex gap-6 justify-center items-center'>
            <a
              className='bg-gray-50 rounded-full p-2 hover:bg-gray-300'
              href='https://www.linkedin.com/in/rahul-kumar-bauri-3a5552206/'
              target='_blank'
            >
              {LinkUtils[0].icon}
            </a>
            <a
              className='bg-gray-50 rounded-full p-2 hover:bg-gray-300'
              href='https://github.com/RahulBauri'
              target='_blank'
            >
              {LinkUtils[1].icon}
            </a>
            <button
              className='bg-gray-50 rounded-full p-2 hover:bg-gray-300'
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
    </div>
  );
};

export default Info;
