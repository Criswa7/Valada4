import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Menu from './components/Menu';
import Schedule from './components/Schedule';
import Voting from './components/Voting';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
            <ul>
                                          <li><Link to="/">Menú</Link></li>
                                                      <li><Link to="/horario">Horario</Link></li>
                                                                  <li><Link to="/votaciones">Votaciones</Link></li>
                                                                            </ul>
                                                                                    </nav>

                                                                                            <Routes>
                                                                                                      <Route path="/" element={<Menu />} />
                                                                                                                <Route path="/horario" element={<Schedule />} />
                                                                                                                          <Route path="/votaciones" element={<Voting />} />
                                                                                                                                  </Routes>
                                                                                                                                        </div>
                                                                                                                                            </Router>
                                                                                                                                              );
                                                                                                                                              }

                                                                                                                                              export default App;
