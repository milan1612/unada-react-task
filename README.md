# Planetary System Explorer

A beautiful, interactive space-themed web application that displays planetary systems with orbital mechanics, moons, and detailed planet information. Built with React and Vite.

![Planetary System Explorer](https://img.shields.io/badge/React-19.1.1-blue) ![Vite](https://img.shields.io/badge/Vite-7.1.7-purple)

## 🌌 Features

- **Interactive Planetary System**: Explore 6 different planets (ETHERON, LUMENARA, THERONIX, ORIONIS, LUMENIDA, PHAERONIX)
- **Orbital Mechanics**: Visual representation of orbital rings showing half-arcs (upper half only)
- **Moons & Planets**: Multiple moons orbiting each planet, positioned along orbital paths
- **Side Navigation**: Clickable side planets for quick navigation between different planetary systems
- **Animated Transitions**: Smooth sliding animations when switching between planets
- **Space Background**: Dynamic starry background with twinkling stars and nebula effects
- **Responsive Design**: Fully responsive layout that adapts to different screen sizes
- **Glow Effects**: Beautiful shadow and glow effects on all planets and celestial bodies
- **Planet Data Display**: Detailed statistics for each planet (Galaxy, Diameter, Day Length, Temperature, Climate)

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository** (or navigate to the project directory)
   ```bash
   cd unada-react-task
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

### Running the Project

#### Development Mode

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is busy).

#### Build for Production

Create a production build:

```bash
npm run build
```

The optimized files will be in the `dist` directory.

#### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

#### Lint Code

Run ESLint to check code quality:

```bash
npm run lint
```

## 📁 Project Structure

```
unada-react-task/
├── public/
│   └── images/          # Planet images directory
├── src/
│   ├── components/
│   │   ├── Header.jsx      # Navigation header component
│   │   ├── PlanetData.jsx  # Planet statistics display
│   │   └── PlanetView.jsx  # Planetary system visualization
│   ├── data/
│   │   └── planets.js      # Planet data configuration
│   ├── App.jsx             # Main application component
│   ├── App.css             # Application styles
│   ├── index.css           # Global styles and space theme
│   └── main.jsx            # Application entry point
├── index.html
├── package.json
└── README.md
```

## 🛠️ Technologies Used

- **React 19.1.1** - UI library
- **Vite 7.1.7** - Build tool and development server
- **CSS3** - Custom styling with animations and effects
- **SVG** - Orbital rings and graphics

## 🎨 Features in Detail

### Planetary System Display
- Central planet with glow effects
- Multiple orbital rings (6 outer rings + 3 inner rings for moons)
- Half-arc orbits (upper portion only)
- Orbiting planets positioned along orbital paths
- Small moons scattered around each planet

### Navigation
- **Header Navigation**: Dynamic navigation menu that changes per planet
- **Side Planets**: Clickable planets on left and right sides for quick navigation
- **Orbiting Planets**: Click any orbiting planet to switch views
- **Smooth Transitions**: Sliding animation when changing planets

### Styling
- Dark space theme with gradient backgrounds
- Twinkling star effects
- Nebula-like gradients
- Glow and shadow effects on all celestial bodies
- Responsive breakpoints for mobile, tablet, and desktop

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1280px (side planets visible)

## 🎯 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🌍 Planets Available

1. **ETHERON** - Purple/blue gaseous planet
2. **LUMENARA** - Orange/red fiery planet
3. **THERONIX** - Green/blue terrestrial planet
4. **ORIONIS** - Blue/white oceanic planet
5. **LUMENIDA** - Orange/red gas giant
6. **PHAERONIX** - Orange/brown planet

## 🎨 Customization

### Adding New Planets

Edit `src/data/planets.js` to add new planets:

```javascript
{
  id: 'new-planet',
  name: 'NEW PLANET',
  image: '/images/new-planet.png',
  header: {
    title: 'TITLE',
    navItems: ['HOME', 'ABOUT', ...],
    activeNav: 'HOME'
  },
  stats: {
    'GALAXY': 'Galaxy Name',
    'DIAMETER': 'Size',
    // ... more stats
  },
  sidePlanets: ['planet1', 'planet2'],
  orbitingPlanets: ['planet1', 'planet2', ...],
  moons: 5
}
```

### Styling

- Main styles: `src/index.css`
- Component styles: `src/components/*.jsx`
- App-specific styles: `src/App.css`

## 📝 Notes

- Planet images are loaded from external URLs (Unsplash). For production, consider hosting images locally.
- The application uses pure CSS (no Tailwind or other CSS frameworks).
- All orbits are displayed as half-arcs on the upper portion only.
- The layout is designed to fit on one screen without scrolling.

## 🤝 Contributing

Feel free to submit issues or pull requests if you'd like to contribute to this project.

## 📄 License

This project is private and proprietary.

---

**Built with ❤️ using React and Vite**
