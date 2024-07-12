import React, { useState, useEffect } from 'react';
import './Voting.css';

function Voting() {
  const [fights, setFights] = useState([
    { id: 1, fighter1: 'Agustin51', fighter2: 'Carrera', votes: { fighter1: 0, fighter2: 0 } },
    { id: 2, fighter1: 'Guanyar', fighter2: 'La Cobra', votes: { fighter1: 0, fighter2: 0 } },
    { id: 3, fighter1: 'Zeling y Nissaxter', fighter2: 'Amablitz y Alana', votes: { fighter1: 0, fighter2: 0 } },
    { id: 4, fighter1: 'Viruzz', fighter2: 'Shelao', votes: { fighter1: 0, fighter2: 0 } },
    { id: 5, fighter1: 'Rey de la pista', fighter2: '10 boxeadores', votes: { fighter1: 0, fighter2: 0 }, 
      description: 'Roberto Cein - Peldanyos - Aldo Geo - Unicornio - Folagor - Skain - Karchez - Sezar Blue - Peliganger - Will' },
    { id: 6, fighter1: 'YoSoyPlex', fighter2: 'El Mariana', votes: { fighter1: 0, fighter2: 0 } },
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
        const updatedVotes = { ...fight.votes, [fighter]: fight.votes[fighter] + 1 };
        return { ...fight, votes: updatedVotes };
      }
      return fight;
    });

    const updatedUserVotes = { ...userVotes, [fightId]: fighter };

    setFights(updatedFights);
    setUserVotes(updatedUserVotes);
    localStorage.setItem('fightVotes', JSON.stringify(updatedFights));
    localStorage.setItem('userVotes', JSON.stringify(updatedUserVotes));
  };

  return (
    <div className="voting">
      <h2>Votaciones para los Combates</h2>
      {fights.map(fight => (
        <div key={fight.id} className="fight">
          <h3>Combate {fight.id}</h3>
          <div className="fighters">
            <button 
              onClick={() => handleVote(fight.id, 'fighter1')}
              disabled={userVotes[fight.id]}
              className={userVotes[fight.id] === 'fighter1' ? 'voted' : ''}
            >
              {fight.fighter1} ({fight.votes.fighter1} votos)
            </button>
            <span>VS</span>
            <button 
              onClick={() => handleVote(fight.id, 'fighter2')}
              disabled={userVotes[fight.id]}
              className={userVotes[fight.id] === 'fighter2' ? 'voted' : ''}
            >
              {fight.fighter2} ({fight.votes.fighter2} votos)
            </button>
          </div>
          {fight.description && <p className="fight-description">{fight.description}</p>}
        </div>
      ))}
    </div>
  );
}

export default Voting;