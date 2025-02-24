import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ThemeToggle from './components/ThemeToggle';
import backgroundVideo from './assets/background-video.mp4';
import SocialIcons from './components/SocialIcons';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light-theme');

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light-theme' ? 'dark-theme' : 'light-theme'));
  };

  return (
    <Router>
      <div className="app-container">
        <div className="theme-toggle-container">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
        <Navbar />
        <div className="video-container">
          <video
            className="background-video"
            src={backgroundVideo}
            muted
            loop
            autoPlay
            playsInline
          />
          <div className="video-overlay" />
        </div>
        <SocialIcons />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;