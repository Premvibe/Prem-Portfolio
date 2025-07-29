import React from 'react'

const skills = [
  'React',
  'Javascript',
  'Tailwind CSS',
  'Bootstrap',
  'CSS',
  'HTML',
  'Git',
  'GitHub',
  'Python',
  'C',
  'C++',
  'Java',
  'SQL',
  'Node.js',
  'Express',
  'MongoDB',
]

const Skills = () => {
  return (
    <div className="mt-10 max-w-2xl mx-auto text-left">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="flex flex-wrap gap-3 justify-center">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-black text-white px-4 py-1 rounded-md text-sm font-medium transition-all duration-300 hover:bg-white hover:text-black hover:border hover:border-black hover:scale-105"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Skills
