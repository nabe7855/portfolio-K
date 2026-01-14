
import React from 'react';
import { Link } from 'react-router-dom';
import { WORKS, JOURNAL_ENTRIES } from '../constants';
import { useLang } from '../App';

const Home: React.FC = () => {
  const { lang } = useLang();

  return (
    <div className="pt-32">
      {/* Manifesto Section */}
      <section className="min-h-[85vh] flex flex-col justify-center max-w-7xl mx-auto px-6">
        <h2 className="text-xs tracking-[0.5em] font-bold text-blue-600 mb-8 uppercase">
          {lang === 'en' ? 'Manifesto' : 'マニフェスト'}
        </h2>
        <h1 className="text-5xl md:text-[7rem] font-serif-display leading-[0.9] mb-12 max-w-6xl italic -ml-1">
          {lang === 'en' ? 'Turning complex code into ' : '複雑なコードを'}
          <span className="not-italic font-bold text-gray-900 underline decoration-blue-500 decoration-[12px] underline-offset-[16px]">
            {lang === 'en' ? 'emotional' : '感情的な'}
          </span>
          {lang === 'en' ? ' experiences.' : '体験へ。'}
        </h1>
        <p className="text-lg md:text-2xl text-gray-400 max-w-2xl leading-relaxed font-serif-jp">
          {lang === 'en' 
            ? 'I bridge the gap between rigorous technical engineering and high-end visual design. The future belongs to those who treat code as a brush, not just a tool.' 
            : '厳格な技術工学とハイエンドな視覚デザインの溝を埋めます。コードを単なる道具ではなく、筆として扱う者が未来を創ります。'}
        </p>
      </section>

      {/* Selected Works */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-32">
            <div>
              <h2 className="text-xs tracking-[0.5em] font-bold text-blue-600 mb-4 uppercase">
                {lang === 'en' ? 'Selected Works' : '厳選された実績'}
              </h2>
              <h3 className="text-5xl font-serif-jp font-bold">
                {lang === 'en' ? 'Crystals of Vision & Logic' : '思考と実装の結晶'}
              </h3>
            </div>
            <Link to="/works" className="text-xs tracking-[0.3em] font-bold uppercase hover:text-blue-600 transition-colors flex items-center gap-3">
              {lang === 'en' ? 'View All Archive' : '全ての実績を見る'} <span className="text-xl">→</span>
            </Link>
          </div>

          <div className="space-y-64">
            {WORKS.slice(0, 2).map((work, idx) => (
              <div key={work.id} className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-16 md:gap-32 items-center`}>
                <div className="w-full md:w-3/5 overflow-hidden group aspect-[4/3] bg-gray-100">
                  <Link to={`/works/${work.id}`}>
                    <img 
                      src={work.thumbnail} 
                      alt={work.title[lang]} 
                      className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                    />
                  </Link>
                </div>
                <div className="w-full md:w-2/5">
                  <div className="flex items-center gap-4 mb-8">
                     <span className="text-[10px] font-bold tracking-[0.3em] text-gray-300 uppercase">{work.year}</span>
                     <div className="h-[1px] w-8 bg-gray-200"></div>
                     <span className="text-[10px] font-bold tracking-[0.3em] text-blue-600 uppercase">{work.category[lang]}</span>
                  </div>
                  <h4 className="text-5xl font-serif-display font-bold mb-8 italic">{work.title[lang]}</h4>
                  <p className="text-gray-500 mb-10 leading-relaxed font-serif-jp text-lg">
                    {work.summary[lang]}
                  </p>
                  <Link 
                    to={`/works/${work.id}`} 
                    className="inline-flex items-center gap-4 border-b border-gray-900 pb-2 text-[10px] font-bold tracking-[0.4em] hover:text-blue-600 hover:border-blue-600 transition-all uppercase"
                  >
                    {lang === 'en' ? 'Explore Story' : '詳細を見る'} <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perspective Snippet */}
      <section className="py-40 bg-[#0A0A0A] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] -mr-40 -mt-40"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
            <div>
               <h2 className="text-xs tracking-[0.5em] font-bold text-blue-500 mb-8 uppercase">
                 {lang === 'en' ? 'Perspective' : '視点'}
               </h2>
               <h3 className="text-6xl md:text-8xl font-serif-display leading-tight mb-12 italic">
                 {lang === 'en' ? 'Engineering with a Soul.' : '魂のこもったエンジニアリング。'}
               </h3>
               <p className="text-gray-400 mb-16 max-w-md font-serif-jp text-lg leading-relaxed">
                 {lang === 'en' 
                   ? 'Deep dives into the intersection of human intuition and digital automation.' 
                   : '人間の直感とデジタル自動化が交差する深淵への考察。'}
               </p>
               <Link to="/journal" className="inline-block px-12 py-6 border border-white text-[10px] tracking-[0.4em] font-bold uppercase hover:bg-white hover:text-black transition-all">
                 {lang === 'en' ? 'Read Journal' : '記事を読む'}
               </Link>
            </div>
            <div className="space-y-16">
              {JOURNAL_ENTRIES.map(entry => (
                <div key={entry.id} className="group border-b border-white/10 pb-16">
                  <p className="text-[10px] font-bold text-gray-500 mb-6 uppercase tracking-[0.2em]">{entry.date}</p>
                  <h4 className="text-3xl font-serif-jp font-bold group-hover:text-blue-500 transition-colors mb-6">{entry.title[lang]}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8 font-serif-jp">{entry.excerpt[lang]}</p>
                  <Link to={`/journal/${entry.id}`} className="text-[10px] tracking-[0.3em] font-bold uppercase group-hover:text-blue-500">
                    {lang === 'en' ? 'Read Entry' : '記事の全文へ'} —
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-60 bg-white text-center">
        <h2 className="text-[10px] tracking-[0.6em] font-bold text-gray-300 mb-16 uppercase">
          {lang === 'en' ? 'Available for collaboration' : 'コラボレーションの受付'}
        </h2>
        <Link to="/contact" className="text-6xl md:text-[10rem] font-serif-display italic font-bold hover:text-blue-600 transition-all duration-700 block mb-16 leading-none">
          {lang === 'en' ? "Let's Talk." : '話をしよう。'}
        </Link>
        <div className="flex justify-center gap-12">
            <span className="w-12 h-[1px] bg-gray-200 self-center"></span>
            <p className="text-gray-400 uppercase tracking-[0.4em] font-bold text-[10px]">
               {lang === 'en' ? 'Crafting the future' : '未来を形にする'}
            </p>
            <span className="w-12 h-[1px] bg-gray-200 self-center"></span>
        </div>
      </section>
    </div>
  );
};

export default Home;
