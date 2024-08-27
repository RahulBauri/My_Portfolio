import React from 'react';
import Heading from './Heading';

const Experience = () => {
  return (
    <div id='experience' className='p-8 mt-[90px]'>
      <Heading title='experience' />
      <ul className='timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mt-8'>
        <li>
          <div className='timeline-middle'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='h-5 w-5'
            >
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                clipRule='evenodd'
              />
            </svg>
          </div>
          <div className='timeline-start mb-10 md:text-end'>
            <time className='font-mono italic'>January 2023</time>
            <div className='text-lg font-black'>Nordea Life & Pension</div>
            In my role as a software developer, I analyzed and debugged code for
            the existing backend application for NLPSupply's multiple
            components, successfully identifying and resolving issues across
            various components. I implemented multiple new features, enhancing
            the application's functionality and ensuring secure file transfer. I
            also created detailed code flow documentation for the components and
            delivered the code changes to the master branch. Additionally, I
            engaged with clients to clarify bugs and discuss issues, ensuring
            that the solutions met their needs and expectations.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className='timeline-middle'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='h-5 w-5'
            >
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                clipRule='evenodd'
              />
            </svg>
          </div>
          <div className='timeline-end mb-10'>
            <time className='font-mono italic'>23rd August, 2023</time>
            <div className='text-lg font-black'>
              Test & Automation for Livli
            </div>
            I analyzed the existing codebase for the Livli web application to
            develop and execute various automated test cases using Selenium,
            ensuring the application's reliability and robustness. I also
            modified and added new test cases for the 'Arbeidsflaten' page based
            on evolving requirements, enhancing the overall test coverage and
            effectiveness.
          </div>
          <hr />
        </li>
        <li>
          <div className='timeline-middle'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='h-5 w-5'
            >
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                clipRule='evenodd'
              />
            </svg>
          </div>
          <div className='timeline-start mb-10 md:text-end'>
            <time className='font-mono italic'>19th September, 2023</time>
            <div className='text-lg font-black'>Telepay (ongoing)</div>I
            developed a standalone Java command-line application from scratch to
            convert Telepay files into ISO20022 pain.001.001.03 XML files,
            demonstrating strong problem-solving skills and a deep understanding
            of Java. The application was successfully deployed and tested on
            local, test, and pre-production servers. I analyzed the output using
            the Test tool provided by Nordea and implemented several features
            and modifications based on client requirements, including handling
            Excel files, to enhance the application's functionality and meet
            specific needs.
          </div>
          <hr />
        </li>
      </ul>
    </div>
  );
};

export default Experience;
