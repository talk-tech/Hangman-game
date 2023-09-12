import React, { Component } from 'react';
import './App.css';
import Hangman from './components/Hangman';
import Word from './components/Word';
import Keyboard from './components/Keyboard';
import GameStatus from './components/GameStatus';
import HelpModal from './components/HelpModal'; 

class App extends Component {
  constructor() {
    super();
    this.state = {
      targetWord: '',
      guessedLetters: [],
      incorrectGuesses: 0,
      isHelpModalOpen: false, // Add a state for tracking the modal's visibility
    };

    this.wordList = ['hangman', 'javascript', 'react', 'programming', 'developer', 'coding'];
  }

  componentDidMount() {
    this.selectRandomWord();
  }

  handleLetterClick = (letter) => {
    const { targetWord, guessedLetters } = this.state;

    if (guessedLetters.includes(letter)) {
      return;
    }

    if (targetWord.includes(letter)) {
      this.setState((prevState) => ({
        guessedLetters: [...prevState.guessedLetters, letter],
      }), this.checkGameStatus);
    } else {
      this.setState((prevState) => ({
        guessedLetters: [...prevState.guessedLetters, letter],
        incorrectGuesses: prevState.incorrectGuesses + 1,
      }), this.checkGameStatus);
    }
  };

  selectRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * this.wordList.length);
    this.setState({
      targetWord: this.wordList[randomIndex],
    });
  };

  checkGameStatus = () => {
    const { targetWord, guessedLetters, incorrectGuesses } = this.state;

    const hasWon = targetWord.split('').every((letter) =>
      guessedLetters.includes(letter)
    );

    const hasLost = incorrectGuesses >= 6;

    if (hasWon || hasLost) {
      setTimeout(this.restartGame, 1500);
    }
  };

  restartGame = () => {
    this.selectRandomWord();
    this.setState({
      guessedLetters: [],
      incorrectGuesses: 0,
    });
  };

  // Function to toggle the Help modal's visibility
  toggleHelpModal = () => {
    this.setState((prevState) => ({
      isHelpModalOpen: !prevState.isHelpModalOpen,
    }));
  };

  render() {
    const { targetWord, guessedLetters, incorrectGuesses } = this.state;

    return (
      <div className="App">
        <h1 className='Heading-title'>Hangman Game</h1>
        <Hangman incorrectGuesses={incorrectGuesses} />
        <Word word={targetWord} guessedLetters={guessedLetters} />
        <Keyboard onClickLetter={this.handleLetterClick} />
        <GameStatus gameStatus={this.checkGameStatus()} onRestart={this.restartGame} />
        {/* Add the Help button */}
        <button className='help-button' onClick={this.toggleHelpModal}>Help</button>
        {/* Render the Help modal */}
        <HelpModal
          isOpen={this.state.isHelpModalOpen}
          onRequestClose={this.toggleHelpModal}
        />
      </div>
    );
  }
}

export default App;
