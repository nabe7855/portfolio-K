
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { WORKS } from '../constants';
import { useLang } from '../App';

const WorkDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { lang } = useLang();
  const work = WORKS.find(w => w.id === id);

  if (!work) return <Navigate to="/works" />;

  return (
    <div className="pt-32">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <Link to="/works" className="text-[10px] font-bold tracking-[0.4em] text-gray-400 mb-20 block hover:text-blue-600 uppercase transition-colors">
          {lang === 'en' ? '← Back to Archive' : '← 実績一覧へ戻る'}
        </Link>
        <div className="flex flex-col md:flex-row justify-between items-end gap-16">
          <div className="md:w-3/4">
             <div className="flex items-center gap-6 mb-8">
               <span className="text-[10px] font-bold tracking-[0.3em] text-blue-600 uppercase">{work.year}</span>
               <div className="w-12 h-[1px] bg-gray-200"></div>
               <span className="text-[10px] font-bold tracking-[0.3em] text-gray-400 uppercase">{work.category[lang]}</span>
             </div>
             <h1 className="text-6xl md:text-[8rem] font-serif-display font-bold leading-none italic -ml-2">{work.title[lang]}</h1>
          </div>
          <div className="md:w-1/4 flex gap-3 flex-wrap justify-end">
            {work.tech.map(t => (
               <span key={t} className="px-5 py-2 bg-gray-50 border border-gray-100 text-[9px] tracking-[0.2em] font-bold uppercase rounded-full text-gray-500">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="w-full h-[85vh] mb-40 overflow-hidden relative">
        <img src={work.thumbnail} alt={work.title[lang]} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </section>

      {/* Story Sections */}
      <section className="max-w-5xl mx-auto px-6 mb-60">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24 mb-48 border-y border-gray-100 py-20">
          <div className="space-y-6">
            <h3 className="text-[10px] font-bold tracking-[0.4em] uppercase text-blue-600">Background</h3>
            <p className="text-gray-600 font-serif-jp leading-relaxed">{work.background[lang]}</p>
          </div>
          <div className="space-y-6">
            <h3 className="text-[10px] font-bold tracking-[0.4em] uppercase text-blue-600">The Challenge</h3>
            <p className="text-gray-600 font-serif-jp leading-relaxed">{work.challenge[lang]}</p>
          </div>
          <div className="space-y-6">
             <h3 className="text-[10px] font-bold tracking-[0.4em] uppercase text-blue-600">The Outcome</h3>
             <p className="text-gray-900 font-serif-jp leading-relaxed font-bold text-lg">{work.result[lang]}</p>
          </div>
        </div>

        <div className="space-y-40">
           <div className="max-w-3xl">
              <h2 className="text-5xl md:text-7xl font-serif-display italic mb-12 leading-tight">Crafting the <br/> Solution.</h2>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-serif-jp">
                {work.solution[lang]}
              </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="aspect-[4/5] bg-gray-100 overflow-hidden">
                <img src={`https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1000`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" alt="Process 1" />
              </div>
              <div className="aspect-[4/5] bg-gray-100 overflow-hidden md:mt-32">
                <img src={`https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1000`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" alt="Process 2" />
              </div>
           </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <section className="py-48 bg-[#0A0A0A] text-white text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        <p className="text-[10px] tracking-[0.6em] font-bold text-gray-600 mb-12 uppercase relative z-10">
          {lang === 'en' ? 'Next Project' : '次のプロジェクト'}
        </p>
        <Link 
           to={`/works/${WORKS[(WORKS.indexOf(work) + 1) % WORKS.length].id}`}
           className="text-5xl md:text-9xl font-serif-display italic font-bold hover:text-blue-500 transition-all duration-700 relative z-10 block"
        >
          {WORKS[(WORKS.indexOf(work) + 1) % WORKS.length].title[lang]} →
        </Link>
      </section>
    </div>
  );
};

export default WorkDetail;
