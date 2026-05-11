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
              Jan 2023 - Sep 2023
            </time>
            <div className='text-lg font-black text-[var(--text-gray-950)]'>
              Employee Workflow Management Portal{' '}
              <span className='italic font-black text-[var(--text-gray-950)]'>
                (Internal Enterprise HR Tool)
              </span>
            </div>
            <ul style={{ 'list-style-type': 'disc' }}>
              <li className='text-[var(--text-gray-950)]'>
                Developed reusable React + TypeScript components for onboarding
                and approval workflows, improving UI consistency across modules.
              </li>
              <li className='text-[var(--text-gray-950)]'>
                Integrated REST APIs using React Query, reducing redundant API
                calls by ~35% through caching and optimized refetching.
              </li>
              <li className='text-[var(--text-gray-950)]'>
                Implemented  JWT authentication and Zod-based form validation
                for secure employee workflows.
              </li>
              <li className='text-[var(--text-gray-950)]'>
                Collaborated with backend teams in a Turborepo monorepo
                environment to deliver sprint-based feature enhancements and bug
                fixes.
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
              Oct 2023 - Aug 2024
            </time>
            <div className='text-lg font-black text-[var(--text-gray-950)]'>
              Telepay (Client Live Project){' '}
              <span className='italic font-black text-[var(--text-gray-950)]'>
                (Nordea Life & Pension)
              </span>
            </div>
            <ul style={{ 'list-style-type': 'disc' }} className='ml-4'>
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
              Sep 2024 - May 2025
            </time>
            <div className='text-lg font-black text-[var(--text-gray-950)]'>
              Customer Self-Service Insurance Portal{' '}
              <span className='italic font-black text-[var(--text-gray-950)]'>
                (Insurance Domain Client Project)
              </span>
            </div>
            <ul style={{ 'list-style-type': 'disc' }}>
              <li className='text-[var(--text-gray-950)]'>
                Migrated legacy customer portal modules into reusable Next.js
                and React components, improving maintainability and UI
                responsiveness.
              </li>
              <li className='text-[var(--text-gray-950)]'>
                Developed Node.js and Express APIs for claims and customer
                profile workflows using PostgreSQL.
              </li>
              <li className='text-[var(--text-gray-950)]'>
                Implemented Redux Toolkit and SSR-based rendering, improving
                dashboard load performance by ~30%
              </li>
              <li className='text-[var(--text-gray-950)]'>
                Worked with QA and backend teams to resolve production defects
                and optimize API integration flows.
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
              Jun 2025 - Present
            </time>
            <div className='text-lg font-black text-[var(--text-gray-950)]'>
              Real-Time Collaboration & Notification Platform{' '}
              <span className='italic font-black text-[var(--text-gray-950)]'>
                (Enterprise Communication System)
              </span>
            </div>
            <ul style={{ 'list-style-type': 'disc' }} className='ml-4'>
              <li className='text-[var(--text-gray-950)]'>
                Developed WebSocket-based real-time notification and messaging
                modules for internal enterprise communication systems.
              </li>
              <li className='text-[var(--text-gray-950)]'>
                Built Kafka-based asynchronous event processing workflows and
                Redis Pub/Sub synchronization mechanisms.
              </li>
              <li className='text-[var(--text-gray-950)]'>
                Optimized PostgreSQL queries and indexing, improving
                notification retrieval performance by ~40%
              </li>
              <li className='text-[var(--text-gray-950)]'>
                Participated in Docker-based deployments and collaborated with
                DevOps teams to troubleshoot scaling and connection stability
                issues.
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
