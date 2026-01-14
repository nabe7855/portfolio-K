
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { WORKS } from '../constants';
import { useLang } from '../App';

const Works: React.FC = () => {
  const [hoveredWork, setHoveredWork] = useState<string | null>(null);
  const { lang } = useLang();

  return (
    <div className="pt-48 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-32">
        <div className="md:w-1/2">
          <h2 className="text-xs tracking-[0.5em] font-bold text-blue-600 mb-8 uppercase">
            {lang === 'en' ? 'Archive' : 'アーカイブ'}
          </h2>
          <h1 className="text-7xl md:text-9xl font-serif-display mb-24 italic -ml-1">Index.</h1>
          
          <div className="flex flex-col border-t border-gray-200">
            {WORKS.map((work) => (
              <Link
                key={work.id}
                to={`/works/${work.id}`}
                className="group py-12 border-b border-gray-200 flex justify-between items-center transition-all hover:pl-6"
                onMouseEnter={() => setHoveredWork(work.id)}
                onMouseLeave={() => setHoveredWork(null)}
              >
                <div>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-[10px] text-gray-300 font-bold uppercase tracking-widest">{work.year}</span>
                    <span className="w-4 h-[1px] bg-gray-200"></span>
                    <span className="text-[10px] text-blue-600 font-bold uppercase tracking-widest">{work.category[lang]}</span>
                  </div>
                  <h3 className="text-4xl font-serif-jp font-bold group-hover:text-blue-600 transition-colors">
                    {work.title[lang]}
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all">
                   <span className="text-xl group-hover:text-white transition-colors">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Dynamic Image Preview */}
        <div className="hidden md:block md:w-1/2 sticky top-48 h-[75vh] overflow-hidden bg-gray-50">
          <div className="relative w-full h-full p-12">
             <div className="absolute inset-0 border-[20px] border-white z-20 pointer-events-none"></div>
             {WORKS.map((work) => (
               <div 
                 key={work.id}
                 className={`absolute inset-0 transition-all duration-[1s] ease-in-out transform ${
                   hoveredWork === work.id ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'
                 }`}
               >
                 <img src={work.thumbnail} alt={work.title[lang]} className="w-full h-full object-cover grayscale-[0.5]" />
                 <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay"></div>
               </div>
             ))}
             {hoveredWork === null && (
               <div className="flex items-center justify-center h-full text-gray-200 font-serif-display italic text-3xl tracking-widest uppercase">
                 Vision Preview
               </div>
             )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
