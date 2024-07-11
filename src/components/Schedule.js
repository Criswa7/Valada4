import React from 'react';
import './Schedule.css';

function Schedule() {
  const events = [
      { time: '9:30', description: 'Apertura de puertas' },
          { time: '13:00', description: 'Almuerzo' },
              { time: '17:00', description: 'Comida' },
                                        ];

                                          return (
                                              <div className="schedule">
                                                    <h2>Horario de la Velada del Año 4</h2>
                                                          <ul className="event-list">
                                                                  {events.map((event, index) => (
                                                                            <li key={index} className="event-item">
                                                                                        <span className="event-time">{event.time}</span>
                                                                                                    <span className="event-description">{event.description}</span>
                                                                                                              </li>
                                                                                                                      ))}
                                                                                                                            </ul>
                                                                                                                                </div>
                                                                                                                                  );
                                                                                                                                  }

                                                                                                                                  export default Schedule;