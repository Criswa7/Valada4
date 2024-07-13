import React from 'react';
import { motion } from 'framer-motion';
import './Sponsors.css';

const sponsors = [
  { name: 'Valentina Latinasaurus', image: 'valentina.jpg' },
  { name: 'Ceti', image: 'ceti.jpg' },
  { name: 'Majo', image: 'majo.jpg' },
  { name: 'Seli', image: 'cely.jpg' },
  { name: 'David Prieto Amado', image: 'david-prieto.jpg' },
  { name: 'Lombiz', image: 'lombiz.jpg' },
  { name: 'Lorena & Andres', image: 'lorena-andres.jpg' },
  { name: 'Kevin Kevs', image: 'kevin-kevs.jpg' },
  { name: 'Johan Pececito', image: 'johan-pececito.jpg' },
  { name: 'Evelyn & Nicolai', image: 'evelyn-nicolai.jpg' },
  { name: 'Daniel elgordi', image: 'daniel-elgordi.jpg' },
  { name: 'Barman David Neira', image: 'david-neira.jpg' }
];

function Sponsors() {
  return (
    <footer className="sponsors">
      <h3>Patrocinadores</h3>
      <div className="sponsors-grid">
        {sponsors.map((sponsor, index) => (
          <motion.div
            key={sponsor.name}
            className="sponsor"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <img src={`${process.env.PUBLIC_URL}/images/sponsors/${sponsor.image}`} alt={sponsor.name} />
            <p>{sponsor.name}</p>
          </motion.div>
        ))}
      </div>
    </footer>
  );
}

export default Sponsors;