import React, { useState } from 'react';
import { SkillsUtils } from '../utils/SkillsUtils';
import Skill from './Skill';
import { LinkUtils } from '../utils/LinkUtils';
import { about } from '../utils/aboutProjects';

import { MdOutlineKeyboardDoubleArrowDown } from 'react-icons/md';

const Project = ({
  Github_link,
  Deployed_link,
  project_img,
  about_name,
  skill_array,
  project_name,
}) => {
  const [hovered, setHovered] = useState(false);
  const [showContent, setShowContent] = useState(false);

  return (
    <div
      id='project_card'
      className='bg-slate-50 p-4 rounded-lg'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        // setShowContent(false);
      }}
    >
      <div className={`w-full relative ${hovered && 'scale-105'}`}>
        <div
          className={`w-full h-[200px] relative transition-all duration-300 ${
            hovered && 'rounded-t-lg'
          }`}
        >
          <img
            src={project_img}
            alt='chat-app'
            className={`w-full h-full block border-2 border-gray-500 rounded-lg object-contain ${
              hovered && 'rounded-t-lg'
            }`}
          />
          {hovered && (
            <div className='absolute inset-0 bg-gradient-to-t from-black/100 to-transparent z-10 rounded-t-lg'></div>
          )}
        </div>
        {hovered && (
          <div className='absolute top-20 left-24 z-10 text-gray-100 flex gap-6'>
            <a
              href={Github_link}
              target='_blank'
              className='bg-gray-50 rounded-full cursor-pointer p-2 hover:bg-gray-400'
            >
              {LinkUtils[1].icon}
            </a>
            <a
              href={Deployed_link}
              target='_blank'
              className='bg-gray-50 rounded-full cursor-pointer p-2 hover:bg-gray-400'
            >
              {LinkUtils[2].icon}
            </a>
          </div>
        )}
        <div className='flex justify-center items-center'>
          <div className='mt-10 grid grid-cols-5 gap-x-8 gap-y-6'>
            {SkillsUtils.map((skill, index) => {
              if (skill_array?.includes(skill.name)) {
                return (
                  <Skill
                    key={index}
                    name={skill.name}
                    size={25}
                    absolute={false}
                    pop_up={false}
                  >
                    {skill.icon}
                  </Skill>
                );
              }
            })}
          </div>
        </div>
        <div className='h-[1px] bg-gray-950 mt-8'></div>
        <div className='mt-2 mb-2 px-4 pb-6 py-2'>
          <span className='text-xl font-extrabold tracking-tight text-gray-800 mb-2 flex items-center gap-2'>
            {project_name} <MdOutlineKeyboardDoubleArrowDown size={25} />
          </span>
          <p>
            {about.map((ab) => {
              if (ab.name === about_name) {
                if (ab.content.length > 50) {
                  if (showContent) {
                    return ab.content;
                  }
                  return ab.content.slice(0, 51) + '...';
                } else {
                  return ab.content;
                }
              }
            })}
            <span
              onClick={() => setShowContent(!showContent)}
              className='text-blue-800 font-medium tracking-normal cursor-pointer hover:underline'
            >
              {!showContent ? 'read more' : 'read less'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
