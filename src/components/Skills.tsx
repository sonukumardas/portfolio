import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      skills: [
        { name: 'Core Java', level: 85 },
        { name: 'C Language', level: 75 },
        { name: 'JavaScript', level: 70 },
        { name: 'HTML/CSS', level: 80 }
      ]
    },
    {
      title: 'Frameworks',
      skills: [
        { name: 'Spring Boot', level: 80 },
        { name: 'Bootstrap', level: 75 },
        { name: 'Hibernate', level: 80 },
        { name: 'Servlets', level: 75 }
      ]
    },
    {
      title: 'Database & Tools',
      skills: [
        { name: 'MySQL', level: 80 },
        { name: 'Github', level: 75 },
        { name: 'RESTful APIs', level: 80 },
        { name: 'MS Office', level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-8 sm:mb-12 lg:mb-16">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={category.title} className="bg-gray-800 p-4 sm:p-6 rounded-2xl hover:transform hover:scale-105 transition-all duration-300">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-4 sm:mb-6 text-center">{category.title}</h3>
                <div className="space-y-3 sm:space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1 sm:mb-2">
                        <span className="text-gray-300 text-sm sm:text-base">{skill.name}</span>
                        <span className="text-gray-400 text-sm sm:text-base">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-1.5 sm:h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-400 to-purple-400 h-1.5 sm:h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 4 + skillIndex) * 200}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;