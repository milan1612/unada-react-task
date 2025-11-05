// Using third-party planet images from space sources
export const planets = [
  {
    id: 'etheron',
    name: 'ETHERON',
    image: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=800&h=800&fit=crop&q=80',
    header: {
      title: 'MYLORA',
      navItems: ['HOME', 'ABOUT', 'PLANET', 'MYLORA', 'GALLERY', 'CONTACT', 'EXTRA'],
      activeNav: 'MYLORA'
    },
    stats: {
      'GALAXY': 'Andromeda-IV',
      'DIAMETER': '30.1k Earths',
      'DAY LENGTH': '20 Earth hours',
      'AVG TEMPERATURE': '-20°C - 8°C',
      'CLIMATE': 'Raw'
    },
    sidePlanets: ['orionis', 'lumenara'],
    orbitingPlanets: ['orionis', 'lumenara', 'theronix', 'phaeronix'],
    moons: 12,
    moonsWithSatellites: 3
  },
  {
    id: 'lumenara',
    name: 'LUMENARA',
    image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=800&h=800&fit=crop&q=80',
    header: {
      title: 'MENU',
      navItems: ['HOME', 'ABOUT', 'WHAT', 'METEORS', 'MAPS', 'GALLERY', 'CONTACT'],
      activeNav: 'METEORS'
    },
    stats: {
      'GALAXY': 'Andromeda IV',
      'DIAMETER': '150,640km',
      'DAY LENGTH': '8hr Earth hours',
      'AIR TEMPERATURE': '10°C-30°C',
      'CLIMATE': 'Tropical'
    },
    sidePlanets: ['etheron', 'theronix'],
    orbitingPlanets: ['etheron', 'theronix', 'phaeronix', 'orionis'],
    moons: 10,
    moonsWithSatellites: 2
  },
  {
    id: 'theronix',
    name: 'THERONIX',
    image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=800&h=800&fit=crop&q=80',
    header: {
      title: 'METEORA',
      navItems: ['Home', 'About', 'Contact', 'Explore', 'Guide', 'Documentation'],
      activeNav: 'Explore'
    },
    stats: {
      'PLANET TYPE': 'Terrestrial',
      'DISTANCE': '56,700 km',
      'DAY LENGTH': '12 Earth Hours',
      'TEMPERATURE': '-45°C to 90°C',
      'CLIMATE': 'Tropical'
    },
    sidePlanets: ['lumenida', 'orionis'],
    orbitingPlanets: ['lumenida', 'orionis', 'etheron', 'lumenara'],
    moons: 14,
    moonsWithSatellites: 4
  },
  {
    id: 'orionis',
    name: 'ORIONIS',
    image: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=800&h=800&fit=crop&q=80',
    header: {
      title: 'METAVERA',
      navItems: ['HOME', 'ABOUT', 'FEATURES', 'CONTACT', 'GALLERY', 'COMPANY'],
      activeNav: 'FEATURES'
    },
    stats: {
      'GALAXY': 'Vega A',
      'DIAMETER': '120,500 km',
      'DAY LENGTH': '4 Earthhours',
      'AVG. TEMPERATURE': '50°C to 80°C',
      'CLIMATE': 'Temperate'
    },
    sidePlanets: ['theronix', 'etheron'],
    orbitingPlanets: ['theronix', 'etheron', 'lumenara', 'phaeronix'],
    moons: 8,
    moonsWithSatellites: 2
  },
  {
    id: 'lumenida',
    name: 'LUMENIDA',
    image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=800&h=800&fit=crop&q=80',
    header: {
      title: 'METEORA',
      navItems: ['Home', 'About', 'Contact', 'Explore', 'Guide', 'Documentation'],
      activeNav: 'Explore'
    },
    stats: {
      'PLANET TYPE': 'Gas Giant',
      'DISTANCE': '45,200 km',
      'DAY LENGTH': '10 Earth Hours',
      'TEMPERATURE': '200°C to 500°C',
      'CLIMATE': 'Volcanic'
    },
    sidePlanets: ['theronix', 'orionis'],
    orbitingPlanets: ['theronix', 'orionis', 'etheron', 'lumenara'],
    moons: 11,
    moonsWithSatellites: 3
  },
  {
    id: 'phaeronix',
    name: 'PHAERONIX',
    image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=800&h=800&fit=crop&q=80',
    header: {
      title: 'MENU',
      navItems: ['HOME', 'ABOUT', 'WHAT', 'METEORS', 'MAPS', 'GALLERY', 'CONTACT'],
      activeNav: 'METEORS'
    },
    stats: {
      'GALAXY': 'Andromeda IV',
      'DIAMETER': '180,000km',
      'DAY LENGTH': '15hr Earth hours',
      'AIR TEMPERATURE': '5°C-25°C',
      'CLIMATE': 'Moderate'
    },
    sidePlanets: ['lumenara', 'etheron'],
    orbitingPlanets: ['lumenara', 'etheron', 'theronix', 'orionis'],
    moons: 13,
    moonsWithSatellites: 3
  }
];
