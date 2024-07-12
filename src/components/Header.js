import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Header.css';

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <h1>Velada del Año 4</h1>
      <nav>
        <ul>
          {['Menú', 'Horario', 'Votaciones'].map((item) => (
            <motion.li key={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to={item === 'Menú' ? '/' : `/${item.toLowerCase()}`}
                className={location.pathname === (item === 'Menú' ? '/' : `/${item.toLowerCase()}`) ? 'active' : ''}
              >
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;