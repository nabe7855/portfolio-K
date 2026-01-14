"use client";

import { Language } from "@/types";
import React, { createContext, useContext, useEffect, useState } from "react";

// --- Language Context ---
interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
}
const LanguageContext = createContext<LanguageContextType>({
  lang: "ja",
  setLang: () => {},
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [lang, setLang] = useState<Language>("ja");
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => {
  return useContext(LanguageContext);
};

// --- Auth Context ---
interface AuthContextType {
  isLoggedIn: boolean;
  isMounted: boolean;
  login: () => void;
  logout: () => void;
}
const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  isMounted: false,
  login: () => {},
  logout: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const token = localStorage.getItem("auth_token");
    if (token === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const login = () => {
    setIsLoggedIn(true);
    localStorage.setItem("auth_token", "true");
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("auth_token");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, isMounted, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

// --- Unified Providers ---
export const Providers: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <LanguageProvider>
      <AuthProvider>{children}</AuthProvider>
    </LanguageProvider>
  );
};
