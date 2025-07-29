import React from 'react'

const experiences = [
  {
    company: "Kudbud",
    role: "Web Development Intern ",
    duration: "July 2025 – Aug 2025",
    logo: "/kodbud.png",
    url: "https://kodbud.in/"
  },
  // {
  //   company: "Shopify",
  //   role: "Software Engineer",
  //   duration: "Jan 2021 – Apr 2021",
  //   logo: "/logos/shopify.png",
  // },
  // Add more as needed
];

const Experiences = () => {
  return (
    <div>
      <section className="mt-10 max-w-2xl mx-auto text-left">
      <h2 className="text-xl font-semibold mb-2">Work Experience</h2>
      <ul className="space-y-4">
        {experiences.map((job) => (
          <li key={job.company} className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img src={job.logo} alt={job.company} className="w-8 h-8 rounded-full" />
              <div>
                <a href={job.url || "#"} target="_blank" className="font-medium hover:underline">
                  {job.company}
                </a>
                <div className="text-sm text-gray-500">{job.role}</div>
              </div>
            </div>
            <span className="text-sm text-gray-400">{job.duration}</span>
          </li>
        ))}
      </ul>
    </section>
    </div>
  )
}

export default Experiences
