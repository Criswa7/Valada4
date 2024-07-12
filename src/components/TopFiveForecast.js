import React from 'react';
import './TopFiveForecast.css';

function TopFiveForecast({ fighters, votes }) {
  const totalVotes = Object.values(votes).reduce((sum, count) => sum + count, 0);
  
  const sortedFighters = fighters
    .map(fighter => ({
      name: fighter,
      votes: votes[fighter] || 0,
      percentage: totalVotes > 0 ? ((votes[fighter] || 0) / totalVotes) * 100 : 0
    }))
    .sort((a, b) => b.votes - a.votes)
    .slice(0, 5);

  return (
    <div className="top-five-forecast">
      <h4>Top 5 - Rey de la pista</h4>
      <p>Basado en {totalVotes} predicciones</p>
      <ul className="top-five-list">
        {sortedFighters.map((fighter, index) => (
          <li key={fighter.name}>
            <span className="rank">{index + 1}</span>
            <span className="name">{fighter.name}</span>
            <span className="percentage">{fighter.percentage.toFixed(1)}%</span>
            <div className="bar-container">
              <div className="bar" style={{ width: `${fighter.percentage}%` }}></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopFiveForecast;