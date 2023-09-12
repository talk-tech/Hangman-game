import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const HelpModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Help Modal"
    >
      <h2>Hangman Game Rules</h2>
      <p>
        Hangman is a word-guessing game. The objective is to guess the
        hidden word by suggesting letters within a certain number of
        incorrect guesses.
      </p>
      <p>
        Rules:
        <ul>
          <li>A random word is selected, and you need to guess it letter by letter.</li>
          <li>You have 6 incorrect guesses allowed. If you exceed this limit, you lose.</li>
          <li>If you correctly guess all letters before running out of incorrect guesses, you win.</li>
          <li>Click the "Restart" button to start a new game at any time.</li>
        </ul>
      </p>
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default HelpModal;