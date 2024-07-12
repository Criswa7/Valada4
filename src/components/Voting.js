import React, { useState, useEffect } from 'react';
import './Voting.css';

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

    const updatedFights = fights.map(fight => {
      if (fight.id === fightId) {
        if (fight.type === 'multiple') {
          const updatedVotes = { ...fight.votes, [fighter]: (fight.votes[fighter] || 0) + 1 };
          return { ...fight, votes: updatedVotes };
        } else {
          const updatedVotes = { ...fight.votes, [fighter]: fight.votes[fighter] + 1 };
          return { ...fight, votes: updatedVotes };
        }
      }
      return fight;
    });

    const updatedUserVotes = { ...userVotes, [fightId]: fighter };

    setFights(updatedFights);
    setUserVotes(updatedUserVotes);
    localStorage.setItem('fightVotes', JSON.stringify(updatedFights));
    localStorage.setItem('userVotes', JSON.stringify(updatedUserVotes));
  };

  const getImageFileName = (fighter, size) => {
    const baseName = fighter.toLowerCase().replace(' y ', '-').replace(' ', '-');
    return `${baseName}-${size}.webp`;
  };

  const renderFighterButton = (fightId, fighter, votes, size) => (
    <button 
      onClick={() => handleVote(fightId, fighter)}
      disabled={userVotes[fightId]}
      className={`${userVotes[fightId] === fighter ? 'voted' : ''} ${size}`}
    >
      <img src={`/images/${getImageFileName(fighter, size)}`} alt={fighter} />
      <span>{fighter}</span>
      <span>({votes} votos)</span>
    </button>
  );

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
            </div>
          ) : (
            <div className="fighters">
              {renderFighterButton(fight.id, fight.fighter1, fight.votes.fighter1, fight.size)}
              <span>VS</span>
              {renderFighterButton(fight.id, fight.fighter2, fight.votes.fighter2, fight.size)}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Voting;