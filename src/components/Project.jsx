import React from 'react'

const projects = [
  {
    title: 'Food Delivery',
    duration: 'Jan 2025 – Feb 2025',
    description: `Developed a responsive and user-friendly food delivery interface that allows users to
view menus, and manage their cart. Implemented dynamic routing and reusable React
components and category-based filtering and basic product search functionality.`,
    tech: ['React', 'HTML', 'CSS', 'TailwindCSS', 'JavaScript'],
    image: '/food.png',
    links: [
      { label: 'Website', href: 'https://tomato-food-web-page.vercel.app' },
      { label: 'Source', href: 'https://github.com/Premvibe/Tomato-food-web-page' }
    ]
  },
  {
    title: 'Nike Web Page Clone',
    duration: 'Dec 2024 – Jan 2025',
    description: `Developed a static front-end clone of Nike’s homepage using React. Focused on modern
layout, responsive design, and interactive UI elements like hover transitions and animated
buttons. Structured the project with reusable components such as header, hero section,
product grid, and footer.`,
    tech: ['React', 'HTML', 'CSS', 'TailwindCSS', 'JavaScript'],
    image: '/nike.png',
    links: [
      { label: 'Website', href: 'https://nike-sooty-ten.vercel.app/' },
      { label: 'Source', href: 'https://github.com/Premvibe/Nike' }
    ]
  }
]

const Projects = () => {
  return (
    <section className="py-20 px-4 text-center bg-white">
      <div className="mb-12">
        <div className="inline-block bg-black text-white text-sm px-4 py-1 rounded-full mb-4">My Projects</div>
        <h2 className="text-4xl font-bold text-black">Check out my latest work</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mt-3">
          I’ve worked on a variety of projects — from simple UIs to full-stack applications. Here are a few favorites.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden border hover:scale-[1.01] transform"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 text-left">
              <h3 className="text-2xl font-semibold text-black">{project.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{project.duration}</p>
              <p className="text-base text-gray-800 mt-3 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-200 text-gray-800 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-5">
                {project.links.map((link, lidx) => (
                  <a
                    key={lidx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium px-4 py-2 border border-gray-400 rounded-md hover:bg-black hover:text-white transition"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
