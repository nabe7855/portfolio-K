
import React from 'react';
import { useLang } from '../App';

const Secret: React.FC = () => {
  const { lang } = useLang();

  return (
    <div className="pt-48 pb-32 min-h-screen bg-[#0A0A0A] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-32">
          <h2 className="text-xs tracking-[0.6em] font-bold text-blue-500 mb-8 uppercase">
            {lang === 'en' ? 'The Inner Circle' : 'インナーサークル'}
          </h2>
          <h1 className="text-7xl md:text-9xl font-serif-display italic mb-12">Exclusive.</h1>
          <p className="text-xl md:text-3xl text-gray-400 font-serif-jp max-w-4xl leading-relaxed italic">
            {lang === 'en' 
              ? 'Accessing the deep-layer blueprints of high-performance creative engineering.' 
              : 'ハイパフォーマンスなクリエイティブ・エンジニアリングの深層ブループリントへ。'}
          </p>
        </header>

        {/* Exclusive Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="bg-white/5 border border-white/10 p-12 hover:bg-white/10 transition-all">
            <h3 className="text-xs font-bold tracking-[0.4em] text-blue-400 mb-8 uppercase">Blueprints</h3>
            <h4 className="text-3xl font-serif-jp font-bold mb-6">Gemini-Edge Architecture v2</h4>
            <p className="text-gray-500 mb-8 leading-relaxed">
              {lang === 'en' 
                ? 'Unreleased system architecture for real-time latent space exploration using Web Workers.' 
                : 'Web Workerを使用したリアルタイム潜在空間探索のための、未発表システムアーキテクチャ。'}
            </p>
            <div className="aspect-video bg-black/40 border border-white/5 mb-8 flex items-center justify-center">
               <span className="text-[10px] tracking-widest text-gray-600 uppercase font-bold">[ Confidential Visual ]</span>
            </div>
            <button className="text-[10px] tracking-[0.4em] font-bold uppercase border-b border-blue-400 pb-1 hover:text-blue-400">Download Schema</button>
          </div>

          <div className="bg-white/5 border border-white/10 p-12 hover:bg-white/10 transition-all">
            <h3 className="text-xs font-bold tracking-[0.4em] text-blue-400 mb-8 uppercase">Philosophy</h3>
            <h4 className="text-3xl font-serif-jp font-bold mb-6">Designing for Multi-Agent Systems</h4>
            <p className="text-gray-500 mb-8 leading-relaxed">
              {lang === 'en' 
                ? 'A deep dive into UX patterns when multiple AI agents interact within a single canvas.' 
                : '複数のAIエージェントが単一のキャンバス内で相互作用する際のUXパターンへの深い考察。'}
            </p>
            <div className="aspect-video bg-black/40 border border-white/5 mb-8 flex items-center justify-center">
               <span className="text-[10px] tracking-widest text-gray-600 uppercase font-bold">[ Member Only Insight ]</span>
            </div>
            <button className="text-[10px] tracking-[0.4em] font-bold uppercase border-b border-blue-400 pb-1 hover:text-blue-400">Listen to Audio Insight</button>
          </div>
        </div>

        {/* Private Sketchbook Section */}
        <section className="mt-40">
           <h2 className="text-xs tracking-[0.6em] font-bold text-gray-500 mb-16 uppercase text-center">Private Sketchbook</h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-square bg-white/5 grayscale hover:grayscale-0 transition-all cursor-pointer group relative overflow-hidden">
                   <img 
                    src={`https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&q=80&w=400&seed=${i}`} 
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity" 
                    alt="Private Sketch" 
                   />
                   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-blue-600/20">
                      <span className="text-[8px] font-bold tracking-widest uppercase">View Concept {i}</span>
                   </div>
                </div>
              ))}
           </div>
        </section>
      </div>
    </div>
  );
};

export default Secret;
