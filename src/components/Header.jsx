import React from 'react'

const Header = () => {
  return (
    <div className="flex items-center justify-center px-96 py-24 gap-12 flex-wrap">
      {/* Text section */}
      <div className="max-w-xl">
        <h1 className="text-5xl font-extrabold mb-6">
          Hi, I'm Prem Kumar <span className="inline-block">👋</span>
        </h1>
        <p className="text-lg text-gray-900 max-w-md leading-relaxed">
  Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Instagram.
</p>

      </div>

      {/* Image section */}
      <img
        src="/prem.png" // replace with your image path
        alt="Prem Kumar"
        className="w-40 h-40 rounded-full object-cover border-2 border-gray-300"
      />
    </div>
  )
}

export default Header
