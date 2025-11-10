import React from 'react';

const TestimonialCard = ({
  testimony,
  userName,
  logo
}) => {
  return (
    <div className='flex rounded-2xl items-start justify-between w-full max-w-96 min-h-[320px] md:min-h-[380px] gap-3 md:gap-4 p-5 md:p-7 flex-col bg-white text-black shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2'>
      {/* Quote Icon */}
      <div className='w-8 h-8 md:w-12 md:h-12 flex-shrink-0'>
        <img 
          src="/quotes.png" 
          alt="Quote marks" 
          className='w-full h-full object-contain'
        />
      </div>

      {/* Testimony Text */}
      <p className='leading-relaxed text-sm md:text-base text-gray-700 flex-grow overflow-y-auto'>
        {testimony}
      </p>

      {/* User Info */}
      <div className='flex items-center gap-3 md:gap-4 w-full pt-3 md:pt-4 border-t border-gray-100 mt-auto'>
        {/* Logo with object-cover */}
        <div className='w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden flex-shrink-0 bg-gray-100 border border-gray-200'>
          <img 
            src={logo} 
            alt={`${userName} logo`}
            className='w-full h-full object-scale-down '
          />
        </div>
        <p className='font-neue font-medium text-xs md:text-sm leading-tight text-gray-900'>
          {userName}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;