import { useLang } from "@/lib/contexts";
import React from "react";

const Contact: React.FC = () => {
  const { lang } = useLang();

  return (
    <div className="pt-48 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Traditional Contact */}
          <div>
            <h2 className="text-xs tracking-[0.5em] font-bold text-blue-600 uppercase mb-8">
              {lang === "en" ? "Get in Touch" : "お問い合わせ"}
            </h2>
            <h1 className="text-7xl font-serif-display italic mb-16 -ml-1">
              {lang === "en" ? "Start a project." : "プロジェクトを始める。"}
            </h1>
            <p className="text-gray-500 mb-16 leading-relaxed max-w-md font-serif-jp text-lg">
              {lang === "en"
                ? "Whether you have a specific inquiry or just want to discuss the future of digital craft, my inbox is always open."
                : "具体的なお問い合わせから、デジタルクラフトの未来に関する雑談まで、お気軽にご連絡ください。"}
            </p>

            <form className="space-y-12">
              <div className="border-b border-gray-200 py-6 focus-within:border-blue-600 transition-colors">
                <input
                  type="text"
                  placeholder={lang === "en" ? "NAME" : "名前"}
                  className="w-full bg-transparent border-none outline-none text-[10px] tracking-[0.3em] font-bold uppercase placeholder:text-gray-300"
                />
              </div>
              <div className="border-b border-gray-200 py-6 focus-within:border-blue-600 transition-colors">
                <input
                  type="email"
                  placeholder={
                    lang === "en" ? "EMAIL ADDRESS" : "メールアドレス"
                  }
                  className="w-full bg-transparent border-none outline-none text-[10px] tracking-[0.3em] font-bold uppercase placeholder:text-gray-300"
                />
              </div>
              <div className="border-b border-gray-200 py-6 focus-within:border-blue-600 transition-colors">
                <textarea
                  rows={4}
                  placeholder={
                    lang === "en"
                      ? "TELL ME ABOUT YOUR VISION"
                      : "あなたのビジョンについて教えてください"
                  }
                  className="w-full bg-transparent border-none outline-none text-[10px] tracking-[0.3em] font-bold uppercase placeholder:text-gray-300 resize-none font-serif-jp"
                ></textarea>
              </div>
              <button className="px-16 py-8 bg-gray-900 text-white text-[10px] tracking-[0.5em] font-bold uppercase hover:bg-blue-600 transition-all">
                {lang === "en" ? "Send Message" : "メッセージを送信"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
