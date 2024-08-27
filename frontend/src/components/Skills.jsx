import React from 'react';
import Skill from './Skill';
import { SkillsUtils } from '../utils/SkillsUtils';
import Heading from './Heading';

const Skills = () => {
  return (
    <div
      id='skills'
      className='flex flex-col items-center bg-gray-200 rounded-lg p-8 mt-[90px]'
    >
      <Heading title='skills' />
      <div className='p-4 mt-10'>
        <div className='grid grid-cols-10 gap-x-12 gap-y-8'>
          {SkillsUtils.map((skill, index) => {
            return (
              <Skill
                key={index}
                name={skill.name}
                size={80}
                absolute={true}
                pop_up={true}
              >
                {skill.icon}
              </Skill>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
