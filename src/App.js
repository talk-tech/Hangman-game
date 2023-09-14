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
      gameStatus: 'in-progress', // Updated gameStatus state
      isHelpModalOpen: false,
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
      this.setState(
        (prevState) => ({
          guessedLetters: [...prevState.guessedLetters, letter],
        }),
        this.checkGameStatus
      );
    } else {
      this.setState(
        (prevState) => ({
          guessedLetters: [...prevState.guessedLetters, letter],
          incorrectGuesses: prevState.incorrectGuesses + 1,
        }),
        this.checkGameStatus
      );
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

    let gameStatus = 'in-progress';
    if (hasWon) {
      gameStatus = 'win';
    } else if (hasLost) {
      gameStatus = 'lose';
    }

    this.setState({ gameStatus });
  };

  restartGame = () => {
    this.selectRandomWord();
    this.setState({
      guessedLetters: [],
      incorrectGuesses: 0,
      gameStatus: 'in-progress', // Reset game status
    });
  };

  toggleHelpModal = () => {
    this.setState((prevState) => ({
      isHelpModalOpen: !prevState.isHelpModalOpen,
    }));
  };

  render() {
    const { targetWord, guessedLetters, incorrectGuesses, gameStatus } = this.state;

    return (
      <div className="App">
        <h1 className="Heading-title">Hangman Game</h1>
        <Hangman incorrectGuesses={incorrectGuesses} />
        <Word word={targetWord} guessedLetters={guessedLetters} />
        <Keyboard onClickLetter={this.handleLetterClick} />
        <GameStatus gameStatus={gameStatus} onRestart={this.restartGame} />
        <button className="help-button" onClick={this.toggleHelpModal}>
          Help
        </button>
        <HelpModal
          isOpen={this.state.isHelpModalOpen}
          onRequestClose={this.toggleHelpModal}
        />
      </div>
    );
  }
}

export default App;