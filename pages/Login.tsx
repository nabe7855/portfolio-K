import { useAuth, useLang } from "@/lib/contexts";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const { login } = useAuth();
  const { lang } = useLang();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication: just check if not empty
    if (user && pass) {
      login();
      navigate("/secret");
    }
  };

  return (
    <div className="pt-48 pb-32 min-h-screen bg-[#F8F9FA] flex items-center justify-center">
      <div className="max-w-md w-full px-6">
        <div className="text-center mb-16">
          <h2 className="text-xs tracking-[0.5em] font-bold text-blue-600 uppercase mb-4">
            {lang === "en" ? "Member Portal" : "メンバーポータル"}
          </h2>
          <h1 className="text-5xl font-serif-display italic">
            {lang === "en" ? "Unlock Perspective." : "視点を解き放つ。"}
          </h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-12 shadow-2xl rounded-sm border border-gray-100"
        >
          <div className="space-y-8 mb-12">
            <div className="border-b border-gray-200 py-4 focus-within:border-blue-600 transition-colors">
              <label className="block text-[8px] font-bold tracking-widest text-gray-400 uppercase mb-2">
                Identifier
              </label>
              <input
                type="text"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                placeholder="USERNAME"
                className="w-full bg-transparent border-none outline-none text-xs tracking-widest font-bold uppercase placeholder:text-gray-200"
              />
            </div>
            <div className="border-b border-gray-200 py-4 focus-within:border-blue-600 transition-colors">
              <label className="block text-[8px] font-bold tracking-widest text-gray-400 uppercase mb-2">
                Access Key
              </label>
              <input
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="PASSWORD"
                className="w-full bg-transparent border-none outline-none text-xs tracking-widest font-bold uppercase placeholder:text-gray-200"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-6 bg-gray-900 text-white text-[10px] tracking-[0.5em] font-bold uppercase hover:bg-blue-600 transition-all"
          >
            {lang === "en" ? "Authenticate" : "認証する"}
          </button>

          <p className="mt-8 text-center text-[10px] text-gray-400 tracking-widest leading-relaxed">
            {lang === "en"
              ? "Restricted to authorized partners and subscribers."
              : "許可されたパートナーおよび加入者のみアクセス可能です。"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
