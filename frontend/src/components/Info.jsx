import React from 'react';
import { LinkUtils } from '../utils/LinkUtils';

const Info = () => {
  return (
    <div id='home' className='mt-[20px] grid grid-cols-12 p-8'>
      <div className='col-span-8 tracking-wide leading-loose text-xl text-gray-600 mr-12 font-normal'>
        Hi, My name is Rahul Bauri, a full-stack web developer skilled in
        crafting responsive and clean front-end designs that ensure exceptional
        user experiences across all screen sizes. I develop robust APIs to
        complement these designs, ensuring seamless functionality across the
        web. I'm passionate about collaborating on exciting web application
        projects tailored to specific requirements. With each project, I learn
        something new, and the process of solving challenges fuels my drive to
        create even better web applications, each surpassing the last. The
        satisfaction of bringing a project to life using various libraries and
        technologies is what keeps me motivated to keep pushing the boundaries
        of web development.
        <div className='bg-gray-600 w-full h-[1px] mt-4'></div>
      </div>
      <div className='col-span-4 grid h-full grid-rows-[50%_50%] gap-8'>
        <div className='px-4 py-1'>
          <img
            src='https://res.cloudinary.com/dyca5rldm/image/upload/v1724758773/profile_pic_x4b800.png'
            alt='my_image'
            className='w-full h-full object-contain'
          />
        </div>
        <div className='flex flex-col gap-2 w-[242px] mx-auto items-center'>
          <div className='flex justify-center items-center gap-2'>
            <div>{LinkUtils[5].icon}</div>
            <div className='tracking-wider'>+91-6202888306</div>
          </div>
          {/* TODO */}
          <div className='text-center flex items-center justify-center gap-4 bg-gray-200 hover:bg-gray-300 py-1 rounded-full w-[190px]'>
            <div className='text-xl font-bold tracking-wide'>Resume</div>
            <div>{LinkUtils[6].icon}</div>
          </div>
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
