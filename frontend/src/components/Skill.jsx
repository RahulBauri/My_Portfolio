import React, { useState } from 'react';

const Skill = ({ children, name, size, absolute, pop_up }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`flex flex-col items-center relative ${
        hovered && pop_up ? '-translate-y-4' : ''
      }`}
      style={{ width: `${size}px`, height: `${size}px` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
      {hovered && (
        <p
          className={`text-gray-700 tracking-wider text-sm mt-6 ${
            absolute ? 'absolute top-9' : 'mt-2'
          }`}
          style={absolute ? {} : { position: 'absolute', bottom: '-1.5rem' }}
        >
          {name}
        </p>
      )}
    </div>
  );
};

export default Skill;
