
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { JOURNAL_ENTRIES } from '../constants';
import { useLang } from '../App';

const JournalDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { lang } = useLang();
  const entry = JOURNAL_ENTRIES.find(e => e.id === id);

  if (!entry) return <Navigate to="/journal" />;

  return (
    <div className="pt-48 pb-32">
      <article className="max-w-4xl mx-auto px-6">
        <Link to="/journal" className="text-[10px] font-bold tracking-[0.4em] text-gray-400 mb-20 block hover:text-blue-600 uppercase transition-colors">
          {lang === 'en' ? '← Back to Journal' : '← 記事一覧へ戻る'}
        </Link>
        
        <header className="mb-24">
          <p className="text-xs font-bold tracking-[0.3em] text-blue-600 mb-8 uppercase">{entry.date}</p>
          <h1 className="text-5xl md:text-7xl font-serif-jp font-bold leading-tight mb-12">
            {entry.title[lang]}
          </h1>
          <div className="flex gap-4 flex-wrap">
            {entry.tags.map(tag => (
              <span key={tag} className="px-4 py-1 border border-gray-200 text-[10px] font-bold tracking-widest text-gray-400 uppercase rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="prose prose-xl prose-gray max-w-none font-serif-jp leading-relaxed text-gray-700 space-y-8">
           <p className="text-2xl italic text-gray-900 border-l-4 border-blue-600 pl-8 py-4 bg-gray-50">
             {entry.excerpt[lang]}
           </p>
           <div className="text-lg leading-[2] whitespace-pre-wrap">
             {entry.content[lang]}
           </div>
           
           <div className="aspect-video bg-gray-100 my-20">
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Article Visual" />
           </div>

           <div className="text-lg leading-[2] whitespace-pre-wrap">
             {lang === 'en' 
               ? "The architecture of digital products often overlooks the emotional resonance of the user interface. Engineering is not just about solving logic puzzles; it's about defining the tactile feel of a brand in a virtual space."
               : "デジタルプロダクトのアーキテクチャは、しばしばユーザーインターフェースの感情的な共鳴を見落としがちです。エンジニアリングは単に論理パズルを解くことではありません。それは仮想空間におけるブランドの『手触り』を定義することなのです。"}
           </div>
        </div>

        <footer className="mt-32 pt-20 border-t border-gray-100">
           <h4 className="text-xs font-bold tracking-widest text-gray-300 uppercase mb-8 text-center">Share Perspective</h4>
           <div className="flex justify-center gap-12 text-[10px] font-bold tracking-[0.3em] uppercase">
              <a href="#" className="hover:text-blue-600 transition-colors">Twitter</a>
              <a href="#" className="hover:text-blue-600 transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Copy Link</a>
           </div>
        </footer>
      </article>
    </div>
  );
};

export default JournalDetail;
