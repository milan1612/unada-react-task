import React, { useState } from 'react';
import { planets } from '../data/planets';

export default function PlanetDisplay() {
  const [activePlanetId, setActivePlanetId] = useState(planets[0].id);
  
  const activePlanet = planets.find(p => p.id === activePlanetId);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-black text-white p-4 flex flex-col items-center">
      
      {/* Navigation Header */}
      <nav className="flex space-x-6 mb-8 uppercase tracking-widest text-gray-400">
        {planets.map(({id, name}) => (
          <button
            key={id}
            onClick={() => setActivePlanetId(id)}
            className={`hover:text-white ${activePlanetId === id ? 'text-white' : ''}`}
          >
            {name}
          </button>
        ))}
      </nav>
      
      {/* Planet Main Display */}
      <div className="relative w-full max-w-5xl h-[400px] md:h-[600px] flex justify-center items-center">
        
        {/* Half Orbit Lines */}
        <svg
          className="absolute inset-0 w-full h-full"
          aria-hidden="true"
        >
          {/* Draw half orbit circles around center */}
          <circle cx="50%" cy="50%" r="140" stroke="#666" strokeWidth="1" fill="none" />
          <circle cx="50%" cy="50%" r="200" stroke="#444" strokeWidth="1" fill="none" />
        </svg>
        
        {/* Central Planet */}
        <img
          src={activePlanet.image}
          alt={activePlanet.name}
          className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover z-10"
        />
        
        {/* Side Planets */}
        {activePlanet.sidePlanets.map((sideId, idx) => {
          const sidePlanet = planets.find(p => p.id === sideId);
          const angle = idx === 0 ? 150 : 30; // position side planets on orbit (e.g. left & right)
          return (
            <button
              key={sidePlanet.id}
              onClick={() => setActivePlanetId(sidePlanet.id)}
              className="absolute rounded-full overflow-hidden cursor-pointer"
              style={{
                top: `calc(50% - 40px + ${Math.sin(angle * (Math.PI / 180)) * 150}px)`,
                left: `calc(50% - 40px + ${Math.cos(angle * (Math.PI / 180)) * 150}px)`,
                width: '80px',
                height: '80px',
                border: activePlanetId === sidePlanet.id ? '2px solid white' : 'none'
              }}
            >
              <img
                src={sidePlanet.image}
                alt={sidePlanet.name}
                className="w-full h-full object-cover"
              />
            </button>
          );
        })}
      </div>
      
      {/* Planet Data Section */}
      <div className="mt-8 text-center md:text-left max-w-4xl">
        <h1 className="text-5xl uppercase tracking-wide font-bold">{activePlanet.name}</h1>
        <div className="mt-4 flex justify-center md:justify-start space-x-8 text-sm md:text-base">
          {Object.entries(activePlanet.stats).map(([key, value]) => (
            <div key={key} className="uppercase tracking-wide">
              <div className="text-gray-400">{key}</div>
              <div className="text-white font-semibold">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
