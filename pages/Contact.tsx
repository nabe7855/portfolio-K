
import React, { useState, useRef, useEffect } from 'react';
import { getAIPersonaResponse } from '../services/geminiService';
import { useLang } from '../App';

const Contact: React.FC = () => {
  const [userQuery, setUserQuery] = useState('');
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { lang } = useLang();
  const responseRef = useRef<HTMLDivElement>(null);

  const handleAskAI = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userQuery.trim()) return;

    setIsLoading(true);
    setAiResponse(null);
    const response = await getAIPersonaResponse(userQuery);
    setAiResponse(response);
    setIsLoading(false);
  };

  useEffect(() => {
    if (aiResponse && responseRef.current) {
      responseRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [aiResponse]);

  return (
    <div className="pt-48 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-40">
          {/* Traditional Contact */}
          <div>
            <h2 className="text-xs tracking-[0.5em] font-bold text-blue-600 uppercase mb-8">
              {lang === 'en' ? 'Get in Touch' : 'お問い合わせ'}
            </h2>
            <h1 className="text-7xl font-serif-display italic mb-16 -ml-1">
              {lang === 'en' ? 'Start a project.' : 'プロジェクトを始める。'}
            </h1>
            <p className="text-gray-500 mb-16 leading-relaxed max-w-md font-serif-jp text-lg">
              {lang === 'en' 
                ? 'Whether you have a specific inquiry or just want to discuss the future of digital craft, my inbox is always open.' 
                : '具体的なお問い合わせから、デジタルクラフトの未来に関する雑談まで、お気軽にご連絡ください。'}
            </p>
            
            <form className="space-y-12">
              <div className="border-b border-gray-200 py-6 focus-within:border-blue-600 transition-colors">
                <input 
                  type="text" 
                  placeholder={lang === 'en' ? "NAME" : "名前"} 
                  className="w-full bg-transparent border-none outline-none text-[10px] tracking-[0.3em] font-bold uppercase placeholder:text-gray-300" 
                />
              </div>
              <div className="border-b border-gray-200 py-6 focus-within:border-blue-600 transition-colors">
                <input 
                  type="email" 
                  placeholder={lang === 'en' ? "EMAIL ADDRESS" : "メールアドレス"} 
                  className="w-full bg-transparent border-none outline-none text-[10px] tracking-[0.3em] font-bold uppercase placeholder:text-gray-300" 
                />
              </div>
              <div className="border-b border-gray-200 py-6 focus-within:border-blue-600 transition-colors">
                <textarea 
                  rows={4} 
                  placeholder={lang === 'en' ? "TELL ME ABOUT YOUR VISION" : "あなたのビジョンについて教えてください"} 
                  className="w-full bg-transparent border-none outline-none text-[10px] tracking-[0.3em] font-bold uppercase placeholder:text-gray-300 resize-none font-serif-jp"
                ></textarea>
              </div>
              <button className="px-16 py-8 bg-gray-900 text-white text-[10px] tracking-[0.5em] font-bold uppercase hover:bg-blue-600 transition-all">
                {lang === 'en' ? 'Send Message' : 'メッセージを送信'}
              </button>
            </form>
          </div>

          {/* AI Persona Section */}
          <div className="bg-white p-12 border border-gray-100 shadow-2xl rounded-sm relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 -mr-16 -mt-16 rounded-full blur-3xl"></div>
             <div className="flex items-center gap-4 mb-10">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <h3 className="text-[10px] tracking-[0.4em] font-bold uppercase text-gray-400">
                  {lang === 'en' ? 'AI Assistant Persona' : 'AIアシスタント'}
                </h3>
             </div>
             <p className="text-4xl font-serif-display mb-10 italic">
               {lang === 'en' ? 'Have a quick question about my work?' : '私の実績について質問がありますか？'}
             </p>
             <p className="text-gray-500 mb-12 font-serif-jp leading-relaxed">
                {lang === 'en' 
                  ? 'Ask my AI persona about my tech stack, past projects, or design philosophy.' 
                  : '使用技術、過去のプロジェクト、あるいはデザイン哲学についてAIアシスタントに尋ねてください。'}
             </p>

             <form onSubmit={handleAskAI} className="relative mb-12">
                <input 
                  type="text" 
                  value={userQuery}
                  onChange={(e) => setUserQuery(e.target.value)}
                  placeholder={lang === 'en' ? "e.g. What tech stack do you use?" : "例: 使用しているスタックは何ですか？"} 
                  className="w-full pl-8 pr-20 py-6 bg-[#F8F9FA] border border-gray-100 text-sm focus:border-blue-500 outline-none transition-all font-serif-jp"
                />
                <button 
                  disabled={isLoading}
                  type="submit" 
                  className="absolute right-6 top-1/2 -translate-y-1/2 text-blue-600 font-bold disabled:text-gray-300 text-[10px] tracking-widest uppercase"
                >
                  {isLoading ? '...' : (lang === 'en' ? 'ASK' : '送信')}
                </button>
             </form>

             {aiResponse && (
               <div ref={responseRef} className="animate-in fade-in slide-in-from-bottom-6 duration-1000">
                  <p className="text-[10px] tracking-[0.3em] font-bold text-gray-300 mb-6 uppercase">AI Response</p>
                  <div className="p-10 bg-blue-50/50 text-gray-800 text-lg leading-relaxed font-serif-jp italic rounded-sm border-l-4 border-blue-600">
                    {aiResponse}
                  </div>
               </div>
             )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
