import React, { useState } from 'react';

const Polaroid = ({ image, caption, rotation, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      className="relative cursor-pointer transition-all duration-700 ease-out"
      style={{
        transform: `rotate(${isHovered ? rotation + 5 : rotation}deg) ${isHovered ? 'scale(1.05)' : 'scale(1)'}`,
        opacity: isVisible ? 1 : 0,
        translateY: isVisible ? '0' : '50px',
        zIndex: isHovered ? 50 : index,
        transitionDelay: `${index * 150}ms`,
        width: '280px'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-white p-3 pb-12 shadow-2xl w-full">
        <div className="w-64 h-64 bg-gray-200 overflow-hidden">
          <img 
            src={image} 
            alt={caption}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-3 text-center px-2">
          <p className="text-gray-700 font-handwriting text-2xl break-words">{caption}</p>
        </div>
      </div>
    </div>
  );
};

export default Polaroid;