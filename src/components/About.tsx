import React from 'react';
import { Code, Palette, Coffee } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-8 sm:mb-12 lg:mb-16">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6 order-2 md:order-1">
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                I'm an enthusiastic software engineering graduate proficient in Java, Spring Boot, and Hibernate on the backend, with a solid understanding of frontend technologies like HTML, CSS and JavaScript.
              </p>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                I've completed multiple full-stack projects that involved creating user-friendly interfaces and connecting them with robust backend services. Ready to contribute to dynamic teams and grow as a full-stack developer.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-4 sm:pt-6">
                {[
                  { icon: Code, label: 'Clean Code', desc: 'Writing maintainable, scalable solutions' },
                  { icon: Palette, label: 'UI/UX Developer', desc: 'Creating intuitive user experiences' },
                  { icon: Coffee, label: 'Problem Solver', desc: 'Tackling complex challenges' }
                ].map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="text-center group">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="text-white" size={20} />
                    </div>
                    <h3 className="text-white font-semibold text-xs sm:text-sm lg:text-base mb-1 sm:mb-2">{label}</h3>
                    <p className="text-gray-400 text-xs sm:text-sm leading-tight">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative order-1 md:order-2">
              <div className="w-full h-48 sm:h-64 lg:h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
                <div className="text-4xl sm:text-5xl lg:text-6xl">👨‍💻</div>
              </div>
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;