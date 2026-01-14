"use client";

import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { useAuth } from "@/lib/contexts";
import About from "@/views/About";
import Contact from "@/views/Contact";
import Home from "@/views/Home";
import Journal from "@/views/Journal";
import JournalDetail from "@/views/JournalDetail";
import Login from "@/views/Login";
import Secret from "@/views/Secret";
import WorkDetail from "@/views/WorkDetail";
import Works from "@/views/Works";
import React from "react";
import {
  Navigate,
  Route,
  HashRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";

// --- Protected Route ---
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn) return <Navigate to="/login" replace />;
  return <>{children}</>;
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppContent: React.FC = () => {
  const { isMounted } = useAuth();

  if (!isMounted) {
    return null;
  }

  return (
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
  );
};

const App: React.FC = () => {
  return <AppContent />;
};

export default App;
