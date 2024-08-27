import React from 'react';

const InputBox = ({ label, type, placeholder, name, onChange, value }) => {
  return (
    <div className='flex flex-col mb-4'>
      <label
        htmlFor={label}
        className='text-3xl capitalize tracking-widest font-bold'
      >
        {label}
      </label>
      <input
        id={label}
        className='bg-gray-100 mt-2 h-16 px-4 py-2 rounded-lg text-xl font-medium hover:border hover:border-gray-900 shadow-xl hover:shadow-2xl border-none'
        type={type}
        placeholder={placeholder}
        name={name}
        required
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default InputBox;
