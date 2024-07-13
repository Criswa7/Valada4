import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import Schedule from './components/Schedule';
import Voting from './components/Voting';
import Sponsors from './components/Sponsors';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/horario" element={<Schedule />} />
            <Route path="/votaciones" element={<Voting />} />
          </Routes>
        </main>
        <Sponsors />
      </div>
    </Router>
  );
}

export default App;