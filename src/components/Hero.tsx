import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden pt-16 px-4">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-4 w-32 h-32 sm:w-72 sm:h-72 sm:top-20 sm:left-20 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-20 right-4 w-32 h-32 sm:w-72 sm:h-72 sm:top-40 sm:right-20 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/2 w-32 h-32 sm:w-72 sm:h-72 sm:bottom-20 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10 w-full max-w-4xl">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in-up">
            <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 sm:mb-8 rounded-full overflow-hidden shadow-2xl border-4 border-gradient-to-r from-blue-400 to-purple-400">
              <img 
                src="/pic_sq.JPG" 
                alt="Sonu Kumar Das" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 animate-fade-in-up delay-200 leading-tight">
            <span className="block sm:inline">Sonu Kumar Das</span> <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"></span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto animate-fade-in-up delay-400 px-2 sm:px-4 leading-relaxed">
            Java Developer passionate about creating robust backend services and full-stack web applications
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 sm:mb-12 animate-fade-in-up delay-600 px-4">
            <a 
              href="https://drive.google.com/file/d/16V9Gp2ExfhG7aEPb6Mcx3m1FAEbz8RlE/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base font-medium"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>
          
          <div className="flex justify-center space-x-4 sm:space-x-6 animate-fade-in-up delay-800">
            {[
              { icon: Github, href: 'https://github.com/sonukumardas', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/sonu-kumar-das12022000/', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:sonukumardas1202@gmail.com', label: 'Email' }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={label === 'Email' ? undefined : '_blank'}
                rel={label === 'Email' ? undefined : 'noopener noreferrer'}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:scale-110"
              >
                <Icon size={18} className="sm:w-5 sm:h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;