import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Red Bus Clone',
      description: 'A web application that allows users to search, book, and manage bus tickets with RESTful APIs.',
      image: 'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202301/generic_banner_ind-sixteen_nine.png?size=948:533',
      tech: ['Java', 'Spring Boot', 'MySQL', 'RESTful APIs'],
      github: '#',
      live: '#'
    },
    {
      title: 'Practo Clone',
      description: 'Web Application for Healthcare Services with registration, login system and user profile management.',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Java Servlets', 'Hibernate', 'MySQL', 'HTML/CSS'],
      github: '#',
      live: '#'
    }
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-8 sm:mb-12 lg:mb-16">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div key={project.title} className="bg-gray-900 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-32 sm:h-40 lg:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2 sm:mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 sm:px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-row gap-4 sm:gap-6">
                    <a 
                      href={project.github}
                      className="flex items-center gap-1.5 sm:gap-2 text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      <Github size={14} className="sm:w-4 sm:h-4" />
                      <span className="text-xs sm:text-sm">Code</span>
                    </a>
                    <a 
                      href={project.live}
                      className="flex items-center gap-1.5 sm:gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-200"
                    >
                      <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                      <span className="text-xs sm:text-sm">Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;