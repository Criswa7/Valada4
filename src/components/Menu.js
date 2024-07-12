import React from 'react';
import { motion } from 'framer-motion';
import './Menu.css';

const MenuItem = ({ item, image }) => (
  <motion.div 
    className="menu-item"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <img src={`/images/menu/${image}`} alt={item} className="menu-item-image" />
    <span>{item}</span>
  </motion.div>
);

function Menu() {
  const menuItems = {
    bebidas: [
      { name: 'Agua', image: 'agua.png' },
      { name: 'Sangría', image: 'sangria.png' },
      { name: 'Cerveza michelada', image: 'michelada.png' },
      { name: 'Mojito', image: 'mojito.png' },
      { name: 'Cuba Libre', image: 'cuba-libre.png' },
      { name: 'Rusia Libre', image: 'rusia-libre.png' },
      { name: 'Vodka Sunrise', image: 'vodka-sunrise.png' }
    ],
    almuerzo: [{ name: 'Desde las 1PM', image: 'almuerzo.png' }],
    cena: [{ name: 'Por definir', image: 'cena.png' }]
  };

  return (
    <div className="menu">
      <h2>Menú de la Velada del Año 4</h2>
      {Object.entries(menuItems).map(([category, items]) => (
        <motion.div 
          key={category} 
          className="menu-category"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
          <div className="menu-items">
            {items.map((item, index) => (
              <MenuItem key={index} item={item.name} image={item.image} />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Menu;