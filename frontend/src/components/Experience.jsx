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
          <div className='timeline-start mb-10 md:text-end text-[var(--text-gray-950)]'>
            <time className='font-mono italic text-[var(--text-gray-950)]'>
              January 2023 (8 months)
            </time>
            <div className='text-lg font-black text-[var(--text-gray-950)]'>
              Nordea Life & Pension{' '}
              <span className='italic font-black text-[var(--text-gray-950)]'>
                (Client Live Project)
              </span>
            </div>
            <ul style={{ 'list-style-type': 'disc' }}>
              <li className='text-[var(--text-gray-950)]'>
                Analyzed, debugged code and assisted for the existing backend
                application (Java) for NLPSupply's multiple components.
              </li>
              <li className='text-[var(--text-gray-950)]'>
                Successfully identified and resolved issues across various
                components.
              </li>
              <li className='text-[var(--text-gray-950)]'>
                Created detailed code flow documentation for the components.
              </li>
              <li className='text-[var(--text-gray-950)]'>
                Engaged with clients to clarify bugs and discuss issues,
                ensuring solutions met their needs and expectations.
              </li>
            </ul>
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
          <div className='timeline-end mb-10 text-[var(--text-gray-950)]'>
            <time className='font-mono italic text-[var(--text-gray-950)]'>
              23rd August, 2023 (4 months)
            </time>
            <div className='text-lg font-black text-[var(--text-gray-950)]'>
              EMS{' '}
              <span className='italic font-black text-[var(--text-gray-950)]'>
                (Internal Project)
              </span>
            </div>
            <ul style={{ 'list-style-type': 'disc' }} className='ml-4'>
              <li className='text-[var(--text-gray-950)]'>
                Spearheaded the development of a React-based frontend
                application for an internal employee management system, ensuring
                a responsive and user-friendly interface using React, Tailwind
                CSS , and TypeScript .
              </li>
              <li className='text-[var(--text-gray-950)]'>
                Implemented role-based authentication and authorization using
                JWT and cookies for secure access.
              </li>
              <li className='text-[var(--text-gray-950)]'>
                Integrated React Query for efficient data fetching and caching,
                reducing frontend load times by 30%.
              </li>
              <li className='text-[var(--text-gray-950)]'>
                Worked closely with UI/UX designers to implement pixel-perfect
                designs and improve the overall user experience.
              </li>
            </ul>
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
          <div className='timeline-start mb-10 md:text-end text-[var(--text-gray-950)]'>
            <time className='font-mono italic text-[var(--text-gray-950)]'>
              1 January, 2024 (ongoing)
            </time>
            <div className='text-lg font-black text-[var(--text-gray-950)]'>
              Telepay{' '}
              <span className='italic font-black text-[var(--text-gray-950)]'>
                (Client Live Project)
              </span>
            </div>
            <ul style={{ 'list-style-type': 'disc' }}>
              <li className='text-[var(--text-gray-950)]'>
                Developed a standalone Java command-line application from
                scratch to convert Telepay files into their corresponding
                ISO20022 pain.001.001.03 XML files.
              </li>
              <li className='text-[var(--text-gray-950)]'>
                Implemented several features and modifications based on client
                requirements, including handling Excel files.
              </li>
              <li className='text-[var(--text-gray-950)]'>
                Successfully deployed and tested the application on local, test,
                and pre-production servers.
              </li>
              <li className='text-[var(--text-gray-950)]'>
                Analyzed the output using the Test tool provided by Nordea and
                optimised the code accordingly to enhance the quality of the XML
                getting generated.
              </li>
            </ul>
          </div>
          <hr />
        </li>
      </ul>
    </div>
  );
};

export default Experience;
