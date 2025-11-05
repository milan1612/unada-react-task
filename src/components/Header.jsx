import React from 'react';

export default function Header({ planet }) {
  if (!planet?.header) return null;

  const { title, navItems, activeNav } = planet.header;

  return (
    <header className="header-container">
      {title && title !== 'MENU' && (
        <h1 className="header-title">{title}</h1>
      )}
      
      {title === 'MENU' && (
        <h1 className="header-title-left">{title}</h1>
      )}
      
      <nav className="nav-menu">
        {navItems.map((item, index) => (
          <button
            key={index}
            className={`nav-item ${item === activeNav || item.toLowerCase() === activeNav?.toLowerCase() ? 'nav-item-active' : ''}`}
          >
            {item}
          </button>
        ))}
      </nav>
    </header>
  );
}
