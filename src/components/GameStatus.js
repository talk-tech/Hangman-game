import React from 'react';

const GameStatus = ({ gameStatus, onRestart }) => {
  return (
    <div className="game-status">
      {gameStatus === 'win' && <div className="win">You Win!</div>}
      {gameStatus === 'lose' && <div className="lose">You Lose!</div>}
      {gameStatus === 'in-progress' && (
        <div className="in-progress">Keep guessing...</div>
      )}
      <button className='restart-button' onClick={onRestart}>Restart Game</button>
    </div>
  );
};

export default GameStatus;