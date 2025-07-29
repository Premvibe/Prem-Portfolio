import React from 'react'

const Footer = () => {
  return (
    <section className="py-20 px-4 text-center bg-white">
      <div className="mb-12">
        <div className="inline-block bg-black text-white text-sm px-4 py-1 rounded-full mb-4">
          Contact
        </div>
        <h2 className="text-5xl font-bold text-black">
          Get in Touch
        </h2>
        <p className="text-gray-600 text-[1.375rem] max-w-xl mx-auto mt-3">
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
