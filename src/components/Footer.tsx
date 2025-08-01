import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-6 sm:py-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-3 sm:mb-4 md:mb-0">
            <p className="flex items-center justify-center gap-2 text-sm sm:text-base">
              Made with <Heart className="text-red-500" size={14} /> by Sonu Kumar Das
            </p>
          </div>
          
          <div className="text-gray-400 text-center">
            <p className="text-sm sm:text-base">&copy; 2024 All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;