import React from 'react';
import { motion } from 'framer-motion';
import './Schedule.css';

function Schedule() {
  const events = [
    { time: '9:30AM', description: 'Apertura de puertas' },
    { time: '1:00 PM', description: 'Almuerzo' },
    { time: '5:00 PM', description: 'Cena' },
  ];

  return (
    <div className="schedule">
      <h2>Horario de la Velada</h2>
      <motion.ul className="event-list">
        {events.map((event, index) => (
          <motion.li 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="event-time">{event.time}</span>
            <span className="event-description">{event.description}</span>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

export default Schedule;