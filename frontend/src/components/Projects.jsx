import React from 'react';
import Heading from './Heading';
import Project from './Project';

const Projects = () => {
  return (
    <div id='projects' className='bg-gray-200 rounded-lg p-8 mt-[90px]'>
      <Heading title='projects' />
      <div className='grid grid-cols-3 gap-20 p-8'>
        <Project
          Github_link='https://github.com/RahulBauri/mern-chat-app'
          Deployed_link='https://mern-chat-app-prod-6kj0.onrender.com/login'
          project_img='https://res.cloudinary.com/dyca5rldm/image/upload/v1724694507/CHAT-APP_lrhcpt.png'
          about_name='chat-app'
          project_name='Real-time CHAT-APP'
          skill_array={[
            'HTML',
            'CSS',
            'JS',
            'React',
            'MongoDB',
            'Node.js',
            'Express.js',
            'Tailwind',
            'Socket.IO',
          ]}
        />
        <Project
          Github_link='https://github.com/RahulBauri/temp-mern-course'
          Deployed_link='https://temp-mern-course-8ehp.onrender.com/'
          project_img='https://res.cloudinary.com/dyca5rldm/image/upload/v1724521184/JOBIFY_ssri2f.png'
          about_name='JOBIFY'
          project_name='JOBIFY'
          skill_array={[
            'HTML',
            'CSS',
            'JS',
            'React',
            'MongoDB',
            'Node.js',
            'Express.js',
            'react_query',
          ]}
        />
        <Project
          Github_link='https://github.com/RahulBauri/comfy-store'
          Deployed_link='https://comfy-store2708.netlify.app/'
          project_img='https://res.cloudinary.com/dyca5rldm/image/upload/v1724522419/COMFY-STORE.png'
          about_name='comfy-store'
          project_name='Comfy-Store'
          skill_array={[
            'HTML',
            'CSS',
            'JS',
            'React',
            'Tailwind',
            'daisyUI',
            'react_query',
            'Redux',
          ]}
        />
        <Project
          Github_link='https://github.com/RahulBauri/unsplash-images'
          Deployed_link='https://unsplash-react-project.netlify.app/'
          project_img='https://res.cloudinary.com/dyca5rldm/image/upload/v1724522635/UNSPLASH_IMAGES.png'
          about_name='unsplash-images'
          project_name='Unsplash-Images'
          skill_array={['HTML', 'CSS', 'JS', 'React', 'react_query']}
        />
        <Project
          Github_link='https://github.com/RahulBauri/medium_blog_cohort_full'
          Deployed_link='https://medium-blog-app-cohort.netlify.app/signup'
          project_img='https://res.cloudinary.com/dyca5rldm/image/upload/v1724522855/MEDIUM-BLOG.png'
          about_name='medium-blog'
          project_name='BLOG-APP'
          skill_array={[
            'HTML',
            'CSS',
            'JS',
            'Typescript',
            'React',
            'Postgresql',
            'Prisma',
            'Hono',
            'npm',
            'Tailwind',
          ]}
        />
        <Project
          Github_link='https://github.com/RahulBauri/paytm-cohort'
          Deployed_link='https://magical-moxie-9020be.netlify.app/signup'
          project_img='https://res.cloudinary.com/dyca5rldm/image/upload/v1724523721/PAYTM-APP.png'
          about_name='paytm'
          project_name='PAYTM'
          skill_array={[
            'HTML',
            'CSS',
            'JS',
            'React',
            'MongoDB',
            'Mongoose',
            'Tailwind',
          ]}
        />
      </div>
    </div>
  );
};

export default Projects;
