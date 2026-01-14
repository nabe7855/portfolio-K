import { useLang } from "@/lib/contexts";
import React from "react";
import { Link } from "react-router-dom";
import { JOURNAL_ENTRIES } from "../constants";

const Journal: React.FC = () => {
  const { lang } = useLang();

  return (
    <div className="pt-48 pb-32 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-xs tracking-[0.5em] font-bold text-blue-600 mb-8 uppercase">
          {lang === "en" ? "Perspective" : "私の視点"}
        </h2>
        <h1 className="text-7xl md:text-9xl font-serif-display italic mb-24 -ml-1">
          Journal.
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {JOURNAL_ENTRIES.map((entry) => (
            <Link key={entry.id} to={`/journal/${entry.id}`} className="group">
              <div className="aspect-[16/10] bg-gray-100 mb-8 overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800`}
                  alt={entry.title[lang]}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <p className="text-[10px] font-bold text-gray-400 mb-4 tracking-[0.2em] uppercase">
                {entry.date}
              </p>
              <h3 className="text-2xl font-serif-jp font-bold mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                {entry.title[lang]}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed font-serif-jp mb-6">
                {entry.excerpt[lang]}
              </p>
              <div className="flex gap-4">
                {entry.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] font-bold tracking-widest text-gray-300 uppercase"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journal;
