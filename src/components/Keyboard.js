import React from 'react';

const Keyboard = ({ onClickLetter }) => {
  // Define an array of letters for the keyboard
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  // Function to handle letter clicks and pass the clicked letter to the parent component
  const handleLetterClick = (letter) => {
    onClickLetter(letter);
  };

  return (
    <div className="keyboard">
      {alphabet.map((letter) => (
        <button
          key={letter}
          onClick={() => handleLetterClick(letter)}
          className="letter-button"
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;