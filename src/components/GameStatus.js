import React from 'react';

const GameStatus = ({ gameStatus, onRestart }) => {
  let message = '';

  if (gameStatus === 'win') {
    message = 'You Win!';
  } else if (gameStatus === 'lose') {
    message = 'You Lose!';
  } else if (gameStatus === 'in-progress') {
    message = 'Keep guessing...';
  }

  return (
    <div className="game-status">
      <div className={gameStatus === 'win' ? 'win' : 'lose'}>{message}</div>
      <button className='restart-button' onClick={onRestart}>Restart Game</button>
    </div>
  );
};

export default GameStatus;