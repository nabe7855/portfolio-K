"use client";

import { Language } from "@/types";
import React, { createContext, useContext, useEffect, useState } from "react";

// --- Language Context ---
interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
}
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

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
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLang must be used within a LanguageProvider");
  return context;
};

// --- Auth Context ---
interface AuthContextType {
  isLoggedIn: boolean;
  isMounted: boolean;
  login: () => void;
  logout: () => void;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);

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
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
