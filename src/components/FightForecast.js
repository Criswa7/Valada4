import React from 'react';
import GaugeChart from 'react-gauge-chart';
import './FightForecast.css';

function FightForecast({ fighter1, fighter2, votes }) {
  const totalVotes = votes.fighter1 + votes.fighter2;
  // Invertimos el cálculo del porcentaje aquí
  const fighter2Percentage = totalVotes > 0 ? votes.fighter2 / totalVotes : 0.5;

  return (
    <div className="fight-forecast">
      <h4>Pronóstico</h4>
      <p>Basado en {totalVotes} predicciones</p>
      <div className="fighter-names">
        <span>{fighter1}</span>
        <span>{fighter2}</span>
      </div>
      <div className="gauge-container">
        <GaugeChart
          id={`gauge-chart-${fighter1}-${fighter2}`}
          nrOfLevels={2}
          colors={["#2E7D32", "#92C47C"]} // Invertimos los colores aquí
          arcWidth={0.3}
          percent={fighter2Percentage} // Usamos fighter2Percentage aquí
          textColor="#ffffff"
          needleColor="#ffffff"
          needleBaseColor="#ffffff"
          hideText={true}
        />
      </div>
      <div className="fighters-percentage">
        <span>{((1 - fighter2Percentage) * 100).toFixed(1)}%</span>
        <span>{(fighter2Percentage * 100).toFixed(1)}%</span>
      </div>
    </div>
  );
}

export default FightForecast;