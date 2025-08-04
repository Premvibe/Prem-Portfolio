import React from 'react';

const Header = () => {
  return (
 <div className="flex flex-col-reverse md:flex-row items-center justify-center px-6 sm:px-12 md:px-24 lg:px-48 py-24 gap-8 ">

      {/* Text section */}
      <div className="text-center md:text-left max-w-xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
          Hi, I'm Prem Kumar <span className="inline-block">👋</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-900 dark:text-gray-800 max-w-md leading-relaxed mx-auto md:mx-0">
          Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Instagram.
        </p>
      </div>

      {/* Image section */}
      <img
        src="/prem.png"
        alt="Prem Kumar"
        className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full object-cover border-2 border-gray-300 dark:border-gray-600"
      />
    </div>
  );
};

export default Header;
