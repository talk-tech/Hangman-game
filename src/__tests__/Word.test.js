import React from 'react';
import { render } from '@testing-library/react';
import Word from '../components/Word';

describe('Word Component', () => {
  it('should render correctly with guessed letters', () => {
    const guessedLetters = ['h', 'a']; // Add the guessed letters here
    const word = 'hangman';

    const { container } = render(<Word word={word} guessedLetters={guessedLetters} />);

    // Check if the guessed letters are displayed correctly
    expect(container).toHaveTextContent('h');
    expect(container).toHaveTextContent('a'); // Should be guessed
    expect(container).not.toHaveTextContent('n'); // Should be guessed
    expect(container).toHaveTextContent('_'); // Placeholder for unguessed letters
  });
});