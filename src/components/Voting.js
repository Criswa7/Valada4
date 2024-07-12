import React, { useState, useEffect } from 'react';
import './Voting.css';
import FightForecast from './FightForecast';
import TopFiveForecast from './TopFiveForecast';

function Voting() {
  const [fights, setFights] = useState([
    { id: 1, fighter1: 'Agustin51', fighter2: 'Carreraaa', votes: { fighter1: 0, fighter2: 0 }, size: 'big' },
    { id: 2, fighter1: 'Guanyar', fighter2: 'La Cobra', votes: { fighter1: 0, fighter2: 0 }, size: 'big' },
    { id: 3, fighter1: 'Zeling y Nissaxter', fighter2: 'Ama Blitz y Alana', votes: { fighter1: 0, fighter2: 0 }, size: 'small' },
    { id: 4, fighter1: 'Viruzz', fighter2: 'Shelao', votes: { fighter1: 0, fighter2: 0 }, size: 'big' },
    { 
      id: 5, 
      type: 'multiple',
      title: 'Rey de la pista',
      fighters: [
        'Roberto Cein', 'Peldanyos', 'Aldo Geo', 'Unicornio', 'Folagor',
        'Skain', 'Karchez', 'Sezar Blue', 'Pelicanger', 'Will'
      ],
      votes: {},
      size: 'small'
    },
    { id: 6, fighter1: 'Plex', fighter2: 'El Mariana', votes: { fighter1: 0, fighter2: 0 }, size: 'big' },
  ]);

  const [userVotes, setUserVotes] = useState({});

  useEffect(() => {
    const savedFights = localStorage.getItem('fightVotes');
    const savedUserVotes = localStorage.getItem('userVotes');
    if (savedFights) {
      setFights(JSON.parse(savedFights));
    }
    if (savedUserVotes) {
      setUserVotes(JSON.parse(savedUserVotes));
    }
  }, []);

  const handleVote = (fightId, fighter) => {
    if (userVotes[fightId]) {
      alert('Ya has votado en este combate.');
      return;
    }

    setFights(prevFights => {
      const updatedFights = prevFights.map(fight => {
        if (fight.id === fightId) {
          if (fight.type === 'multiple') {
            return {
              ...fight,
              votes: {
                ...fight.votes,
                [fighter]: (fight.votes[fighter] || 0) + 1
              }
            };
          } else {
            return {
              ...fight,
              votes: {
                ...fight.votes,
                [fighter]: (fight.votes[fighter] || 0) + 1
              }
            };
          }
        }
        return fight;
      });

      localStorage.setItem('fightVotes', JSON.stringify(updatedFights));
      return updatedFights;
    });

    setUserVotes(prevUserVotes => {
      const updatedUserVotes = { ...prevUserVotes, [fightId]: fighter };
      localStorage.setItem('userVotes', JSON.stringify(updatedUserVotes));
      return updatedUserVotes;
    });
  };

  const getImageFileName = (fighter, size) => {
    const baseName = fighter.toLowerCase().replace(' y ', '-').replace(' ', '-');
    return `${baseName}-${size}.webp`;
  };

  const renderFighterButton = (fightId, fighterKey, votes, size) => {
    const fight = fights.find(f => f.id === fightId);
    const fighterName = fight.type === 'multiple' ? fighterKey : fight[fighterKey];
    return (
      <button 
        onClick={() => handleVote(fightId, fighterKey)}
        disabled={userVotes[fightId]}
        className={`${userVotes[fightId] === fighterKey ? 'voted' : ''} ${size}`}
      >
        <img src={`/images/${getImageFileName(fighterName, size)}`} alt={fighterName} />
        <span>{fighterName}</span>
        <span>({votes} votos)</span>
      </button>
    );
  };

  return (
    <div className="voting">
      <h2>Votaciones para los Combates</h2>
      {fights.map(fight => (
        <div key={fight.id} className="fight">
          <h3>Combate {fight.id}</h3>
          {fight.type === 'multiple' ? (
            <div className="multiple-fighters">
              <h4>{fight.title}</h4>
              {fight.fighters.map(fighter => (
                <div key={fighter} className="fighter-button">
                  {renderFighterButton(fight.id, fighter, fight.votes[fighter] || 0, fight.size)}
                </div>
              ))}
              {fight.type === 'multiple' && (
  <TopFiveForecast
    fighters={fight.fighters}
    votes={fight.votes}
  />
)}
            </div>
          ): (
            <div className="fighters">
              {renderFighterButton(fight.id, 'fighter1', fight.votes.fighter1, fight.size)}
              <span>VS</span>
              {renderFighterButton(fight.id, 'fighter2', fight.votes.fighter2, fight.size)}
            </div>
          )}
        
        {!fight.type && (
  <FightForecast
    fighter1={fight.fighter1}
    fighter2={fight.fighter2}
    votes={fight.votes}
  />
)}
        
        </div>
      ))}
    </div>
  );
}

export default Voting;