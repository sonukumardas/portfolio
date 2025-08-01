import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-8 sm:mb-12 lg:mb-16">
            Get In <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 sm:mb-6">Let's work together</h3>
                <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you have a project in mind or just want to chat, feel free to reach out!
                </p>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                {[
                  { icon: Mail, label: 'Email', value: 'sonukumardas1202@gmail.com' },
                  { icon: Phone, label: 'Phone', value: '+91 8096302672' },
                  { icon: MapPin, label: 'Location', value: 'Hyderabad, Telangana, India' }
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="text-white" size={18} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs sm:text-sm">{label}</p>
                      <p className="text-white text-xs sm:text-sm lg:text-base break-all">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-blue-400 focus:outline-none transition-colors duration-200 text-sm sm:text-base"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-blue-400 focus:outline-none transition-colors duration-200 text-sm sm:text-base"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-blue-400 focus:outline-none transition-colors duration-200 resize-none text-sm sm:text-base"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2.5 sm:py-3 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base font-medium"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;