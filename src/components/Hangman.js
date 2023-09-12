import React from 'react';

const Hangman = ({ incorrectGuesses }) => {
  // Define the hangman figure with different stages
  const hangmanFigures = [
    `
     _______
    |       |
    |       
    |       
    |       
    |       
   _|_______`,
    `
     _______
    |       |
    |       O
    |       
    |       
    |       
   _|_______`,
    `
     _______
    |       |
    |       O
    |       |
    |       
    |       
   _|_______`,
    `
     _______
    |       |
    |       O
    |      /|
    |       
    |       
   _|_______`,
    `
     _______
    |       |
    |       O
    |      /|\\
    |       
    |       
   _|_______`,
    `
     _______
    |       |
    |       O
    |      /|\\
    |      / 
    |       
   _|_______`,
    `
     _______
    |       |
    |       O
    |      /|\\
    |      / \\
    |       
   _|_______`,
  ];

  // Render the hangman figure based on incorrect guesses
  return (
    <div className="hangman">
      <pre>{hangmanFigures[incorrectGuesses]}</pre>
    </div>
  );
};

export default Hangman;