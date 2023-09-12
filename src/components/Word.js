import React from 'react';

const Word = ({ word, guessedLetters }) => {
  // Function to display the word with placeholders
  const displayWord = () => {
    return word.split('').map((letter, index) => {
      // Check if the letter has been guessed
      const isGuessed = guessedLetters.includes(letter);

      return (
        <span key={index} className={`letter ${isGuessed ? 'guessed' : 'placeholder'}`}>
          {isGuessed ? letter : '_'}
        </span>
      );
    });
  };

  return (
    <div className="word">
      {displayWord()}
    </div>
  );
};

export default Word;