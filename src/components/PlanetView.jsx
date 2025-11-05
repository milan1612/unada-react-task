import React from 'react';

export default function PlanetView({ planet, allPlanets, onPlanetClick }) {
  if (!planet) return null;

  // Get orbiting planets data
  const orbitingPlanets = planet.orbitingPlanets
    ? planet.orbitingPlanets.map(id => allPlanets.find(p => p.id === id)).filter(Boolean)
    : [];

  // Get side planets (left and right)
  const sidePlanets = planet.sidePlanets
    ? planet.sidePlanets.map(id => allPlanets.find(p => p.id === id)).filter(Boolean)
    : [];

  // Get moons count
  const moonsCount = planet.moons || 0;
  const moonsWithSatellites = planet.moonsWithSatellites || 0;

  // Angles for orbiting planets (spread around the circle)
  const orbitAngles = orbitingPlanets.map((_, idx) => {
    const total = orbitingPlanets.length;
    return (360 / total) * idx;
  });

  // Generate moon positions with more variety
  const generateMoons = (count) => {
    return Array.from({ length: count }, (_, i) => ({
      id: `moon-${i}`,
      angle: (360 / count) * i,
      orbitRadius: 20 + (i % 5) * 5, // More varied orbits
      size: 3 + (i % 4) * 2, // More size variety
      hasSatellites: i < moonsWithSatellites, // Some moons have satellites
    }));
  };

  const moons = generateMoons(moonsCount);

  // Side planet positions
  const sidePlanetPositions = {
    left: sidePlanets[0] || null,
    right: sidePlanets[1] || null
  };

  return (
    <div className="planet-view-container">
      {/* Central Planet Container */}
      <div className="planet-orbit-container">
        {/* Orbital Rings SVG - Half Circles (Upper Only) */}
        <svg
          className="orbit-svg"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflow: 'visible'
          }}
          aria-hidden="true"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 100 100"
        >
          {/* Full orbit rings around planets - Complete circles */}
          {/* Outer rings for planets - Full circles */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((ring, idx) => {
            const radius = 25 + idx * 6;
            const cx = 50;
            const cy = 50;
            
            return (
              <circle
                key={`ring-${idx}`}
                cx={cx}
                cy={cy}
                r={radius}
                fill="none"
                stroke="rgba(255, 255, 255, 0.5)"
                strokeWidth="0.25"
                strokeDasharray={idx % 2 === 0 ? "0.6 0.4" : "none"}
                opacity="0.9"
              />
            );
          })}
          {/* Inner rings for moons - Full circles */}
          {[1, 2, 3, 4, 5, 6].map((ring, idx) => {
            const radius = 20 + idx * 4;
            const cx = 50;
            const cy = 50;
            
            return (
              <circle
                key={`moon-ring-${idx}`}
                cx={cx}
                cy={cy}
                r={radius}
                fill="none"
                stroke="rgba(150, 150, 255, 0.5)"
                strokeWidth="0.2"
                strokeDasharray="0.4 0.4"
                opacity="0.7"
              />
            );
          })}
        </svg>

        {/* Central Planet */}
        <div className="central-planet">
          <img
            src={planet.image}
            alt={planet.name}
            className="planet-image"
            onError={(e) => {
              e.target.style.backgroundColor = '#4a5568';
              e.target.style.display = 'flex';
              e.target.style.alignItems = 'center';
              e.target.style.justifyContent = 'center';
            }}
          />
        </div>

        {/* Moons - positioned along full orbital rings */}
        {moons.map((moon) => {
          // Position moons along full orbit (all around the planet)
          const rad = (moon.angle * Math.PI) / 180;
          const x = Math.cos(rad) * moon.orbitRadius;
          const y = Math.sin(rad) * moon.orbitRadius;

          // Generate satellites around this moon if it has them
          const satelliteCount = moon.hasSatellites ? 2 + (moon.id.match(/\d+/)?.[0] % 3) : 0;

          return (
            <div key={moon.id}>
              {/* Main Moon */}
              <div
                className="moon"
                style={{
                  width: `${moon.size}px`,
                  height: `${moon.size}px`,
                  transform: `translate(calc(${x}% - 50%), calc(${y}% - 50%))`,
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  zIndex: 5,
                }}
              />
              
              {/* Satellites around moon (moons around moons) */}
              {moon.hasSatellites && Array.from({ length: satelliteCount }).map((_, satIdx) => {
                const satAngle = (360 / satelliteCount) * satIdx;
                const satRad = (satAngle * Math.PI) / 180;
                const satRadius = 2; // Small orbit radius around moon
                const satX = Math.cos(satRad) * satRadius;
                const satY = Math.sin(satRad) * satRadius;
                const satSize = 1.5; // Very small satellites

                return (
                  <div
                    key={`sat-${moon.id}-${satIdx}`}
                    className="moon-satellite"
                    style={{
                      width: `${satSize}px`,
                      height: `${satSize}px`,
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: `translate(calc(${x}% + ${satX}% - 50%), calc(${y}% + ${satY}% - 50%))`,
                      zIndex: 4,
                    }}
                  />
                );
              })}

              {/* Orbit ring around moon with satellites */}
              {moon.hasSatellites && (
                <svg
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '4%',
                    height: '4%',
                    transform: `translate(calc(${x}% - 2%), calc(${y}% - 2%))`,
                    zIndex: 3,
                    overflow: 'visible',
                  }}
                  viewBox="0 0 100 100"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="rgba(150, 150, 255, 0.2)"
                    strokeWidth="0.5"
                    strokeDasharray="1 1"
                    opacity="0.4"
                  />
                </svg>
              )}
            </div>
          );
        })}

        {/* Orbiting Planets - positioned along full orbit */}
        {orbitingPlanets.map((orbitingPlanet, idx) => {
          if (!orbitingPlanet) return null;
          // Position along full orbit (all around the planet)
          const angle = orbitAngles[idx];
          const radius = 25 + (idx % 4) * 6;
          const rad = (angle * Math.PI) / 180;
          const x = Math.cos(rad) * radius;
          const y = Math.sin(rad) * radius;

          return (
            <button
              key={orbitingPlanet.id}
              onClick={() => onPlanetClick(orbitingPlanet.id)}
              className="orbiting-planet"
              style={{
                transform: `translate(calc(${x}% - 50%), calc(${y}% - 50%))`,
              }}
              title={orbitingPlanet.name}
            >
              <img
                src={orbitingPlanet.image}
                alt={orbitingPlanet.name}
                onError={(e) => {
                  e.target.style.backgroundColor = '#4a5568';
                }}
              />
            </button>
          );
        })}
      </div>

      {/* Side Planets (Desktop) */}
      <div className="side-planets-container">
        {sidePlanetPositions.left && (
          <div className="side-planet side-planet-left">
            <button onClick={() => onPlanetClick(sidePlanetPositions.left.id)}>
              <img
                src={sidePlanetPositions.left.image}
                alt={sidePlanetPositions.left.name}
                className="side-planet-image"
                onError={(e) => {
                  e.target.style.backgroundColor = '#4a5568';
                }}
              />
              <div className="side-planet-name">{sidePlanetPositions.left.name}</div>
            </button>
          </div>
        )}

        {sidePlanetPositions.right && (
          <div className="side-planet side-planet-right">
            <button onClick={() => onPlanetClick(sidePlanetPositions.right.id)}>
              <img
                src={sidePlanetPositions.right.image}
                alt={sidePlanetPositions.right.name}
                className="side-planet-image"
                onError={(e) => {
                  e.target.style.backgroundColor = '#4a5568';
                }}
              />
              <div className="side-planet-name">{sidePlanetPositions.right.name}</div>
            </button>
          </div>
        )}
      </div>

      {/* Mobile Side Planets */}
      <div className="mobile-side-planets">
        {sidePlanetPositions.left && (
          <div className="mobile-side-planet" onClick={() => onPlanetClick(sidePlanetPositions.left.id)}>
            <img
              src={sidePlanetPositions.left.image}
              alt={sidePlanetPositions.left.name}
              className="mobile-side-planet-image"
              onError={(e) => {
                e.target.style.backgroundColor = '#4a5568';
              }}
            />
            <div className="mobile-side-planet-name">{sidePlanetPositions.left.name}</div>
          </div>
        )}
        {sidePlanetPositions.right && (
          <div className="mobile-side-planet" onClick={() => onPlanetClick(sidePlanetPositions.right.id)}>
            <img
              src={sidePlanetPositions.right.image}
              alt={sidePlanetPositions.right.name}
              className="mobile-side-planet-image"
              onError={(e) => {
                e.target.style.backgroundColor = '#4a5568';
              }}
            />
            <div className="mobile-side-planet-name">{sidePlanetPositions.right.name}</div>
          </div>
        )}
      </div>
    </div>
  );
}
