import React from 'react';
import './Menu.css';

function Menu() {
  const menuItems = {
    bebidas: ['Agua', 'Refresco', 'Cerveza'],
    almuerzo: ['Sándwich de pollo', 'Ensalada César', 'Pasta al pesto'],
    cena: ['Pizza', 'Hamburguesa', 'Tacos'],
    snacks: ['Papas fritas', 'Nachos', 'Palomitas']
  };

  return (
    <div className="menu">
      <h2>Menú de la Velada del Año 4</h2>
      {Object.entries(menuItems).map(([category, items]) => (
        <div key={category} className="menu-category">
          <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Menu;