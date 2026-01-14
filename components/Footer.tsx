
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 bg-[#F8F9FA] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-8 md:mb-0">
          <p className="text-xs tracking-widest font-bold uppercase mb-2">Build with Precision</p>
          <p className="text-gray-400 text-sm">© 2024 Creative Technologist Portfolio. All rights reserved.</p>
        </div>
        <div className="flex gap-8 text-xs tracking-widest font-bold uppercase">
          <a href="#" className="hover:text-blue-600 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-blue-600 transition-colors">GitHub</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
