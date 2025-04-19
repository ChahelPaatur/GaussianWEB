import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './styles/global.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import VantaBackground from './components/VantaBackground';
import ParticleBackground from './components/ParticleBackground';
import LoadingIndicator from './components/LoadingIndicator';

// Pages
import Home from './pages/Home';
import Documentation from './pages/Documentation';
import Download from './pages/Download';

const AppRoutes = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [prevLocation, setPrevLocation] = useState('');
  const isHomePage = location.pathname === '/';

  // Handle page transitions with loading indicator
  useEffect(() => {
    if (prevLocation !== location.pathname) {
      setIsLoading(true);
      setPrevLocation(location.pathname);
      
      // Simulate page loading time (remove in production and use actual data loading events)
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 800);
      
      return () => clearTimeout(timer);
    }
  }, [location.pathname, prevLocation]);

  return (
    <>
      {isHomePage ? <VantaBackground /> : <ParticleBackground />}
      <Navbar />
      {isLoading && <LoadingIndicator />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs/*" element={<Documentation />} />
        <Route path="/download" element={<Download />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </>
  );
};

function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://kit.fontawesome.com/a076d05399.js';
    script.crossOrigin = 'anonymous';
    document.body.appendChild(script);
    
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
