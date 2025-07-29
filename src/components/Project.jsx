import React from 'react'

const projects = [
  {
    title: 'Food Delivery',
    duration: 'Jan 2025 – Feb 2025',
    description: `Developed a responsive and user-friendly food delivery interface that allows users to
view menus, and manage their cart. Implemented dynamic routing and reusable React
components and category-based filtering and basic product search functionality.`,
    tech: ['React', 'HTML', 'CSS', 'TailwindCSS', 'JavaScript'],
    image: '/food.png', // Place image in /public
    links: [{ label: 'Website', href: 'tomato-food-web-page.vercel.app' },{ label: 'Source', href: 'https://github.com/Premvibe/Tomato-food-web-page' }]
  },
  {
    title: 'Nike Web Page Clone',
    duration: 'Dec 2024 – Jan 2025',
    description: `eDeveloped a static front-end clone of Nike’s homepage using React. Focused on modern
layout, responsive design, and interactive UI elements like hover transitions and animated
buttons. Structured the project with reusable components such as header, hero section,
product grid, and footer.`,
tech: ['React', 'HTML', 'CSS', 'TailwindCSS', 'JavaScript'],
    image: '/nike.png',
    links: [
      { label: 'Website', href: 'https://nike-sooty-ten.vercel.app/' },
      { label: 'Source', href: 'https://github.com/Premvibe/Nike' }
    ]
  },
  // Add more projects...
]

const Projects = () => {
  return (
    <section className="py-16 px-4 text-center">
      <div className="mb-10">
        <div className="inline-block bg-black text-white text-l px-3 py-1 rounded-full mb-4">My Projects</div>
        <h2 className="text-4xl font-bold">Check out my latest work</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-2">
          I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <div key={i} className="bg-white dark:bg-neutral-900 shadow-md rounded-lg overflow-hidden text-left">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-500">{project.duration}</p>
              <p className="text-sm mt-2 text-gray-700 dark:text-gray-300">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="bg-gray-800 text-white text-xs px-3 py-1 rounded-full">{tech}</span>
                ))}
              </div>
              <div className="flex gap-2 mt-4">
                {project.links.map((link, lidx) => (
                  <a
                    key={lidx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium px-3 py-1 border rounded-md hover:bg-black hover:text-white transition"
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
