import React from 'react';

const educations = [
  {
    school: "Galgotias University",
    program: "Master of Computer Applications",
    duration: "2024 – 2026",
    logo: "/uni.jpeg",
    url: "https://www.galgotiasuniversity.edu.in/"
  },
  {
    school: "GN Group of Institutions",
    program: "Bachelor of Computer Applications",
    duration: "2021 – 2024",
    logo: "/images.jpeg",
    url: "https://www.gngroup.org/"
  },
  {
    school: "G.L.T Saraswati Bal Mandir SR. Sec. School",
    program: "Senior Secondary (XII), CBSE",
    duration: "2020 – 2021",
    logo: "/school.jpg",
  },
  {
    school: "G.L.T Saraswati Bal Mandir SR. Sec. School",
    program: "Secondary (X), CBSE",
    duration: "2018 – 2019",
    logo: "/school.jpg",
  },
];

const Education = () => {
  return (
    <div className="px-4 md:px-0">
      <section className="mt-10 max-w-2xl mx-auto text-left">
        <h2 className="text-xl font-semibold mb-2">Education</h2>
        <ul className="space-y-4">
          {educations.map((edu, index) => (
            <li key={index} className="flex justify-between items-start gap-4">
              <div className="flex items-start gap-3">
                <img
                  src={edu.logo}
                  alt={edu.school}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <div className="font-medium">
                    {edu.url ? (
                      <a
                        href={edu.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {edu.school}
                      </a>
                    ) : (
                      edu.school
                    )}
                  </div>
                  <div className="text-sm text-gray-500">{edu.program}</div>
                </div>
              </div>
              <span className="text-sm text-gray-400 whitespace-nowrap">{edu.duration}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Education;
