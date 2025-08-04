import React from 'react'

const Footer = () => {
  return (
    <section className="py-16 px-4 sm:px-8 md:px-16 text-center bg-white">
      <div className="mb-10">
        <div className="inline-block bg-black text-white text-sm sm:text-base px-4 py-1 rounded-full mb-4">
          Contact
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
          Get in Touch
        </h2>
        <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mt-4 leading-relaxed">
          Want to chat? Just shoot me a DM{' '}
          <a
            href="https://www.instagram.com/prem.vibe/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline hover:text-blue-700 transition"
          >
            with a direct question on Instagram
          </a>{' '}
          and I'll respond whenever I can. I will ignore all soliciting.
        </p>
      </div>
    </section>
  )
}

export default Footer
