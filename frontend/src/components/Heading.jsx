import React from 'react';

const Heading = ({ title }) => {
  return (
    <>
      <h1 className='text-4xl tracking-wider font-bold text-gray-500 capitalize text-center'>
        {title}
      </h1>
      <div className='bg-gray-600 w-full h-[1px] mt-4'></div>
    </>
  );
};

export default Heading;
