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

  // Angles for orbiting planets (spread around the circle)
  const orbitAngles = orbitingPlanets.map((_, idx) => {
    const total = orbitingPlanets.length;
    return (360 / total) * idx;
  });

  // Generate moon positions
  const generateMoons = (count) => {
    return Array.from({ length: count }, (_, i) => ({
      id: `moon-${i}`,
      angle: (360 / count) * i,
      orbitRadius: 25 + (i % 3) * 6,
      size: 4 + (i % 3) * 2,
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
        {/* Orbital Rings SVG - Half Circles */}
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
          {/* Outer rings for planets - Top half only (upper arc) */}
          {[1, 2, 3, 4, 5, 6].map((ring, idx) => {
            const radius = 25 + idx * 6;
            const cx = 50;
            const cy = 50;
            // Top half arc: from 180° (left) to 0° (right) going through 270° (top)
            // In SVG: 0°=right, 90°=bottom, 180°=left, 270°=top
            // For upper arc: start at left (180°), end at right (0°), go counter-clockwise through top (270°)
            const startAngle = 180; // Left point
            const endAngle = 0;     // Right point
            const startX = cx + radius * Math.cos((startAngle * Math.PI) / 180);
            const startY = cy + radius * Math.sin((startAngle * Math.PI) / 180);
            const endX = cx + radius * Math.cos((endAngle * Math.PI) / 180);
            const endY = cy + radius * Math.sin((endAngle * Math.PI) / 180);
            // largeArcFlag: 0 for arc <= 180° (top half), 1 for arc > 180° (bottom half)
            // sweepFlag: 0 = counter-clockwise (goes through top), 1 = clockwise (goes through bottom)
            const largeArcFlag = "0"; // Small arc (top half)
            const sweepFlag = "0";    // Counter-clockwise (through top)
            
            return (
              <path
                key={`ring-${idx}`}
                d={`M ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} ${sweepFlag} ${endX} ${endY}`}
                fill="none"
                stroke="rgba(255, 255, 255, 0.3)"
                strokeWidth="0.15"
                strokeDasharray={idx % 2 === 0 ? "0.4 0.2" : "none"}
                opacity="0.7"
              />
            );
          })}
          {/* Inner rings for moons - Top half only */}
          {[1, 2, 3].map((ring, idx) => {
            const radius = 20 + idx * 4;
            const cx = 50;
            const cy = 50;
            // Top half arc: from 180° (left) to 0° (right) going through 270° (top)
            const startAngle = 180; // Left point
            const endAngle = 0;     // Right point
            const startX = cx + radius * Math.cos((startAngle * Math.PI) / 180);
            const startY = cy + radius * Math.sin((startAngle * Math.PI) / 180);
            const endX = cx + radius * Math.cos((endAngle * Math.PI) / 180);
            const endY = cy + radius * Math.sin((endAngle * Math.PI) / 180);
            const largeArcFlag = "0"; // Small arc (top half)
            const sweepFlag = "0";    // Counter-clockwise (through top)
            
            return (
              <path
                key={`moon-ring-${idx}`}
                d={`M ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} ${sweepFlag} ${endX} ${endY}`}
                fill="none"
                stroke="rgba(150, 150, 255, 0.3)"
                strokeWidth="0.1"
                strokeDasharray="0.2 0.2"
                opacity="0.5"
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

        {/* Moons - positioned along top half orbital rings only */}
        {moons.map((moon) => {
          // Position moons along the top half of the orbit (upper arc only)
          // Map angles to top half: 180° to 360° (or 0°), which gives negative y (above center)
          // Convert 0-360° to 180°-360° for top half
          const topHalfAngle = 180 + (moon.angle % 180); // Map to 180°-360° range
          const rad = (topHalfAngle * Math.PI) / 180;
          const x = Math.cos(rad) * moon.orbitRadius;
          const y = Math.sin(rad) * moon.orbitRadius; // Will be negative for top half

          return (
            <div
              key={moon.id}
              className="moon"
              style={{
                width: `${moon.size}px`,
                height: `${moon.size}px`,
                transform: `translate(calc(${x}% - 50%), calc(${y}% - 50%))`,
              }}
            />
          );
        })}

        {/* Orbiting Planets - positioned along top half arc only (upper) */}
        {orbitingPlanets.map((orbitingPlanet, idx) => {
          if (!orbitingPlanet) return null;
          // Position along top half only (upper arc): map to 180°-360° range
          // This ensures planets appear above the center (negative y values)
          const baseAngle = orbitAngles[idx] % 180;
          const topHalfAngle = 180 + baseAngle; // Map to 180°-360° for top half
          const radius = 25 + (idx % 4) * 6;
          const rad = (topHalfAngle * Math.PI) / 180;
          const x = Math.cos(rad) * radius;
          const y = Math.sin(rad) * radius; // Will be negative for top half

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
