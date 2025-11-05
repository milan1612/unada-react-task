import React from 'react';

export default function PlanetData({ planet, isAnimating }) {
  if (!planet) return null;

  return (
    <div className="planet-data-container">
      <h1 className="planet-name">{planet.name}</h1>
      
      <div className={`stats-container ${isAnimating ? 'animating' : ''}`}>
        {Object.entries(planet.stats).map(([key, value]) => (
          <div key={key} className="stat-item">
            <div className="stat-label">{key}</div>
            <div className="stat-value">{value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
