import React, { useState } from 'react';
import { planets } from './data/planets';
import Header from './components/Header';
import PlanetData from './components/PlanetData';
import PlanetView from './components/PlanetView';
import './App.css';

function App() {
  const [activePlanetId, setActivePlanetId] = useState('etheron');
  const [isAnimating, setIsAnimating] = useState(false);

  const activePlanet = planets.find((p) => p.id === activePlanetId) || planets[0];

  const handlePlanetClick = (planetId) => {
    if (planetId === activePlanetId) return;
    
    setIsAnimating(true);
    
    setTimeout(() => {
      setActivePlanetId(planetId);
      setTimeout(() => {
        setIsAnimating(false);
      }, 50);
    }, 300);
  };

  // Generate stars for background
  const generateStars = () => {
    const stars = [];
    for (let i = 0; i < 150; i++) {
      const size = Math.random() * 3 + 0.5;
      const starClass = size < 1.5 ? 'star star-small' : size < 2.5 ? 'star star-medium' : 'star star-large';
      stars.push(
        <div
          key={`star-small-${i}`}
          className={starClass}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${size}px`,
            height: `${size}px`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      );
    }
    return stars;
  };

  return (
    <div className="app-container">
      {/* Space Background */}
      <div className="space-background">
        {generateStars()}
        <div className="nebula nebula-1"></div>
        <div className="nebula nebula-2"></div>
        <div className="nebula nebula-3"></div>
      </div>

      {/* Main Content */}
      <div className="main-container">
        <Header planet={activePlanet} />
        <PlanetData planet={activePlanet} isAnimating={isAnimating} />
        <PlanetView
          planet={activePlanet}
          allPlanets={planets}
          onPlanetClick={handlePlanetClick}
        />
      </div>
    </div>
  );
}

export default App;
