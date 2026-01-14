
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-20 items-start">
          <div className="md:w-2/5 sticky top-40">
            <img src="https://picsum.photos/seed/portrait/800/1000" alt="Portrait" className="w-full grayscale h-[700px] object-cover mb-8" />
            <h2 className="text-xs tracking-[0.5em] font-bold text-blue-600 uppercase mb-4">Location</h2>
            <p className="text-sm tracking-widest uppercase font-bold">Tokyo, JP / Global Remote</p>
          </div>
          <div className="md:w-3/5">
             <h2 className="text-xs tracking-[0.5em] font-bold text-blue-600 uppercase mb-8">About Me</h2>
             <h1 className="text-6xl md:text-8xl font-serif-display italic mb-12">I architect <br/> digital legacies.</h1>
             
             <div className="space-y-12 text-lg text-gray-600 leading-relaxed max-w-2xl font-serif-jp">
               <p>
                 デジタルとリアルの境界が溶け合う現代において、私は「技術」を「表現」として捉えています。単なるコードの集合体ではなく、ユーザーの感情に訴えかける体験を構築することが私の使命です。
               </p>
               <p>
                 With over 10 years of experience in high-end frontend engineering and creative direction, I have partnered with Fortune 500 companies and boutique startups to define their digital presence.
               </p>
             </div>

             <div className="mt-32">
                <h3 className="text-xs tracking-[0.5em] font-bold text-gray-400 uppercase mb-12">The Skillset</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                   <div>
                      <h4 className="text-2xl font-serif-display font-bold italic mb-6">Engineering</h4>
                      <ul className="space-y-4 text-sm font-bold tracking-widest uppercase text-gray-500">
                         <li>React / Next.js / TypeScript</li>
                         <li>WebGL / Three.js / D3.js</li>
                         <li>Gemini & Generative AI Integration</li>
                         <li>Performance Optimization</li>
                      </ul>
                   </div>
                   <div>
                      <h4 className="text-2xl font-serif-display font-bold italic mb-6">Direction</h4>
                      <ul className="space-y-4 text-sm font-bold tracking-widest uppercase text-gray-500">
                         <li>Creative Strategy</li>
                         <li>Design Systems (Figma)</li>
                         <li>UX Storytelling</li>
                         <li>Technical Architecture</li>
                      </ul>
                   </div>
                </div>
             </div>

             <div className="mt-40 p-12 bg-white shadow-2xl border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 -mr-16 -mt-16 rounded-full blur-3xl"></div>
                <h3 className="text-xs tracking-[0.5em] font-bold text-blue-600 uppercase mb-6">The Philosophy</h3>
                <p className="text-2xl font-serif-display italic leading-relaxed text-gray-900">
                  "Complexity is easy. Simplicity is a luxury that requires deep technical mastery to achieve."
                </p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
