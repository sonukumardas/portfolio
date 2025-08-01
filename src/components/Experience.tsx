import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Web Developer',
      company: 'DIGIT Institute',
      location: 'Hyderabad',
      period: 'Apr 2024 - Jun 2024',
      link: 'https://sonukumardas.github.io/Ditgit_Website/',
      description: 'Developed a comprehensive course information webpage designed to provide students with detailed insights into Software-Testing.',
      achievements: [
        'Created course syllabus, schedules, enrollment details, and instructor information pages',
        'Implemented responsive design using HTML, CSS, JavaScript, and Bootstrap',
        'Enhanced user experience with interactive elements and modern UI design'
      ]
    }
  ];

  const education = [
    {
      degree: 'B.Tech in Electronics and Communication Engineering',
      institution: 'Malla Reddy Institute of Engineering and Technology',
      location: 'Hyderabad',
      period: 'Aug 2019 - Sep 2023',
      gpa: '6.64'
    },
    {
      degree: 'Intermediate (MPC)',
      institution: 'Narayana Junior College',
      location: 'Hyderabad',
      period: 'Jul 2017 - Apr 2019',
      gpa: '8.5'
    },
    {
      degree: 'Secondary School Certificate',
      institution: 'Nagarjuna High School',
      location: 'Hyderabad',
      period: 'Jun 2016 - Apr 2017',
      gpa: '7.2'
    }
  ];

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-8 sm:mb-12 lg:mb-16">
            Experience & <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Education</span>
          </h2>
          
          {/* Experience Section */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
              <Briefcase className="text-blue-400" size={20} />
              Professional Experience
            </h3>
            
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-900 p-4 sm:p-6 rounded-2xl mb-4 sm:mb-6 hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-1 sm:mb-2">{exp.title}</h4>
                    <p className="text-blue-400 font-semibold text-sm sm:text-base">{exp.company}</p>
                  </div>
                  <div className="text-gray-400 text-xs sm:text-sm mt-2 md:mt-0">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-3 sm:mb-4 text-xs sm:text-sm lg:text-base leading-relaxed">{exp.description}</p>
                
                {exp.link && (
                  <div className="mb-3 sm:mb-4">
                    <a 
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 sm:gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 text-xs sm:text-sm"
                    >
                      <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      View Project
                    </a>
                  </div>
                )}
                
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-300 flex items-start gap-2 text-xs sm:text-sm lg:text-base leading-relaxed">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></span>
                      <span className="flex-1">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education Section */}
          <div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
              <svg className="text-purple-400" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
              </svg>
              Education
            </h3>
            
            <div className="space-y-4 sm:space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-gray-900 p-4 sm:p-6 rounded-2xl hover:transform hover:scale-105 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <h4 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-1 sm:mb-2 leading-tight">{edu.degree}</h4>
                      <p className="text-purple-400 font-semibold mb-1 text-sm sm:text-base">{edu.institution}</p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-400 text-xs sm:text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar size={14} />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={14} />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 sm:mt-4 md:mt-0">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                        GPA: {edu.gpa}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;