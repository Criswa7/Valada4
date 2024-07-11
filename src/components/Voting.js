import React, { useState, useEffect } from 'react';
import './Voting.css';

function Voting() {
  const [fights, setFights] = useState([
      { id: 1, fighter1: 'Luchador 1', fighter2: 'Luchador 2', votes: { fighter1: 0, fighter2: 0 } },
          { id: 2, fighter1: 'Luchador 3', fighter2: 'Luchador 4', votes: { fighter1: 0, fighter2: 0 } },
              { id: 3, fighter1: 'Luchador 5', fighter2: 'Luchador 6', votes: { fighter1: 0, fighter2: 0 } },
                ]);

                  useEffect(() => {
                      const savedVotes = localStorage.getItem('fightVotes');
                          if (savedVotes) {
                                setFights(JSON.parse(savedVotes));
                                    }
                                      }, []);

                                        const handleVote = (fightId, fighter) => {
                                            const updatedFights = fights.map(fight => {
                                                  if (fight.id === fightId) {
                                                          const updatedVotes = { ...fight.votes, [fighter]: fight.votes[fighter] + 1 };
                                                                  return { ...fight, votes: updatedVotes };
                                                                        }
                                                                              return fight;
                                                                                  });
                                                                                      setFights(updatedFights);
                                                                                          localStorage.setItem('fightVotes', JSON.stringify(updatedFights));
                                                                                            };

                                                                                              return (
                                                                                                  <div className="voting">
                                                                                                        <h2>Votaciones para los Combates</h2>
                                                                                                              {fights.map(fight => (
                                                                                                                      <div key={fight.id} className="fight">
                                                                                                                                <h3>Combate {fight.id}</h3>
                                                                                                                                          <div className="fighters">
                                                                                                                                                      <button onClick={() => handleVote(fight.id, 'fighter1')}>
                                                                                                                                                                    {fight.fighter1} ({fight.votes.fighter1} votos)
                                                                                                                                                                                </button>
                                                                                                                                                                                            <span>VS</span>
                                                                                                                                                                                                        <button onClick={() => handleVote(fight.id, 'fighter2')}>
                                                                                                                                                                                                                      {fight.fighter2} ({fight.votes.fighter2} votos)
                                                                                                                                                                                                                                  </button>
                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                          ))}
                                                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                                                );
                                                                                                                                                                                                                                                                }

                                                                                                                                                                                                                                                                export default Voting;