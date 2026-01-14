"use client";

import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import Journal from "@/pages/Journal";
import JournalDetail from "@/pages/JournalDetail";
import Login from "@/pages/Login";
import Secret from "@/pages/Secret";
import WorkDetail from "@/pages/WorkDetail";
import Works from "@/pages/Works";
import { Language } from "@/types";
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  Navigate,
  Route,
  HashRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";

// --- Language Context ---
interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
}
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);
export const useLang = () => {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLang must be used within a LanguageProvider");
  return context;
};

// --- Auth Context ---
interface AuthContextType {
  isLoggedIn: boolean;
  login: (token: string) => void;
  logout: () => void;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};

// --- Protected Route ---
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn) return <Navigate to="/login" replace />;
  return <>{children}</>;
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>("ja");
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

  if (!isMounted) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
        <Router>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen selection:bg-blue-600 selection:text-white">
            <Navigation />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/works" element={<Works />} />
                <Route path="/works/:id" element={<WorkDetail />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/journal" element={<Journal />} />
                <Route path="/journal/:id" element={<JournalDetail />} />
                <Route path="/login" element={<Login />} />
                <Route
                  path="/secret"
                  element={
                    <ProtectedRoute>
                      <Secret />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AuthContext.Provider>
    </LanguageContext.Provider>
  );
};

export default App;
