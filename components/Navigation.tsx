import { useAuth, useLang } from "@/lib/contexts";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { lang, setLang } = useLang();
  const { isLoggedIn, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: { en: "HOME", ja: "ホーム" }, path: "/" },
    { name: { en: "WORKS", ja: "実績" }, path: "/works" },
    { name: { en: "ABOUT", ja: "概要" }, path: "/about" },
    { name: { en: "JOURNAL", ja: "記事" }, path: "/journal" },
    { name: { en: "CONTACT", ja: "連絡" }, path: "/contact" },
  ];

  if (isLoggedIn) {
    navLinks.push({ name: { en: "MEMBER", ja: "メンバー" }, path: "/secret" });
  }

  const handleAuthAction = () => {
    if (isLoggedIn) {
      logout();
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl py-4 shadow-sm"
          : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link
          to="/"
          className="text-xl font-heading tracking-widest font-bold flex items-center gap-3"
        >
          <div className="w-8 h-[2px] bg-blue-600"></div>
          CREATIVE <span className="text-blue-600">TECH</span>
        </Link>
        <div className="hidden md:flex gap-12 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[10px] tracking-[0.2em] font-bold transition-all hover:text-blue-600 ${
                location.pathname === link.path
                  ? "text-blue-600"
                  : "text-gray-400"
              }`}
            >
              {link.name[lang]}
            </Link>
          ))}
          <div className="h-4 w-[1px] bg-gray-200"></div>
          <button
            onClick={() => setLang(lang === "en" ? "ja" : "en")}
            className="text-[10px] tracking-[0.2em] font-bold text-gray-400 hover:text-gray-900 transition-all uppercase"
          >
            {lang === "en" ? "JA" : "EN"}
          </button>
          <button
            onClick={handleAuthAction}
            className={`text-[10px] tracking-[0.2em] font-bold px-4 py-2 border transition-all uppercase rounded-sm ${
              isLoggedIn
                ? "border-red-200 text-red-400 hover:bg-red-50"
                : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            }`}
          >
            {isLoggedIn
              ? lang === "en"
                ? "LOGOUT"
                : "ログアウト"
              : lang === "en"
              ? "LOGIN"
              : "ログイン"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
